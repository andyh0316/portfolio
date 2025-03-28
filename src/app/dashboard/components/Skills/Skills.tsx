import { Box, Card, CardContent, CardMedia, Chip, Container, Grid, Typography } from "@/components";
import { skillData } from "./skillData";

export function Skills() {
  return (
    <Box sx={{ py: 10, position: "relative" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 6, fontWeight: 300, letterSpacing: 1 }}>
          <Box component="span" sx={{ color: "secondary.main", mr: 1 }}>
            {"<"}
          </Box>
          Skills
          <Box component="span" sx={{ color: "secondary.main", ml: 1 }}>
            {"/>"}
          </Box>
        </Typography>
        <Grid container spacing={4}>
          {skillData.map((skill, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  background: "rgba(30, 30, 30, 0.5)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
                    "& .MuiCardMedia-root": {
                      transform: "scale(1.05)",
                    },
                  },
                }}
                elevation={0}
              >
                <Box sx={{ overflow: "hidden" }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={skill.image}
                    alt={skill.title}
                    sx={{
                      transition: "transform 0.5s ease",
                    }}
                    className="MuiCardMedia-root"
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 400 }}>
                    {skill.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {skill.description}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 3 }}>
                    {skill.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          bgcolor: "rgba(187, 134, 252, 0.15)",
                          color: "primary.light",
                          "&:hover": {
                            bgcolor: "rgba(187, 134, 252, 0.25)",
                          },
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
