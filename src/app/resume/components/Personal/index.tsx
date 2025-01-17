import { Chip, Stack } from "@/components";
import { Domain } from "../Domain";
import { PersonalItem } from "./PersonalItem";

export const Personal = () => {
  const renderEducation = () => {
    return <PersonalItem title={"Education"} content={<>UC San Diego, B.S in Computer Scence & Engineering</>} />;
  };

  const renderQualities = () => {
    var content: React.ReactNode = (
      <>
        #concise #patience #meticulous #fastlearner #problem-solver #creative #adaptable #self-motivated #team-player
      </>
    );

    return <PersonalItem title={"Qualities"} content={content} />;
  };

  return (
    <Domain title="Personal">
      <Stack>
        {renderEducation()}

        {renderQualities()}
      </Stack>
    </Domain>
  );
};
