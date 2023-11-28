import { Stack, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Stack direction={"row"} justifyContent={"space-between"} px={4} py={2} bgcolor={"rgb(65, 178, 205)"} color="white">
      <Stack>
        <Typography variant="h4" lineHeight={"120%"}>
          Haitian (Andy) Hong
        </Typography>
        <Typography variant="h6" lineHeight={"120%"}>
          Full Stack Software Engineer
        </Typography>
      </Stack>

      <Stack>
        <Typography lineHeight={"120%"}>Email: Andyhong0316@yahoo.com</Typography>
        <Typography lineHeight={"120%"}>
          Portfolio: <a href="http://haitianhong.com">HaitianHong.com</a>
        </Typography>
      </Stack>
    </Stack>
  );
};
