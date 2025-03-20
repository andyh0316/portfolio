"use client";

import { useEffect, useState, useRef } from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";

// Cinematic animations
const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const slideUp = keyframes`
  0% { transform: translateY(50px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const glitch = keyframes`
  0% { transform: translate(0); }
  20% { transform: translate(-5px, 5px); }
  40% { transform: translate(-5px, -5px); }
  60% { transform: translate(5px, 5px); }
  80% { transform: translate(5px, -5px); }
  100% { transform: translate(0); }
`;

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blinkCursor = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #fff; }
`;

const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const flicker = keyframes`
  0% { opacity: 0.2; }
  2% { opacity: 1; }
  8% { opacity: 0.1; }
  9% { opacity: 1; }
  12% { opacity: 0.2; }
  20% { opacity: 1; }
  25% { opacity: 0.3; }
  30% { opacity: 1; }
  70% { opacity: 0.7; }
  72% { opacity: 0.2; }
  77% { opacity: 0.9; }
  100% { opacity: 1; }
`;

// Cinematic background
const CinematicContainer = styled(Box)({
  height: "100vh",
  width: "100vw",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  backgroundColor: "#000",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: "linear-gradient(135deg, rgba(0,10,20,0.8) 0%, rgba(0,20,40,0.8) 100%)",
    zIndex: 1,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "repeating-linear-gradient(0deg, rgba(0,0,0,0.15), rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px)",
    pointerEvents: "none",
    zIndex: 2,
    animation: `${scanline} 8s linear infinite`,
    opacity: 0.3,
  },
});

const ContentContainer = styled(Box)({
  position: "relative",
  zIndex: 3,
  width: "80%",
  maxWidth: "1000px",
  animation: `${flicker} 5s linear forwards`,
});

const NameText = styled(Typography)({
  color: "#fff",
  fontFamily: "monospace",
  textTransform: "uppercase",
  letterSpacing: "0.3em",
  fontSize: "3.5rem",
  fontWeight: 700,
  marginBottom: "2rem",
  position: "relative",
  textShadow: "0 0 10px rgba(66, 220, 219, 0.8), 0 0 20px rgba(66, 220, 219, 0.5)",
  display: "inline-block",
  animation: `${glitch} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite`,
  animationDelay: "4s",
  animationIterationCount: 3,
  "@media (max-width: 768px)": {
    fontSize: "2.5rem",
  },
});

const TitleText = styled(Box)({
  color: "#42dcdb",
  fontFamily: "monospace",
  fontSize: "1.8rem",
  marginBottom: "3rem",
  position: "relative",
  overflow: "hidden",
  whiteSpace: "nowrap",
  borderRight: "4px solid",
  width: "fit-content",
  animation: `${typing} 3.5s steps(40, end), ${blinkCursor} 0.75s step-end infinite`,
  animationDelay: "1.5s",
  animationFillMode: "forwards",
  "@media (max-width: 768px)": {
    fontSize: "1.2rem",
  },
});

const DescriptionText = styled(Typography)({
  color: "rgba(255, 255, 255, 0.7)",
  fontFamily: "monospace",
  fontSize: "1rem",
  maxWidth: "600px",
  lineHeight: 1.8,
  marginBottom: "2rem",
  opacity: 0,
  transform: "translateY(20px)",
  animation: `${slideUp} 1s ease forwards`,
  animationDelay: "6s",
});

const TechStackContainer = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
  marginTop: "2rem",
});

const TechItem = styled(Box)(({ delay }: { delay: number }) => ({
  background: "rgba(66, 220, 219, 0.1)",
  border: "1px solid rgba(66, 220, 219, 0.3)",
  color: "#42dcdb",
  padding: "8px 16px",
  borderRadius: "4px",
  fontFamily: "monospace",
  fontSize: "0.8rem",
  opacity: 0,
  animation: `${fadeIn} 0.5s ease forwards`,
  animationDelay: `${delay}s`,
  "&:hover": {
    background: "rgba(66, 220, 219, 0.2)",
    transform: "translateY(-3px)",
    transition: "all 0.3s ease",
  },
}));

// Particle effect
const Particle = styled(Box)(({ size, speed, x, y }: { size: number; speed: number; x: number; y: number }) => ({
  position: "absolute",
  width: `${size}px`,
  height: `${size}px`,
  borderRadius: "50%",
  backgroundColor: "rgba(66, 220, 219, 0.7)",
  boxShadow: "0 0 10px rgba(66, 220, 219, 0.5), 0 0 20px rgba(66, 220, 219, 0.3)",
  top: `${y}%`,
  left: `${x}%`,
  animation: `${fadeIn} ${speed}s ease-in infinite alternate`,
  zIndex: 1,
}));

const HomePage = () => {
  // Generate particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    speed: Math.random() * 5 + 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  const techStack = [
    "TypeScript",
    "React",
    "Node.js",
    "AWS",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "Docker",
    "Kubernetes",
    "CI/CD",
  ];

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <CinematicContainer>
      {/* Background video with dark overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: 0,
          opacity: 0.4,
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src="/api/placeholder/400/320" type="video/mp4" />
        </video>
      </Box>

      {/* Particles */}
      {particles.map((particle) => (
        <Particle key={particle.id} size={particle.size} speed={particle.speed} x={particle.x} y={particle.y} />
      ))}

      <ContentContainer>
        <NameText variant="h1">Andy Hong</NameText>

        <TitleText>
          <Typography variant="h2" sx={{ fontSize: "inherit", fontFamily: "inherit", display: "inline" }}>
            Full Stack Software Engineer
          </Typography>
        </TitleText>

        <DescriptionText>
          Architecting digital experiences that push technological boundaries. Specializing in scalable applications
          with cutting-edge technology. Building the future, one line of code at a time.
        </DescriptionText>

        <TechStackContainer>
          {techStack.map((tech, index) => (
            <TechItem key={tech} delay={7 + index * 0.2}>
              {tech}
            </TechItem>
          ))}
        </TechStackContainer>
      </ContentContainer>
    </CinematicContainer>
  );
};

export default HomePage;
