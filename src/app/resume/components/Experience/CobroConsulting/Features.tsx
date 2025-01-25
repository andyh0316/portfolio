import { Button, Chip, Dialog, Grid, Stack, Typography, Box, Card } from "@/components";
import { ReactNode, useState } from "react";
import { YoutubePlayer } from "../../common/YoutubePlayer";
import { Breakpoint } from "@mui/material";

type Feature = "Data Import" | "Reports" | "Texting";
interface FeatureItem {
  feature: Feature;
  title: string;
  content: ReactNode;
  dialogMaxWidth: Breakpoint;
}

const featureItems: FeatureItem[] = [
  {
    feature: "Data Import",
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
    feature: "Texting",
    title: "Texting",
    dialogMaxWidth: "md",
    content: (
      <Stack spacing={3}>
        <Box border={1} borderColor="divider">
          <img src="/texting.png" alt="Texting" width="100%" style={{ display: "block" }} />
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
      {featureItems.map((featureItem) => (
        <Grid item key={featureItem.feature}>
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
