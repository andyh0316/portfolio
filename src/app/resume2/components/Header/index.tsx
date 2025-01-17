import { Box, Stack, Typography } from "@/components";
import EmailIcon from "@mui/icons-material/Email";
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export const Header = () => {
  function headerBar() {
    const headerBarHeight = 40;

    const buttonSx = {
      height: "13px",
      width: "13px",
      backgroundColor: "#bbb",
      borderRadius: "50%",
      display: "inline-block",
    };

    return (
      <Stack
        width="100%"
        direction="row"
        alignItems="center"
        justifyContent={"space-between"}
        height={headerBarHeight}
        //bgcolor={"#f5f5f5"}
        bgcolor="#275070"
        color="white"
        px={2}
        borderBottom={(theme) => `1px solid rgba(0, 0, 0, 0.1)`}
      >
        <Stack direction="row" spacing={1} flexShrink={0}>
          <Box sx={{ ...buttonSx, backgroundColor: "#ff5f56", marginRight: "8px" }}></Box> {/* Red */}
          <Box sx={{ ...buttonSx, backgroundColor: "#ffbd2e", marginRight: "8px" }}></Box> {/* Yellow */}
          <Box sx={{ ...buttonSx, backgroundColor: "#27c93f" }}></Box> {/* Green */}
        </Stack>

        <Box
          position="absolute"
          left="50%"
          textAlign="center"
          fontSize="14px"
          sx={{
            transform: "translateX(-50%)",
          }}
        >
          andy@web-portfolio: ~
        </Box>

        <Box></Box>
      </Stack>
    );
  }

  function headerContent() {
    return (
      <Stack direction="row" px={5} pt={3} justifyContent={"space-between"} alignItems={"center"}>
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

        <Stack direction="row" spacing={1} alignItems="center">
          <EmailIcon sx={{ color: "#43929c" }} />
          <Typography fontSize="1em">NoSpamPlease2222@gmail.com</Typography>
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
