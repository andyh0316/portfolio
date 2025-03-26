"use client";

import { Box, Dialog, Stack } from "@/components";
import { useParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import { projectData } from "../project-data/project-data";

export default function ProjectPage() {
  const router = useRouter();
  const params = useParams();
  const projectId = params.projectId;

  const handleGoBack = () => {
    router.push("..");
  };

  const project = projectData.find((x) => x.id === Number(projectId));

  function contentBody() {
    return (
      <Stack spacing={3} p={5}>
        {/* <div>
        <h1>Project Details</h1>
        <p>Project ID: {projectId}</p>
        <button onClick={handleGoBack}>Go Back to Projects</button>
      </div> */}

        <Stack alignItems={"center"}>
          <Box
            sx={{
              width: "100%",
              maxWidth: "calc(min(100vw, 1680px) * 0.9)", // Limits to X% of viewport up to px
            }}
          >
            {project?.ladyLoadContent && (
              <Suspense fallback={<></>}>
                <project.ladyLoadContent />
              </Suspense>
            )}
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
      onClose={handleGoBack}
    />
  );
}
