"use client";

import { useRouter, useParams } from "next/navigation";
import { Button, Chip, Grid, Stack, Typography, Box, Card } from "@/components";
import { projectData } from "../project-data/project-data";
import { Suspense } from "react";

export const projectPageRoute = (projectId: number) => `projects/${projectId}`;
export default function ProjectPage() {
  const router = useRouter();
  const params = useParams();
  const projectId = params.projectId;

  const handleGoBack = () => {
    router.push("..");
  };

  const project = projectData.find((x) => x.id === Number(projectId));

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
            maxWidth: "calc(min(100vw, 2560px) * 0.9)", // Limits to X% of viewport up to 2560px
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
