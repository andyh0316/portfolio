import { Box, Button, IconButton, Link, Stack, Tooltip, Typography } from "@/components";
import { useAppSelector } from "@/store/hooks";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { CgArrowsExpandLeft as ExpandIcon } from "react-icons/cg";
import { FaHandPointRight } from "react-icons/fa";
import { MdHorizontalRule as MinimizeIcon } from "react-icons/md";
import { RxCross2 as CloseIcon } from "react-icons/rx";
import { ResumeContext } from "../../context";

export const Header = (props: { onExpand: () => void; onClose: () => void }) => {
  const environment = useAppSelector((state) => state.app.environment);
  const resumeContext = useContext(ResumeContext);
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const [onHover, setOnHover] = useState(false);

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
        justifyContent="space-between"
        height={headerBarHeight}
        bgcolor={(theme) => theme.palette.primary.main}
        color="white"
        px={2}
        borderBottom={(theme) => `1px solid rgba(0, 0, 0, 0.1)`}
      >
        <Stack
          direction="row"
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

        <Box
          position="absolute"
          left="50%"
          sx={{
            transform: "translateX(-50%)",
            fontSize: "14px",
          }}
        >
          andy@resume: ~
        </Box>

        {environment === "local" && onHover && (
          <Stack>
            <Button
              onClick={() => {
                resumeContext?.setPdfMode(!resumeContext.isPdfMode);
              }}
              variant="contained"
            >
              {resumeContext?.isPdfMode ? "to Web Mode" : "to PDF Mode"}
            </Button>
          </Stack>
        )}
      </Stack>
    );
  }

  function headerContent() {
    const email = "NoSpamPlease2222@gmail.com";
    const resumeUrl = "www.AndyHong.pro/resume";
    const pdfResumeUrl = "www.AndyHong.pro/AndyHongResume.pdf";

    const copyEmail = () => {
      navigator.clipboard.writeText(email);

      setEmailCopied(true);
      setTimeout(() => {
        setEmailCopied(false);
      }, 2000);
    };

    const nameArea = (
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Stack spacing={-1}>
          <Typography fontSize="2em" fontWeight={(theme) => theme.typography.fontWeightRegular} letterSpacing="0.07em">
            ANDY HONG
          </Typography>
          <Typography
            fontSize="1.25em"
            fontWeight={(theme) => theme.typography.fontWeightRegular}
            letterSpacing="0.14em"
          >
            Software Engineer
          </Typography>
        </Stack>
      </Stack>
    );

    const infoArea = (
      <Stack spacing={0} alignItems={{ sm: "flex-end", xs: "center" }}>
        {resumeContext?.isPdfMode && (
          <Stack position="relative" direction="row">
            <Box display={{ xs: "none", md: "block" }} position="absolute" top={5} left={-40}>
              <FaHandPointRight size={30} color={theme.palette.primary.main} />
            </Box>

            <Stack>
              <Typography variant="caption" lineHeight={"140%"} textAlign={{ sm: "right", xs: "left" }}>
                Go to Web Resume
              </Typography>

              <Link href={`http://${resumeUrl}`}>{resumeUrl}</Link>
            </Stack>
          </Stack>
        )}

        <Stack alignItems={{ sm: "flex-end", xs: "center" }}>
          {/* <Typography variant="caption" lineHeight={"80%"} textAlign="right">
            Email Me:
          </Typography> */}

          <Stack direction="row" spacing={1} alignItems={"center"}>
            {!resumeContext?.isPdfMode && (
              <Tooltip
                open={emailCopied}
                title={
                  <Typography variant="caption" color={(theme) => theme.palette.success.main}>
                    Email Copied!
                  </Typography>
                }
                placement="top"
                componentsProps={{
                  tooltip: {
                    sx: {
                      bgcolor: "white",
                    },
                  },
                }}
              >
                <IconButton onClick={copyEmail} size="small">
                  <ContentCopyIcon color="primary" fontSize="small" />
                </IconButton>
              </Tooltip>
            )}

            <Link href={`mailto:${email}`}>{email}</Link>
          </Stack>
        </Stack>

        {!resumeContext?.isPdfMode && (
          <Stack position="relative" direction="row" alignItems={{ sm: "flex-end", xs: "center" }}>
            <Stack alignItems={{ sm: "flex-end", xs: "center" }}>
              {/* <Typography variant="caption" lineHeight={"140%"}>
                Go to PDF Resume
              </Typography> */}

              <Link href={`http://${pdfResumeUrl}`}>resume.pdf</Link>
            </Stack>
          </Stack>
        )}
      </Stack>
    );

    return (
      <Stack position="relative" minHeight="0px" px={5} py={2} alignItems={"center"} justifyContent={"center"}>
        <Stack
          width="100%"
          direction={{ sm: "row", xs: "column" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          spacing={5}
        >
          {nameArea}

          {infoArea}
        </Stack>
      </Stack>
    );
  }

  return (
    <Stack
      position="relative"
      bgcolor="#cad8e3"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      {/* <Box position="absolute" top={0} right={0} bottom={0} left={0} overflow="hidden" sx={{ zIndex: -1 }}>
        <AnimatedBackground />
      </Box> */}

      {!resumeContext?.isPdfMode && headerBar()}

      {headerContent()}
    </Stack>
  );
};
