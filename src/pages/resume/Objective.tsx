import { Box } from "@mui/material";
import { Section } from "./Section";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

export const Objective = () => {
  const sectionBody = (
    <Box>
      As an experienced developer, I am seeking for a position where I can utilize my expertise to build a high quality
      web application. I can cover every aspect needed for a complete product: all the way from architectural design,
      frontend development, backend development to deployment (and even UI/UX design!).
    </Box>
  );

  return <Section title="Objective" icon={<AccountBalanceIcon />} body={sectionBody} />;
};
