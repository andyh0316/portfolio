import { HomeContext } from "@/app/home/context";
import { Box, Button, Stack } from "@/components";
import { sleep } from "@/utils";
import { AnimatePresence, AnimationControls, motion, useAnimation } from "framer-motion";
import { ReactElement, RefObject, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";

type NameObject = {
  ref: RefObject<HTMLDivElement>;
  name: string;
  animateControls: AnimationControls;
  charAnimateControlsCollection: AnimationControls[];
};
console.log("start");
console.time("timer");
export function MyName(props: {
  firstName: string;
  lastName: string;
  onAnimationCompleted?: (textElement: ReactElement) => void;
}) {
  const [mounted, setMounted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [_, setRerenderToggle] = useState<boolean>(false);
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

  useLayoutEffect(() => {
    // setAnimationInitials();

    console.timeLog("timer", "useLayoutEffect");
  }, []);

  useEffect(() => {
    console.timeLog("timer", "useEffect");

    setMounted(true);
  }, []);

  // animations: using mounted make sure they only run once in strict mode
  useEffect(() => {
    if (mounted) {
      setAnimationInitials();
      startAnimations();
    }
  }, [mounted]);

  // animations
  useEffect(() => {
    if (widthOfLetter) {
      console.timeLog("timer", "widthOfLetter calculated");

      // startAnimations(widthOfLetter);
    }
  }, [widthOfLetter]);

  function rerender() {
    setRerenderToggle((prev) => !prev);
  }

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

  async function setAnimationInitials() {
    //#region set initial states
    textAnimateControls.set({
      opacity: 0,
      // scale: 5,
    });

    // firstNameObj.animateControls?.set({
    //   left: widthOfLetter * (firstNameObj.name.length - 1) + widthOfLetter / 2,
    // });
    // lastNameObj.animateControls?.set({
    //   left: -widthOfLetter / 2,
    // });

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

    rerender();
  }

  async function startAnimations() {
    const animationDuration = 0.5;

    await sleep(2000);
    // setLoading(false);

    // fade in
    await textAnimateControls.start({
      opacity: 1,
      transition: { opacity: animationDuration },
    });

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
          // border={1}
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
        direction="row"
        sx={
          {
            // transform: "scale(1)",
            // fontSize: 100,
            // opacity: 0,
          }
        }
      >
        <Stack ref={firstNameObj.ref} component={motion.div} animate={firstNameObj.animateControls} direction="row">
          {toCharBoxes(firstNameObj)}
        </Stack>
        <Box>{"\u00A0"}</Box>
        <Stack ref={lastNameObj.ref} component={motion.div} animate={lastNameObj.animateControls} direction="row">
          {toCharBoxes(lastNameObj)}
        </Stack>
      </Stack>
    );
  }

  // if (loading) return "Loading";

  return (
    <Box
      position="absolute"
      display="flex"
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent={"center"}
      fontSize={"6rem"}
      // bgcolor="yellow"
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
