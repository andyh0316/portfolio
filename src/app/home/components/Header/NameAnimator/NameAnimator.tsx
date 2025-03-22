import { HomeContext } from "@/app/home/context";
import { Box, Stack } from "@/components";
import { sleep } from "@/utils";
import { AnimatePresence, AnimationControls, motion, useAnimation } from "framer-motion";
import { ReactElement, RefObject, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";

type NameObject = {
  ref: RefObject<HTMLDivElement>;
  name: string;
  animateControls: AnimationControls;
  charAnimateControlsCollection: AnimationControls[];
};

export function NameAnimator(props: {
  firstName: string;
  lastName: string;
  handoverNameDuration: number;
  handoverNameToParent: (textElement: ReactElement) => void;
}) {
  const firstUseLayoutEffect = useRef<boolean>(true);
  const [startAnimationFlag, setStartAnimationFlag] = useState<boolean>(false);
  const [handedOverName, setHandedOverName] = useState<boolean>(false);
  const homeContext = useContext(HomeContext);
  const containerAnimateControls = useAnimation();
  const textRef = useRef<HTMLDivElement>(null);
  const textAnimateControls = useAnimation();
  const firstNameObj: NameObject = {
    ref: useRef<HTMLDivElement>(null),
    name: props.firstName,
    animateControls: useAnimation(),
    charAnimateControlsCollection: Array(props.firstName.length)
      .fill(null)
      // eslint-disable-next-line react-hooks/rules-of-hooks
      .map(() => useAnimation()),
  };
  const lastNameObj: NameObject = {
    ref: useRef<HTMLDivElement>(null),
    name: props.lastName,
    animateControls: useAnimation(),
    charAnimateControlsCollection: Array(props.lastName.length)
      .fill(null)
      // eslint-disable-next-line react-hooks/rules-of-hooks
      .map(() => useAnimation()),
  };
  const nameObjs = [firstNameObj, lastNameObj];

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

    // fade this whole component
    containerAnimateControls.start({
      opacity: 0,
      transition: {
        duration: props.handoverNameDuration,
      },
    });

    // hand text back to parent component
    props.handoverNameToParent?.(textElement(1));

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

  return (
    <Box
      component={motion.div}
      animate={containerAnimateControls}
      position="fixed"
      display="flex"
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent={"center"}
      fontSize={"6rem"}
      bgcolor={(theme) => theme.palette.background.default}
      zIndex={9999}
      sx={{
        top: 0,
        // opacity: 0.5,
      }}
    >
      <AnimatePresence>
        {!handedOverName && (
          <Box layoutId={homeContext?.nameContainerLayoutId} component={motion.div}>
            {textElement(0)}
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
}
