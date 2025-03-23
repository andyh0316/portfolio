import { sleep } from "@/utils";
import { motion, useAnimation } from "framer-motion";
import { useLayoutEffect, useRef } from "react";

const animationStages = {
  hidden: {
    opacity: 0,
    x: -100,
    // Add these to prevent layout shift during initialization
    position: "absolute",
    visibility: "hidden" as const,
  },
  visible: {
    opacity: 1,
    x: 0,
    position: "relative" as const,
    visibility: "visible" as const,
    transition: { duration: 0.5 },
  },
  // ... other stages
};

export function TestComp() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  // 1. Set initial state BEFORE first render
  useLayoutEffect(() => {
    // Synchronous style application
    if (ref.current) {
    //   Object.assign(ref.current.style, {
    //     opacity: "0",
    //     transform: "translateX(-100px)",
    //     position: "absolute",
    //     visibility: "hidden",
    //   });
    }

    // Now set through Framer controls

    controls.set({
      // opacity: 0,
      x: -100,
      // Add these to prevent layout shift during initialization
      position: "absolute",
      visibility: "hidden" as const,
    });
  }, [controls]);

  // 2. Animation sequence
  useLayoutEffect(() => {
    const animate = async () => {
      await sleep(2000);

      // First make element participate in layout flow
      await controls.start({
        position: "relative",
        visibility: "visible",
      });

      // Now animate to visible state
      await controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 },
      });

      // ... rest of your animation stages
    };

    animate();
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={false}
      style={{
        // Ensure default styles match your needs
        width: 100,
        height: 100,
        background: "#00ff00",
      }}
    >
      Animated Content
    </motion.div>
  );
}
