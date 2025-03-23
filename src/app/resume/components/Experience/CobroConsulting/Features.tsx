import { Button, Chip, Dialog, Grid, Stack, Typography, Box, Card, YoutubePlayer } from "@/components";
import { ReactNode, useState } from "react";
import { Breakpoint } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ImageIcon from "@mui/icons-material/Image";

interface FeatureItem {
  feature: ReactNode;
  title: string;
  content: ReactNode;
  dialogMaxWidth: Breakpoint;
}

const featureItems: FeatureItem[] = [
  {
    feature: (
      <Stack direction="row" spacing={0.5} alignItems="center">
        <YouTubeIcon fontSize="small" />
        <Typography variant="inherit">Data Import</Typography>
      </Stack>
    ),
    title: "The simplest example of an Import process",
    dialogMaxWidth: "md",
    content: (
      <Stack spacing={3}>
        <Box width="100%">
          <YoutubePlayer videoId="U6BL3kYPDAw" />
        </Box>

        <Card variant="outlined" sx={{ p: 2 }}>
          <Stack spacing={0.5}>
            <Typography variant="inherit">
              System for each client (school district) to import their own data.
            </Typography>
            <Typography variant="inherit">
              Used by over 100 clients to process an average of 500 files daily,
            </Typography>
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
    ),
  },
  {
    feature: (
      <Stack direction="row" spacing={0.5} alignItems="center">
        <ImageIcon fontSize="small" />
        <Typography variant="inherit">Student Page</Typography>
      </Stack>
    ),
    title: "Main page",
    dialogMaxWidth: "lg",
    content: (
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
              This page loads quickly (within 200ms) by combining lazy loading and proactive loading: main data are
              loaded first while the rest are loaded in the background or loaded on demand.
            </Typography>
          </Stack>
          <Box border={1} borderColor="divider">
            <img src="/cobro-demo/student-page.png" width="100%" style={{ display: "block" }} />
          </Box>
        </Stack>
      </Stack>
    ),
  },
  {
    feature: (
      <Stack direction="row" spacing={0.5} alignItems="center">
        <ImageIcon fontSize="small" />
        <Typography variant="inherit">Texting</Typography>
      </Stack>
    ),
    title: "Texting",
    dialogMaxWidth: "md",
    content: (
      <Stack spacing={3}>
        <Box border={1} borderColor="divider">
          <img src="/cobro-demo/texting.png" alt="Texting" width="100%" style={{ display: "block" }} />
        </Box>

        <Card variant="outlined" sx={{ p: 2 }}>
          <Stack spacing={0.5}>
            <Typography variant="inherit">Features for managing text messages to students.</Typography>
            <Typography variant="inherit">
              Can automate mass sending, scheduled sending and automatic replies.
            </Typography>
            <Typography variant="inherit">
              Greatly increases the effciency of communication between staff and students.
            </Typography>
          </Stack>
        </Card>
      </Stack>
    ),
  },
];

export const Features = () => {
  const [openedFeatureItem, setOpenedFeatureItem] = useState<FeatureItem>();

  return (
    <>
      <Box>
        <Grid container spacing={0.8} display="flex">
          <Grid item>
            <Stack justifyContent="center" height="100%">
              <Typography variant="inherit">Demos (click to see):</Typography>
            </Stack>
          </Grid>

          {featureItems.map((featureItem, index) => (
            <Grid item key={index}>
              <Chip
                label={featureItem.feature}
                onClick={() => {
                  setOpenedFeatureItem(featureItem);
                }}
                size="small"
                variant="outlined"
                color="primary"
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Stack>
        {openedFeatureItem && (
          <Dialog
            open={true}
            width="90%"
            title={openedFeatureItem.title}
            content={openedFeatureItem.content}
            maxWidth={openedFeatureItem.dialogMaxWidth}
            // footer={
            //   <Button variant="outlined" onClick={() => setOpenedFeatureItem(undefined)}>
            //     Close
            //   </Button>
            // }
            onClose={() => setOpenedFeatureItem(undefined)}
          />
        )}
      </Stack>
    </>
  );
};
