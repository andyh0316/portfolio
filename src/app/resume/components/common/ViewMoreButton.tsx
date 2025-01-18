import { Box, Button, Stack, Typography } from "@/components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import VisibilityIcon from "@mui/icons-material/Visibility";

export const ViewMoreButton = (props: { isMore: boolean; onClick: () => void }) => {
  return (
    <Box>
      <Button onClick={props.onClick} size="small" sx={{ textTransform: "none" }}>
        <Stack direction="row" alignItems="center">
          <Typography variant="inherit">{props.isMore ? "Less" : "More"}</Typography>
          <ChevronRightIcon
            sx={{
              mr: 0.5,
              transform: props.isMore ? "rotate(-90deg)" : "none",
              transition: "transform 0.2s ease", // Add smooth transition
            }}
            fontSize="small"
          />
        </Stack>
      </Button>
    </Box>
  );
};
