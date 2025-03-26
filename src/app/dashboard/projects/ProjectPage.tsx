"use client";

import { Box, Dialog, Stack } from "@/components";
import { useRouter } from "next/navigation";
import { projectData } from "./project-data/project-data";

export default function ProjectPage(props: { projectId: number }) {
  const project = projectData.find((x) => x.id === props.projectId);
  const router = useRouter();

  const handleGoBack = () => {
    router.push("..");
  };

  function contentBody() {
    return (
      <Stack spacing={3} p={5}>
        <Stack alignItems={"center"}>
          <Box
            sx={{
              width: "100%",
              maxWidth: "calc(min(100vw, 1680px) * 0.9)", // Limits to X% of viewport up to px
            }}
          >
            {project?.ladyLoadContent && <project.ladyLoadContent />}
          </Box>
        </Stack>
      </Stack>
    );
  }

  return (
    <Dialog
      fullScreen
      width="100%"
      open={true}
      // width="90%"
      // title={openedFeatureItem.title}
      content={contentBody()}
      // maxWidth={openedFeatureItem.dialogMaxWidth}
      // footer={
      //   <Button variant="outlined" onClick={() => setOpenedFeatureItem(undefined)}>
      //     Close
      //   </Button>
      // }
      // onClose={handleGoBack} // disable for now, causes reanimation: fix later
    />
  );
}
