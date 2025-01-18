import { Box, Button, Chip, Collapse, Stack } from "@/components";
import { Domain } from "../Domain";
import { PersonalItem } from "./PersonalItem";

import { useState } from "react";
import { ViewMoreButton } from "../common/ViewMoreButton";

export const Personal = () => {
  const [viewMore, setViewMore] = useState(false);

  const renderEducation = () => {
    return <PersonalItem title={"Education"} content={<>UC San Diego, B.S in Computer Scence & Engineering</>} />;
  };

  const renderQualities = () => {
    var content: React.ReactNode = (
      <>#concise #patience #meticulous #fastlearner #problem-solver #creative #adaptable #self-motivated #team-player</>
    );

    return <PersonalItem title={"Qualities"} content={content} />;
  };

  return (
    <Domain title="Personal">
      <Stack spacing={2}>
        <Stack>
          {renderEducation()}

          {renderQualities()}

          <Collapse in={viewMore}>
            {renderEducation()}

            {renderQualities()}
          </Collapse>
        </Stack>

        <ViewMoreButton isMore={viewMore} onClick={() => setViewMore(!viewMore)} />
      </Stack>
    </Domain>
  );
};
