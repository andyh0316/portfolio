import { HomeContext } from "@/app/home/context";
import { Box, Button, Stack } from "@/components";
import { AnimatePresence, AnimationControls, motion, useAnimation } from "framer-motion";
import { ReactElement, RefObject, useContext, useEffect, useRef, useState } from "react";

type NameObject = {
  ref: RefObject<HTMLDivElement>;
  name: string;
  animateControls: AnimationControls;
  charAnimateControlsCollection: AnimationControls[];
};

export function MyName(props: {
  firstName: string;
  lastName: string;
  onAnimationCompleted?: (textElement: ReactElement) => void;
}) {
  const [mounted, setMounted] = useState<boolean>(false);
  const [animationsCompleted, setAnimationsCompleted] = useState<boolean>(false);

  const homeContext = useContext(HomeContext);
  const [charBoxWidth, setCharBoxWidth] = useState<number>(); // in px: every charBox should be equal width
  const textRef = useRef<HTMLDivElement>(null);
  const textAnimateControls = useAnimation();

  const firstNameObj: NameObject = {
    ref: useRef<HTMLDivElement>(null),
    name: props.firstName,
    animateControls: useAnimation(),
    charAnimateControlsCollection: Array(props.firstName.length)
      .fill(null)
      .map(() => useAnimation()),
  };

  const lastNameObj: NameObject = {
    ref: useRef<HTMLDivElement>(null),
    name: props.lastName,
    animateControls: useAnimation(),
    charAnimateControlsCollection: Array(props.lastName.length)
      .fill(null)
      .map(() => useAnimation()),
  };

  const nameObjs = [firstNameObj, lastNameObj];
  const widthOfLetter = firstNameObj.ref.current
    ? firstNameObj.ref.current.offsetWidth / firstNameObj.name.length
    : undefined;

  useEffect(() => {
    setMounted(true);
  }, []);

  // animations
  useEffect(() => {
    if (widthOfLetter) {
      startAnimations(widthOfLetter);
    }
  }, [widthOfLetter]);

  // set width
  // useEffect(() => {
  //   setFirstNameObj((prev) => ({
  //     ...prev,
  //     width: firstNameObj.ref.current!.offsetWidth,
  //   }));

  //   setLastNameObj((prev) => ({
  //     ...prev,
  //     width: lastNameObj.ref.current!.offsetWidth,
  //   }));
  // }, [mounted]);

  async function startAnimations(widthOfLetter: number) {
    const animationDuration = 0.5;

    //#region set initial states
    textAnimateControls.set({
      // opacity: 0,
      // scale: 5,
    });

    firstNameObj.animateControls?.set({
      left: widthOfLetter * (firstNameObj.name.length - 1) + widthOfLetter / 2,
    });
    lastNameObj.animateControls?.set({
      left: -widthOfLetter / 2,
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
    // textAnimateControls.start({
    //   scale: 1,
    //   transition: { scale: animationDuration },
    // });

    // textAnimateControls.start({
    //   scale: 1, // Ensure this is animated down to 1
    //   transition: { duration: animationDuration },
    // });

    props.onAnimationCompleted?.(textElement());
    setAnimationsCompleted(true);
    // props.onCompleted?.(textHtml);

    // homeContext?.setNameMoved(true);
    // const moveTextToX = props.moveTextToRef.current!.getBoundingClientRect().x;
    // const moveTextToY = props.moveTextToRef.current!.getBoundingClientRect().y;
    // const textRefX = textRef.current!.getBoundingClientRect().x;
    // const textRefY = textRef.current!.getBoundingClientRect().y;
  }

  function toCharBoxes(nameObject: NameObject) {
    return Array.from(nameObject.name).map((char, index) => {
      return (
        <Box
          key={index}
          component={motion.div}
          animate={nameObject.charAnimateControlsCollection?.[index]}
          position="relative"
          color={"blue"}
        >
          {char}
        </Box>
      );
    });
  }

  function textElement() {
    return (
      <Stack
        ref={textRef}
        component={motion.div}
        animate={textAnimateControls}
        sx={{
          position: "relative",
          // transform: "scale(1)",
          // fontSize: 100,
          // opacity: 0,
        }}
      >
        <Stack direction="row">
          <Stack
            ref={firstNameObj.ref}
            component={motion.div}
            animate={firstNameObj.animateControls}
            position="relative"
            direction="row"
          >
            {toCharBoxes(firstNameObj)}
          </Stack>
          <Box>{"\u00A0"}</Box>
          <Stack
            ref={lastNameObj.ref}
            component={motion.div}
            animate={lastNameObj.animateControls}
            position="relative"
            direction="row"
          >
            {toCharBoxes(lastNameObj)}
          </Stack>
        </Stack>
      </Stack>
    );
  }

  return (
    <Box
      position="absolute"
      display="flex"
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent={"center"}
      fontSize={"6rem"}
    >
      <AnimatePresence>
        {animationsCompleted === false && (
          <Box layoutId={homeContext?.nameContainerLayoutId} component={motion.div}>
            {textElement()}
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
}
