import { Box, Stack, Typography } from "@/components";

export default function CompassProject() {
  return (
    <Stack spacing={3}>
      <Typography variant="inherit">All data shown are from demo and not real. Scroll down for more.</Typography>

      <Stack spacing={1}>
        <Typography variant="h6">Student List: main page of the application.</Typography>
        <Box border={1} borderColor="divider">
          <img src="/cobro-demo/student-list.png" width="100%" style={{ display: "block" }} />
        </Box>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h6">Student Filters</Typography>
        <Box border={1} borderColor="divider">
          <img src="/cobro-demo/student-filter.png" width="100%" style={{ display: "block" }} />
        </Box>
      </Stack>

      <Stack spacing={1}>
        <Stack>
          <Typography variant="h6">Student Page: customizable fields, comments, transcript and more</Typography>
          <Typography variant="caption">
            This page loads quickly (within 200ms) by combining lazy loading and proactive loading: main data are loaded
            first while the rest are loaded in the background or loaded on demand.
          </Typography>
        </Stack>
        <Box border={1} borderColor="divider">
          <img src="/cobro-demo/student-page.png" width="100%" style={{ display: "block" }} />
        </Box>
      </Stack>
    </Stack>
  );
}
