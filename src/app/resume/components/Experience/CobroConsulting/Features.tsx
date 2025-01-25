import { Button, Chip, Dialog, Grid, Stack, Typography, Box } from "@/components";
import { ReactNode, useState } from "react";
import { YoutubePlayer } from "../../common/YoutubePlayer";
import { Breakpoint } from "@mui/material";

type Feature = "Data Import" | "Reports" | "Texting";
interface FeatureItem {
  feature: Feature;
  content: ReactNode;
  dialogMaxWidth: Breakpoint;
}

const featureItems: FeatureItem[] = [
  {
    feature: "Data Import",
    dialogMaxWidth: "lg",
    content: (
      <Stack spacing={1}>
        <YoutubePlayer videoId="JVDRc7ui_sU" />

        <Stack>Tech used: ReactJS, MUI, .NET, Websocket SignalR, Async processes, Excel parsing, AI</Stack>
      </Stack>
    ),
  },
  {
    feature: "Texting",
    dialogMaxWidth: "md",
    content: (
      <Stack spacing={2}>
        <Box border={1} borderColor="divider">
          <img src="/texting.png" alt="Texting" width="100%" style={{ display: "block" }} />
        </Box>

        <Stack spacing={0.5}>
          <Typography variant="inherit">Features for managing text messages to students.</Typography>
          <Typography variant="inherit">Can automate mass sending, scheduled sending and automatic replies.</Typography>
          <Typography variant="inherit">
            Greatly increases the effciency of communication between staff and students.
          </Typography>
        </Stack>
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
            title={openedFeatureItem.feature}
            content={openedFeatureItem.content}
            maxWidth={openedFeatureItem.dialogMaxWidth}
            footer={
              <Button variant="outlined" onClick={() => setOpenedFeatureItem(undefined)}>
                Close
              </Button>
            }
            onClose={() => setOpenedFeatureItem(undefined)}
          />
        )}
      </Stack>
    </>
  );
};
