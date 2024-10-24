import { Box, Stack, Typography } from "@mui/material";

const Resume2Page = () => {


  const renderHeader = () => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
          backgroundColor: "#cad8e3",
          color: "white",
        }}
      >
        <Typography variant="h4">John Doe</Typography>
        <Typography variant="h6">Web Developer</Typography>
      </Box>
    );
  };

  return (
    <Stack
      id="resume-page"
      sx={{
        position: "relative",
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        backgroundColor: "whitesmoke",
        fontWeight: 500,
        width: "1000px", // fits PDF width: approximate, PDF will shrink width to fit
        height: "1294px", // fits PDF height: needs to be exact, may change based on margin
        margin: "0 auto",
        boxSizing: "border-box",
        fontSize: "18px",
        color: "rgb(60, 60, 60)",
        letterSpacing: "0px",
      }}
    >
      {renderHeader()}
      resume 2
    </Stack>
  );
};

export default Resume2Page;
