import { Box, Stack } from "@/components";
import { ReactElement, RefObject, useEffect, useRef, useState } from "react";

type Animation = "expand-initials" | "show-full-name" | "reposition";

export function MyName(props: {
  firstName: string;
  lastName: string;
  moveTextToRef: RefObject<HTMLDivElement>;
  onCompleteAnimation?: () => void;
}) {
  const [animations, setAnimations] = useState<Animation[]>([]);
  const [charBoxWidth, setCharBoxWidth] = useState<number>(); // in px: every charBox should be equal width

  const textRef = useRef<HTMLDivElement>(null);

  // const [firstNameCharBoxes, setFirstNameCharBoxes] = useState<ReactElement[]

  // handle animations
  useEffect(() => {
    startAnimation({ animation: "expand-initials", startTime: 500 });
    startAnimation({ animation: "show-full-name", startTime: 1000 });
    startAnimation({ animation: "reposition", startTime: 1500 });
  }, []);

  function startAnimation(options: { animation: Animation; startTime?: number }) {
    setTimeout(() => {
      setAnimations((prev) => [...prev, options.animation]);
    }, options.startTime ?? 0);
  }

  // handle reposition
  useEffect(() => {
    if (animations.includes("reposition")) {
      const moveTextToX = props.moveTextToRef.current!.getBoundingClientRect().x;
      const moveTextToY = props.moveTextToRef.current!.getBoundingClientRect().y;

      const textRefX = textRef.current!.getBoundingClientRect().x;
      const textRefY = textRef.current!.getBoundingClientRect().y;

      textRef.current!.style.left = `${moveTextToX - textRefX}px`;
      textRef.current!.style.top = `${moveTextToY - textRefY}px`;

      setTimeout(() => {
        props.onCompleteAnimation?.();
      }, 2000);
    }
  }, [animations]);

  function toCharBoxes(str: string) {
    return Array.from(str).map((char, index) => {
      return (
        <Box
          key={index}
          // border={1}
          sx={{
            transition: "opacity 500ms ease-in-out",
            opacity: animations.includes("show-full-name") || index === 0 ? 1 : 0,
            // width: "1em", // Makes each box the width of one character
            // display: "inline-block",
            // textAlign: "center",
          }}
        >
          {char}
        </Box>
      );
    });
  }

  return (
    <Box position="absolute" display="flex" width="100%" height="100%" alignItems="center" justifyContent={"center"}>
      <Stack
        ref={textRef}
        sx={{
          position: "relative",
          // fontFamily: '"Courier New", Courier, monospace',
          transition: "top 500ms ease-in-out, left 500ms ease-in-out",
          top: 0,
          left: 0,
          //top: animations.includes("reposition") ? -100 : 0,
        }}
      >
        <Stack
          direction="row"
          spacing={0.5}
          sx={{
            transition: "transform 500ms ease-in-out, top 500ms ease-in-out",
            transform: animations.includes("reposition") ? "scale(1)" : "scale(5)",
          }}
        >
          <Stack
            position="relative"
            direction="row"
            sx={{
              transition: "left 500ms ease-in-out",
              left: animations.includes("expand-initials") ? 0 : 33,
            }}
          >
            {toCharBoxes(props.firstName)}
          </Stack>
          <Stack direction="row">{toCharBoxes(props.lastName)}</Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
