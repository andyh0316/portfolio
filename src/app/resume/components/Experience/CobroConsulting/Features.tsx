import { Button, Chip, Dialog, Grid, Stack } from "@/components";
import { ReactNode, useState } from "react";
import { YoutubePlayer } from "../../common/YoutubePlayer";

type Feature = "Data Import" | "Reports" | "Texting";
interface FeatureItem {
  feature: Feature;
  content: ReactNode;
}
const features: Feature[] = ["Data Import", "Reports", "Texting"];

export const Features = () => {
  const featureItems: FeatureItem[] = [{ feature: "Data Import", content: <YoutubePlayer videoId="ggRSyhMAxuo" /> }];
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
