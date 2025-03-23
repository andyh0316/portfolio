import { HomeContext } from "@/app/home/context";
import { orbitron } from "@/app/layout";
import { Box, Stack } from "@/components";
import { sleep } from "@/utils";
import { AnimatePresence, AnimationControls, motion, useAnimation } from "framer-motion";
import { RefObject, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";

type NameObject = {
  ref: RefObject<HTMLDivElement>;
  name: string;
  animateControls: AnimationControls;
  charAnimateControlsCollection: AnimationControls[];
};

export function AnimatedName(props: { skipAnimation?: boolean }) {
  const firstName = "Andy";
  const lastName = "Hong";

  const firstUseLayoutEffect = useRef<boolean>(true);
  const [startAnimationFlag, setStartAnimationFlag] = useState<boolean>(false);
  const [handedOverName, setHandedOverName] = useState<boolean>(false);
  const homeContext = useContext(HomeContext);
  const containerAnimateControls = useAnimation();
  const textRef = useRef<HTMLDivElement>(null);
  const textAnimateControls = useAnimation();
  const firstNameObj: NameObject = {
    ref: useRef<HTMLDivElement>(null),
    name: firstName,
    animateControls: useAnimation(),
    charAnimateControlsCollection: Array(firstName.length)
      .fill(null)
      // eslint-disable-next-line react-hooks/rules-of-hooks
      .map(() => useAnimation()),
  };
  const lastNameObj: NameObject = {
    ref: useRef<HTMLDivElement>(null),
    name: lastName,
    animateControls: useAnimation(),
    charAnimateControlsCollection: Array(lastName.length)
      .fill(null)
      // eslint-disable-next-line react-hooks/rules-of-hooks
      .map(() => useAnimation()),
  };
  const nameObjs = [firstNameObj, lastNameObj];
  const handoverNameDuration = props.skipAnimation ? 0 : 0.5;

  useLayoutEffect(() => {
    if (firstUseLayoutEffect.current) {
      firstUseLayoutEffect.current = false;
      setAnimationsInitialState();
      setStartAnimationFlag(true);
    }
  }, []);

  useEffect(() => {
    if (startAnimationFlag) {
      startAnimations();
    }
  }, [startAnimationFlag, startAnimations]);

  async function setAnimationsInitialState() {
    if (props.skipAnimation) return;

    {
      const charFraction = 1 / firstNameObj.name.length;
      const x = charFraction * (firstNameObj.name.length - 1) + charFraction / 4;
      firstNameObj.animateControls?.set({
        x: `${x * 100}%`,
      });
    }

    {
      const charFraction = 1 / lastNameObj.name.length;
      const x = charFraction / 4;
      lastNameObj.animateControls?.set({
        x: `-${x * 100}%`,
      });
    }

    nameObjs.forEach((nameObj) => {
      nameObj.charAnimateControlsCollection?.forEach(async (controls, index) => {
        if (index >= 1) {
          controls.set({
            y: 100,
            opacity: 0,
          });
        }
      });
    });
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function startAnimations() {
    if (!props.skipAnimation) {
      const animationDuration = 0.5;

      // fade in
      await textAnimateControls.start({
        opacity: 1,
        transition: { opacity: animationDuration },
      });

      await sleep(500);

      // expand
      await Promise.all(
        nameObjs.map((nameObj) => {
          return nameObj.animateControls?.start({
            x: 0,
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
    }

    setHandedOverName(true);
  }

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

  function textElement(opacity: number = 1) {
    return (
      <Stack
        ref={textRef}
        component={motion.div}
        fontFamily={`${orbitron.style.fontFamily}`}
        animate={textAnimateControls}
        initial={false}
        direction="row"
        sx={{
          opacity: opacity,
          color: (theme) => theme.palette.primary.main,
          fontWeight: (theme) => theme.typography.fontWeightBold,
        }}
      >
        <Stack
          ref={firstNameObj.ref}
          component={motion.div}
          animate={firstNameObj.animateControls}
          initial={false}
          direction="row"
        >
          {toCharBoxes(firstNameObj)}
        </Stack>
        <Box>{"\u00A0"}</Box>
        <Stack
          ref={lastNameObj.ref}
          component={motion.div}
          animate={lastNameObj.animateControls}
          initial={false}
          direction="row"
        >
          {toCharBoxes(lastNameObj)}
        </Stack>
      </Stack>
    );
  }

  const animationContainerElement = () => {
    return (
      <Box
        key="animationContainerElement" // needed for handover animation
        component={motion.div}
        animate={containerAnimateControls}
        position="fixed"
        width="100%"
        height="100vh"
        fontSize={"6rem"}
        zIndex={9999}
        sx={{
          top: 0,
          left: 0,
        }}
      >
        {/* background */}
        <Box
          component={motion.div}
          position="absolute"
          width="100%"
          height="100%"
          bgcolor={(theme) => theme.palette.background.default}
          exit={{ opacity: 0 }}
          transition={{
            duration: handoverNameDuration,
            ease: "easeInOut",
          }}
        ></Box>

        <Box display="flex" alignItems="center" justifyContent={"center"} width="100%" height="100vh">
          <Box layoutId={homeContext?.nameContainerLayoutId} component={motion.div}>
            {textElement(0)}
          </Box>
        </Box>
      </Box>
    );
  };

  const targetContainerElement = () => {
    return (
      <Box
        key="targetContainerElement" // needed for handover animation
        layoutId={homeContext?.nameContainerLayoutId}
        component={motion.div}
        transition={{
          duration: handoverNameDuration,
          ease: "easeInOut",
        }}
        sx={{
          width: "fit-content",
          fontSize: "4rem",
        }}
      >
        {textElement(1)}
      </Box>
    );
  };

  return (
    <>
      <AnimatePresence>{!handedOverName ? animationContainerElement() : targetContainerElement()}</AnimatePresence>
    </>
  );
}
