import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ChannelCard = ({ video, marginTop }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: { xs: "356px", md: "320px" },
        height: "360px",
        margin: "auto",
        marginTop: marginTop,
      }}
    >
      <Link
        to={`/channel/${
          video?.id?.channelId ? video?.id?.channelId : video?.id
        }`}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <CardMedia
            image={video?.snippet?.thumbnails?.high?.url}
            alt={video?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h4">
            {video?.snippet?.title.length >= 45
              ? video?.snippet?.title.slice(0, 45) + "..."
              : video?.snippet?.title}
            <CheckCircle
              sx={{ fontSize: "23px", color: "gray", marginLeft: 1 }}
            />
          </Typography>
          {video?.statistics?.subscriberCount && (
            <Typography variant="subtitle2" fontSize={17} mt={1} color={"gray"}>
              {video?.statistics?.subscriberCount} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
