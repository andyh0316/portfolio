import { Box, Card, Stack, Typography, YoutubePlayer } from "@/components";

export default function ImportProject() {
  return (
    <Stack width="100%" spacing={3}>
      <Box width="100%">
        <YoutubePlayer videoId="U6BL3kYPDAw" />
      </Box>

      <Card variant="outlined" sx={{ p: 2 }}>
        <Stack spacing={0.5}>
          <Typography variant="inherit">System for each client (school district) to import their own data.</Typography>
          <Typography variant="inherit">Used by over 100 clients to process an average of 500 files daily,</Typography>
          <Typography variant="inherit">
            Greatly increases the simplicity of data validation and speed of import. Can handle all variations of data
            complexity.
          </Typography>
          <Typography variant="inherit">
            Tech used: ReactJS, MUI, .NET, Websocket SignalR, Async processes, Excel parsing, AI.
          </Typography>
        </Stack>
      </Card>
    </Stack>
  );
}
