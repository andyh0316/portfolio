import { Box } from "@/components";

export const YoutubePlayer = (props: { videoId: string }) => {
  return (
    <Box
      sx={{
        position: "relative",
        paddingTop: "56.25%", // 16:9 Aspect Ratio
        width: "100%",
        // ...sx,
      }}
      {...props}
    >
      <Box
        component="iframe"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
        src={`https://www.youtube.com/embed/${props.videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Box>
  );
};
