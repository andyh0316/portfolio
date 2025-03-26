import { useTheme, alpha } from "@mui/material";
import { Box, Card, CardContent, CardMedia, Chip, Container, Grid, Typography } from "@/components";
import { usePathname, useRouter } from "next/navigation";
import { projectData } from "../../projects/project-data/project-data";
import { projectPageRoute } from "@/app/app-routes";
import { orbitron } from "@/app/app-fonts";

export function Projects() {
  const router = useRouter();
  const theme = useTheme();
  const pathname = usePathname();

  function routeToProject(projectId: number) {
    router.push(`${pathname}/${projectPageRoute(projectId)}`);
  }

  function projectElement(
    project: {
      id: number;
      image: string;
      title: string;
      description: string;
      technologies: string[];
    },
    index: number
  ) {
    return (
      <Card
        onClick={() => routeToProject(project.id)}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          // background: alpha(theme.palette.background.paper, 0.5),
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: `0 15px 30px ${alpha(theme.palette.common.black, 0.3)}`,
            "& .MuiCardMedia-root": {
              transform: "scale(1.05)",
            },
          },
        }}
      >
        <Box sx={{ overflow: "hidden" }}>
          <CardMedia
            component="img"
            height="180"
            image={project.image}
            alt={project.title}
            sx={{
              transition: "transform 0.5s ease",
            }}
            className="MuiCardMedia-root"
          />
        </Box>
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 400 }}>
            {project.title}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary" paragraph>
            {project.description}
          </Typography> */}
          <Typography variant="inherit">{project.description}</Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 3 }}>
            {project.technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  bgcolor: alpha(theme.palette.primary.main, 0.15),
                  color: "primary.light",
                  "&:hover": {
                    bgcolor: alpha(theme.palette.primary.main, 0.25),
                  },
                }}
              />
            ))}
          </Box>
        </CardContent>
      </Card>
    );
  }

  return (
    <Box sx={{ py: 10, position: "relative" }}>
      <Container
        maxWidth="lg"
        sx={{
          cursor: "pointer",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          color="primary"
          gutterBottom
          sx={{ mb: 6, letterSpacing: 1 }}
          fontFamily={`${orbitron.style.fontFamily}`}
          fontWeight={(theme) => theme.typography.fontWeightBold}
        >
          Projects
        </Typography>
        <Grid container spacing={4}>
          {projectData.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              {projectElement(project, index)}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
