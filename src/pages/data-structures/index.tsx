import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

// Define the list of data structures
const dataStructures = [
  { name: "Arrays", path: "arrays" },
  { name: "Linked Lists", path: "linked-lists" },
  { name: "Stacks", path: "stacks" },
  { name: "Queues", path: "queues" },
  { name: "Hash Tables", path: "hash-tables" },
  { name: "Trees", path: "trees" },
  { name: "Graphs", path: "graphs" },
];

const DataStructuresPage = () => {
  const router = useRouter();
  const basePath = router.pathname; // Get the current path

  return (
    <Stack>
      <Typography variant="h4">Data Structures</Typography>

      <Stack>
        {dataStructures.map((ds) => (
          <Link href={`${basePath}/${ds.path}`} key={ds.path}>
            <Typography variant="h6">{ds.name}</Typography>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
};

export default DataStructuresPage;
