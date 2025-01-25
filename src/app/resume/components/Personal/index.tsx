import { Box, Button, Chip, Collapse, Stack } from "@/components";
import { Domain } from "../Domain";
import { PersonalItem } from "./PersonalItem";

import { useState } from "react";
import { ViewMoreButton } from "../common/ViewMoreButton";

export const Personal = () => {
  const [viewMore, setViewMore] = useState(false);

  const renderEducation = () => {
    let content = "UC San Diego, B.S in Computer Scence & Engineering";

    return <PersonalItem title={"Education"} content={content} />;
  };

  const renderQualities = () => {
    let content = "#hardcore #concise #self-motivated #meticulous #problem-solver";

    return <PersonalItem title={"Qualities"} content={content} />;
  };

  const aboutResume = () => {
    let content = "Coded using React, TypeScript and Material-UI from scratch. Time taken: 20 hours.";

    return <PersonalItem title={"This Resume"} content={content} />;
  };

  return (
    <Domain title="Others">
      <Stack spacing={2}>
        <Stack spacing={{ sm: 0, xs: 1 }}>
          {aboutResume()}

          {renderEducation()}

          {renderQualities()}

          {/* <Collapse in={viewMore}>{aboutResume()}</Collapse> */}
        </Stack>

        {/* <ViewMoreButton isMore={viewMore} onClick={() => setViewMore(!viewMore)} /> */}
      </Stack>
    </Domain>
  );
};
