import { Stack, Typography } from "@/components";
import EmailIcon from "@mui/icons-material/Email";

export const Header = () => {
  return (
    <Stack
      direction="row"
      px={5}
      justifyContent={"space-between"}
      alignItems={"center"}
      height="200px"
      bgcolor="#cad8e3"
      //sx={{ fontFamily: "var(--font-jura), sans-serif" }}
    >
      <Stack>
        <Typography fontSize="2.5em" fontWeight={(theme) => theme.typography.fontWeightRegular} letterSpacing="0.07em">
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
};
