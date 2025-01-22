import { Box, IconButton, Stack, Typography } from "@/components";
import EmailIcon from "@mui/icons-material/Email";
import { useContext, useState } from "react";
import { CgArrowsExpandLeft as ExpandIcon } from "react-icons/cg";
import { RxCross2 as CloseIcon } from "react-icons/rx";
import { MdHorizontalRule as MinimizeIcon } from "react-icons/md";
import { FaHandPointRight } from "react-icons/fa";
import { useTheme } from "@mui/material";
import { ResumeContext } from "../../context";

export const Header = (props: { onExpand: () => void; onClose: () => void }) => {
  const resumeContext = useContext(ResumeContext);
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  function headerBar() {
    const headerBarHeight = 40;

    const buttonBaseSx = {
      height: "13px",
      width: "13px",
      borderRadius: "50%",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "8px",
      transition: "all 0.2s",
      cursor: "pointer",
      "&:last-child": {
        marginRight: 0,
      },
    };

    return (
      <Stack
        width="100%"
        direction="row"
        alignItems="center"
        justifyContent={"center"}
        height={headerBarHeight}
        bgcolor={(theme) => theme.palette.primary.main}
        color="white"
        px={2}
        borderBottom={(theme) => `1px solid rgba(0, 0, 0, 0.1)`}
      >
        <Stack
          direction="row"
          position="absolute"
          left={16}
          spacing={1}
          flexShrink={0}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Box
            onClick={() => {
              props.onClose();
            }}
            sx={{
              ...buttonBaseSx,
              backgroundColor: "#ff5f56",
              "&:hover": { backgroundColor: "#ff4343" },
            }}
          >
            {isHovered && <CloseIcon color="#730b00" />}
          </Box>

          <Box
            onClick={() => {
              props.onClose();
            }}
            sx={{
              ...buttonBaseSx,
              backgroundColor: "#ffbd2e",
              "&:hover": { backgroundColor: "#ffb111" },
            }}
          >
            {isHovered && <MinimizeIcon color="#734d00" />}
          </Box>

          <Box
            onClick={() => {
              props.onExpand();
            }}
            sx={{
              ...buttonBaseSx,
              backgroundColor: "#27c93f",
              "&:hover": { backgroundColor: "#1db634" },
            }}
          >
            {isHovered && <ExpandIcon size={8} color="#006500" strokeWidth={3} />}
          </Box>
        </Stack>

        {/* {resumeContext?.isPdfMode ? (
          <Box fontSize="14px">Web Resume: https://andyh0316.github.io/resume</Box>
        ) : (
          <Box fontSize="14px">andy@resume: ~</Box>
        )} */}
      </Stack>
    );
  }

  function headerContent() {
    return (
      <Stack px={5} pt={4.5} alignItems={"center"} justifyContent={"center"}>
        <Stack width="100%" direction="row" justifyContent={"space-between"} alignItems={"center"}>
          <Stack>
            <Typography
              fontSize="2.5em"
              fontWeight={(theme) => theme.typography.fontWeightRegular}
              letterSpacing="0.07em"
            >
              ANDY HONG
            </Typography>
            <Typography
              fontSize="1.11em"
              lineHeight="100%"
              fontWeight={(theme) => theme.typography.fontWeightRegular}
              letterSpacing="0.14em"
            >
              FULL STACK DEVELOPER
            </Typography>
          </Stack>

          <Stack spacing={2}>
            <Stack position="relative" direction="row">
              <Box position="absolute" top={0} left={-40}>
                <FaHandPointRight size={30} color={theme.palette.primary.main} />
              </Box>

              <Stack>
                <Typography variant="caption" lineHeight={"100%"}>
                  Web Resume:
                </Typography>
                <Typography fontSize="1em">http://AndyHong.pro/resume</Typography>
              </Stack>
            </Stack>

            <Stack>
              <Typography variant="caption" lineHeight={"100%"}>
                Email:
              </Typography>
              <Typography fontSize="1em">NoSpamPlease2222@gmail.com</Typography>
            </Stack>

            {/* <Stack direction="row" spacing={1} alignItems="center">
              <EmailIcon sx={{ color: "#43929c" }} />
              <Typography fontSize="1em">NoSpamPlease2222@gmail.com</Typography>
            </Stack> */}
          </Stack>
        </Stack>
      </Stack>
    );
  }

  return (
    <Stack
      height="200px"
      bgcolor="#cad8e3"
      //sx={{ fontFamily: "var(--font-jura), sans-serif" }}
    >
      {headerBar()}

      {headerContent()}
    </Stack>
  );
};
