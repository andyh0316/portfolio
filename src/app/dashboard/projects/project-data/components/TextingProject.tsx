import { Box, Card, Stack, Typography, YoutubePlayer } from "@/components";

export default function ImportProject() {
  return (
    <Stack spacing={3}>
      <Box border={1} borderColor="divider">
        <img src="/cobro-demo/texting.png" alt="Texting" width="100%" style={{ display: "block" }} />
      </Box>

      <Card variant="outlined" sx={{ p: 2 }}>
        <Stack spacing={0.5}>
          <Typography variant="inherit">Features for managing text messages to students.</Typography>
          <Typography variant="inherit">Can automate mass sending, scheduled sending and automatic replies.</Typography>
          <Typography variant="inherit">
            Greatly increases the effciency of communication between staff and students.
          </Typography>
        </Stack>
      </Card>
    </Stack>
  );
}
