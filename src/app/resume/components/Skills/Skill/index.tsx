import { Box, Chip, Popover, Stack, Tooltip, Typography } from "@/components";
import { ReactNode, useState } from "react";
// import { TfiViewListAlt as ListViewIcon } from "react-icons/tfi";
import { Skill } from "../skills";

export function SkillTag(props: { skill: Skill }) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const skill = props.skill;
  let content: ReactNode = null;

  if (skill.experience || skill.description) {
    content = (
      <Stack spacing={2} maxWidth="500px" fontSize="1rem">
        <Stack spacing={1}>
          {skill.experience && (
            <Typography variant="inherit" fontSize={"0.9em"}>
              Experience: {skill.experience} years
            </Typography>
          )}
          <Typography variant="inherit" fontSize={"0.8em"}>
            {skill.description}
          </Typography>
        </Stack>

        {/* <Typography variant="inherit" fontSize={"0.8em"} sx={{ opacity: 0.5 }}>
          Click away to close this
        </Typography> */}
      </Stack>
    );
  }

  return (
    <Box>
      <Tooltip title={content} placement="top">
        <Chip
          label={
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Typography variant="inherit">{skill.label}</Typography>
            </Stack>
          }
          // onClick={(e: any) => {
          //   setAnchorEl(e.currentTarget);
          // }}
          // color={skill.color}
          size="small"
          variant="filled"
        />
      </Tooltip>

      {/* <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => {
          setAnchorEl(null);
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        PaperProps={{
          sx: {
            mt: -1, // Negative margin top to move it further up
          },
        }}
      >
        {content}
      </Popover> */}
    </Box>
  );
}
