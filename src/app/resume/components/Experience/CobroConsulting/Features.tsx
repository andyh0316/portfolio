import { Button, Chip, Dialog, Grid, Stack } from "@/components";
import { ReactNode, useState } from "react";
import { YoutubePlayer } from "../../common/YoutubePlayer";

type Feature = "Data Import" | "Reports" | "Texting";
interface FeatureItem {
  feature: Feature;
  content: ReactNode;
}

export const Features = () => {
  const featureItems: FeatureItem[] = [
    {
      feature: "Data Import",
      content: (
        <Stack spacing={1}>
          <YoutubePlayer videoId="ggRSyhMAxuo" />

          <Stack>Tech used: ReactJS, MUI, .NET, Websocket SignalR, Async processes, Excel parsing, AI</Stack>
        </Stack>
      ),
    },
  ];
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
            title="Haha"
            content={openedFeatureItem.content}
            width="90%"
            maxWidth="lg"
            // width="1000px"
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
