"use client"; // Mark as a client component

import { useRouter, useParams } from "next/navigation";
import { Button, Chip, Dialog, Grid, Stack, Typography, Box, Card } from "@/components";
import { projectData } from "../project-data/project-data";

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
    <Stack spacing={3}>
      <div>
        <h1>Project Details</h1>
        <p>Project ID: {projectId}</p>
        <button onClick={handleGoBack}>Go Back to Projects</button>
      </div>

      {project?.content}
    </Stack>
  );
}
