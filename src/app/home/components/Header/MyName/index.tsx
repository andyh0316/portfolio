import { Box, Stack } from "@/components";
import { AnimationControls, motion, useAnimation } from "framer-motion";
import { s } from "framer-motion/client";
import { ReactElement, RefObject, useEffect, useMemo, useRef, useState } from "react";

type NameObject = {
  ref: RefObject<HTMLDivElement>;
  name: string;
  width: number;
  animateControls: AnimationControls;
  charAnimateControlsCollection: AnimationControls[];
};

export function MyName(props: {
  firstName: string;
  lastName: string;
  moveTextToRef: RefObject<HTMLDivElement>;
  onCompleteAnimation?: () => void;
}) {
  const [charBoxWidth, setCharBoxWidth] = useState<number>(); // in px: every charBox should be equal width
  const textRef = useRef<HTMLDivElement>(null);
  const textAnimateControls = useAnimation();

  const [firstNameObj, setFirstNameObj] = useState<NameObject>({
    ref: useRef<HTMLDivElement>(null),
    name: props.firstName,
    width: 0,
    animateControls: useAnimation(),
    charAnimateControlsCollection: Array(props.firstName.length)
      .fill(null)
      .map(() => useAnimation()),
  });

  const [lastNameObj, setLastNameObj] = useState<NameObject>({
    ref: useRef<HTMLDivElement>(null),
    name: props.lastName,
    width: 0,
    animateControls: useAnimation(),
    charAnimateControlsCollection: Array(props.lastName.length)
      .fill(null)
      .map(() => useAnimation()),
  });

  const nameObjs = [firstNameObj, lastNameObj];
  const spaceBetweenNames = 30;
  const widthOfLetter = firstNameObj.width / firstNameObj.name.length;

  // animations
  useEffect(() => {
    if (widthOfLetter) {
      debugger;
      sequence();
    }

    async function sequence() {
      const animationDuration = 0.5;

      //#region set initial states
      firstNameObj.animateControls?.set({
        left: widthOfLetter * (firstNameObj.name.length - 1) + spaceBetweenNames / 2,
      });
      lastNameObj.animateControls?.set({
        left: -spaceBetweenNames / 2,
      });

      nameObjs.forEach((nameObj) => {
        nameObj.charAnimateControlsCollection?.forEach((controls, index) => {
          if (index >= 1) {
            controls.set({
              y: 100,
              opacity: 0,
            });
          }
        });
      });
      //#endregion

      //#region animate
      // fade-in
      await textAnimateControls.start({
        opacity: 1,
        transition: { opacity: animationDuration },
      });

      // expand
      await Promise.all(
        nameObjs.map((nameObj) => {
          return nameObj.animateControls?.start({
            left: 0,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 15,
            },
          });
        })
      );

      // show rest of characters
      let totalCharIndex = 0;
      const namesPromises = nameObjs.map((nameObj) => {
        return nameObj.charAnimateControlsCollection?.map((controls) => {
          const promiseReturn = controls.start({
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 15,
              delay: totalCharIndex * 0.05, // Stagger delay
            },
          });

          totalCharIndex++;

          return promiseReturn;
        });
      });

      await Promise.all(namesPromises.flat());

      //shrink and reposition text
      const moveTextToX = props.moveTextToRef.current!.getBoundingClientRect().x;
      const moveTextToY = props.moveTextToRef.current!.getBoundingClientRect().y;
      const textRefX = textRef.current!.getBoundingClientRect().x;
      const textRefY = textRef.current!.getBoundingClientRect().y;
    }
  }, [widthOfLetter]);

  // set width
  useEffect(() => {
    setFirstNameObj((prev) => ({
      ...prev,
      width: prev.ref.current!.offsetWidth,
    }));

    setLastNameObj((prev) => ({
      ...prev,
      width: prev.ref.current!.offsetWidth,
    }));
  }, []);

  function toCharBoxes(nameObject: NameObject) {
    return Array.from(nameObject.name).map((char, index) => {
      return (
        <Box
          key={index}
          component={motion.div}
          animate={nameObject.charAnimateControlsCollection?.[index]}
          position="relative"
        >
          {char}
        </Box>
      );
    });
  }

  return (
    <Box
      position="absolute"
      display="flex"
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent={"center"}
      // bgcolor={"yellow"}
    >
      <Stack
        ref={textRef}
        component={motion.div}
        animate={textAnimateControls}
        sx={{
          position: "relative",
          fontSize: 100,
          opacity: 0,
        }}
      >
        <Stack direction="row" spacing={`${spaceBetweenNames}px`}>
          <Stack
            ref={firstNameObj.ref}
            component={motion.div}
            animate={firstNameObj.animateControls}
            position="relative"
            direction="row"
            // left={widthOfLetter * (firstNameObj.name.length - 1) + spaceInName / 2}
          >
            {toCharBoxes(firstNameObj)}
          </Stack>
          <Stack
            ref={lastNameObj.ref}
            component={motion.div}
            animate={lastNameObj.animateControls}
            position="relative"
            direction="row"
            // left={-spaceInName / 2}
          >
            {toCharBoxes(lastNameObj)}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
