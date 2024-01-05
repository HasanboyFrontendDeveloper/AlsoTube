import { Box, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ApiService } from "../../service/api.service";
import { ChannelCard, Videos } from "../";

const Channel = () => {
  const [channelDetail, setChannelDetail] = useState([]);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    try {
      const getData = async () => {
        const dataChannel = await ApiService.fetching(
          `channels?part=snippet&id=${id}`
        );
        setChannelDetail(await dataChannel.items[0]);

        const channelVideos = await ApiService.fetching(
          `search?channelId=${id}&part=snippet%2Cid&order=date`
        );
        setVideos(await channelVideos.items);
        
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  console.log(videos);

  return (
    <Box minHeight={"95vh"}>
      <Box>
        <Box
          width={"100%"}
          height={"300px"}
          sx={{
            backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            objectFit: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        ></Box>
        <ChannelCard video={channelDetail} marginTop={'-100px'} />
        <Container maxWidth={'90%'}>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Box>
  );
};

export default Channel;
