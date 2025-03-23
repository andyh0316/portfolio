import { Box, Container, Typography } from "@/components";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        mt: 6,
        borderTop: "1px solid rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Andy Hong
        </Typography>
      </Container>
    </Box>
  );
}
