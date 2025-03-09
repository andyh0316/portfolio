import { Stack, Typography } from "@/components";
import { Domain } from "../Domain";
import { CobroConsulting } from "./CobroConsulting";
import { Humana } from "./Humana";
import { SupraMed } from "./SupraMed";
import { AyloHealth } from "./AyloHealth";

export const Experience = () => {
  return (
    <Domain title="Experience">
      <Stack spacing={1}>
        <AyloHealth />

        <CobroConsulting />

        <SupraMed />

        <Humana />
      </Stack>
    </Domain>
  );
};
