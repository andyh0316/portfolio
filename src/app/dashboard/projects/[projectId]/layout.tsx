// app/dashboard/projects/[projectId]/layout.tsx

import { Box } from "@/components";

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box position="relative" top={200}>
      ProjectLayout: {children}
    </Box>
  );
}
