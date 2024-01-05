import { Grid, Stack } from "@mui/material";
import { VideoCard, ChannelCard, Loader } from "../";
const Videos = ({ videos, channel }) => {
  if (!videos.length) return <Loader />;
  return (
    <Stack width={"100%"}>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {videos.map((item) => (
          <Grid item xs key={item.id.videoId}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard video={item} />}
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Videos;
