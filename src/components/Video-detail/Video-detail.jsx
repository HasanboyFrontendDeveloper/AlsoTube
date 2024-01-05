import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service.js";
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import { Loader, Videos } from "../";
import ReactPlayer from "react-player";
import "../../index.css";
import {
  CheckCircle,
  ModeComment,
  Tag,
  ThumbUpOffAlt,
  Visibility,
} from "@mui/icons-material";

const VideoDetail = ({video}) => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [reletedVideos, setReletedVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    try {
      const getData = async () => {
        const data = await ApiService.fetching(
          `videos?part=snippet,statistics&id=${id}`
        );
        setVideoDetail(await data.items[0]);
        const reletedData = await ApiService.fetching(
          `search?part=snippet&relatedToVideoId=${id}&type=video`
        );
        setReletedVideos(reletedData.items);
        return data;
      };

      getData();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  if (!videoDetail) return <Loader />;
  if (!reletedVideos) return <Loader />;
  const {
    snippet: { channelTitle, description, title, tags },
    statistics: { commentCount, likeCount, viewCount },
  } = videoDetail;

  return (
    <Box minHeight={"90vh"} mb={10}>
      <Box display={"flex"} sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Box width={{ xs: "100%", md: "75%" }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          />
          <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
            <Stack direction={"row"} py={3} px={1}>
              <Stack direction={"row"} alignItems={"center"} gap={2} mt={2}>
                <Avatar
                  alt={channelTitle}
                  src={videoDetail?.snippet?.thumbnails?.default?.url}
                />
                <Typography variant="p" fontSize={18} sx={{ opacity: 0.7 }}>
                  {channelTitle}
                </Typography>
                <CheckCircle sx={{ opacity: 0.7, fontSize: "17px" }} />
              </Stack>
            </Stack>
          </Link>
          {tags &&
            tags.map((tag, idx) => (
              <Chip
                key={idx}
                variant="outlined"
                label={tag}
                deleteIcon={<Tag />}
                onDelete={() => {}}
                sx={{ marginTop: 1, marginX: 1, cursor: "pointer" }}
              />
            ))}
          <Typography variant="h5" fontWeight={5} p={2}>
            {title}
          </Typography>
          <Box width={"100%"} p={2}>
            <Typography variant="p" fontWeight={5} fontSize={17}>
              {description}
            </Typography>
          </Box>
          <Stack
            direction={"row"}
            gap={"20px"}
            alignItems={"center"}
            py={1}
            px={2}
          >
            <Stack
              sx={{ opacity: 0.7 }}
              direction={"row"}
              alignItems={"center"}
              gap={1}
            >
              <Visibility />
              {parseInt(viewCount).toLocaleString()} views
            </Stack>
            <Stack
              sx={{ opacity: 0.7 }}
              direction={"row"}
              alignItems={"center"}
              gap={1}
            >
              <ThumbUpOffAlt />
              {parseInt(likeCount).toLocaleString()} Likes
            </Stack>
            <Stack
              sx={{ opacity: 0.7 }}
              direction={"row"}
              alignItems={"center"}
              gap={1}
            >
              <ModeComment />
              {parseInt(commentCount).toLocaleString()} comments
            </Stack>
          </Stack>
        </Box>
        <Box
          width={{ xs: "100%", md: "25%" }}
          px={2}
          py={{ xs: 5, md: 1 }}
          justifyContent={"center"}
          overflow={"scroll"}
          maxHeight={"120vh"}
        >
          <Videos videos={reletedVideos} />
        </Box>
      </Box>
    </Box>
  );
};

export default VideoDetail;
