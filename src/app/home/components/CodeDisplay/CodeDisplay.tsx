import { Box, Grid } from "@/components";
import { AnimationControls, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export function CodeDisplay() {
  const [mounted, setMounted] = useState(false);
  const chars = 50;

  const containerAnimateControls = useAnimation();

  // Initialize animation controls unconditionally to maintain hook order
  const charAnimateControlsCollection = Array(chars)
    .fill(null)
    .map(() => useAnimation());

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      //   containerAnimateControls.set({ scale: 10 });
      //   containerAnimateControls.start({
      //     scale: 1,
      //     transition: {
      //       duration: 30,
      //     },
      //   });

      charAnimateControlsCollection.forEach((animateControls) => animateControls.set({ y: 100 }));

      charAnimateControlsCollection.forEach((animateControls, index) =>
        animateControls.start({
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: index * 0.01,
          },
        })
      );
    }
  }, [mounted]);

  function charBox(animateControls: AnimationControls, char: string) {
    return (
      <Box animate={animateControls} component={motion.div} position="relative">
        {char}
      </Box>
    );
  }

  if (!mounted) return null;

  // Generate random string only after mounting
  const randomString = generateRandomString(chars);

  return (
    <Box animate={containerAnimateControls} component={motion.div} fontSize="1.5rem">
      <Grid container>
        {Array.from(randomString).map((char, index) => (
          <Grid item key={index}>
            {charBox(charAnimateControlsCollection[index], char)}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function getRandomChar() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return characters.charAt(Math.floor(Math.random() * characters.length));
}

function generateRandomString(length: number) {
  let string = "";
  for (let i = 0; i < length; i++) {
    string += getRandomChar();
  }
  return string;
}
