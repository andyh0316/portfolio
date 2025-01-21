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
    let content = "#concise #patience #meticulous #fastlearner #problem-solver #creative #adaptable #self-motivated #team-player";

    return <PersonalItem title={"Qualities"} content={content} />;
  };

  const aboutResume = () => {
    let content = "This resume is coded using React, TypeScript and Material-UI from scratch. Time taken: 15 hours.";

    return <PersonalItem title={"Resume"} content={content} />;
  };

  return (
    <Domain title="Personal">
      <Stack spacing={2}>
        <Stack>
          {renderEducation()}

          {renderQualities()}

          <Collapse in={viewMore}>
            {aboutResume()}
          </Collapse>
        </Stack>

        <ViewMoreButton isMore={viewMore} onClick={() => setViewMore(!viewMore)} />
      </Stack>
    </Domain>
  );
};
