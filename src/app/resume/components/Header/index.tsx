import { Box, Button, IconButton, Link, Stack, Tooltip, Typography, Grid } from "@/components";
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

        {environment === "local" && (
          <Stack>
            <Button
              onClick={() => {
                resumeContext?.setPdfMode(!resumeContext.isPdfMode);
              }}
              variant="contained"
            >
              {resumeContext?.isPdfMode ? "PDF Mode" : "Web Mode"}
            </Button>
          </Stack>
        )}
      </Stack>
    );
  }

  function headerContent() {
    const email = "NoSpamPlease2222@gmail.com";
    const resumeUrl = "www.AndyHong.pro/resume";

    const copyEmail = () => {
      navigator.clipboard.writeText(email);

      setEmailCopied(true);
      setTimeout(() => {
        setEmailCopied(false);
      }, 2000);
    };

    const nameArea = (
      <Stack>
        <Typography fontSize="2.5em" fontWeight={(theme) => theme.typography.fontWeightRegular} letterSpacing="0.07em">
          ANDY HONG
        </Typography>
        <Typography
          fontSize="1em"
          lineHeight="100%"
          fontWeight={(theme) => theme.typography.fontWeightRegular}
          letterSpacing="0.04em"
        >
          HARDCORE Full-Stack Developer
        </Typography>
      </Stack>
    );

    const infoArea = (
      <Stack spacing={2} alignItems={{ sm: "flex-end", xs: "flex-start" }}>
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

        <Stack>
          <Typography variant="caption" lineHeight={"80%"} textAlign="right">
            Email Andy
          </Typography>

          <Stack direction="row" spacing={1} alignItems={"center"}>
            <Link href={`mailto:${email}`}>{email}</Link>

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
          </Stack>
        </Stack>
      </Stack>
    );

    return (
      <Stack minHeight="110px" px={5} alignItems={"center"} justifyContent={"center"} pt={1}>
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
    <Stack bgcolor="#cad8e3" pb={3}>
      {headerBar()}

      {headerContent()}
    </Stack>
  );
};
