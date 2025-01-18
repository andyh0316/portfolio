import { Button, Stack, Typography } from "@/components";

export const BackgroundContent = (props: { backToResume: () => void }) => {
  return (
    <Stack
      sx={{
        position: "absolute",
        // backgroundColor: "white",
        left: 0,
        right: 0,
        bottom: 0,
        height: "100%",
        color: "white",
      }}
      alignItems="center"
      justifyContent={"center"}
    >
      <Stack spacing={2}>
        <Typography variant="h3">Hire Me Please! 🙏</Typography>
        <Button onClick={props.backToResume} variant="contained" color="primary">
          Back to Resume
        </Button>
      </Stack>
    </Stack>
  );
};
