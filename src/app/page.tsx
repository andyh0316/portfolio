"use client";

import { Box, Link, Stack } from "@mui/material";

export default function Home() {
  const headerBarHeight = 40;
  const footerBarHeight = 40;

  function renderHeaderBar() {
    const buttonSx = {
      height: "13px",
      width: "13px",
      backgroundColor: "#bbb",
      borderRadius: "50%",
      display: "inline-block",
    };

    return (
      <Stack
        width="100%"
        direction="row"
        alignItems="center"
        justifyContent={"space-between"}
        position="fixed"
        height={headerBarHeight}
        bgcolor={"#f5f5f5"}
        zIndex={1}
        px={2}
        borderBottom={(theme) => `1px solid rgba(0, 0, 0, 0.1)`}
      >
        <Stack direction="row" spacing={1} flexShrink={0}>
          <Box sx={{ ...buttonSx, backgroundColor: "#ff5f56", marginRight: "8px" }}></Box> {/* Red */}
          <Box sx={{ ...buttonSx, backgroundColor: "#ffbd2e", marginRight: "8px" }}></Box> {/* Yellow */}
          <Box sx={{ ...buttonSx, backgroundColor: "#27c93f" }}></Box> {/* Green */}
        </Stack>

        <Box
          position="absolute"
          left="50%"
          textAlign="center"
          fontSize="14px"
          sx={{
            transform: "translateX(-50%)",
          }}
        >
          andy@web-portfolio: ~
        </Box>

        <Box></Box>
      </Stack>
    );
  }

  function renderFooterBar() {
    // const blinkAnimation = keyframes`
    //   to {
    //     visibility: hidden;
    //   }
    // `;

    return (
      <Stack
        position="fixed"
        bottom="0px"
        display="flex"
        alignItems="center"
        minHeight={footerBarHeight}
        width="100%"
        bgcolor={"#f5f5f5"}
        padding="0px 10px"
        zIndex={1}
        fontSize="14px"
      >
        <Box whiteSpace="nowrap">andy@web-portfolio: </Box>
        <Box marginLeft="8px">
          <Box>Portfolio coded entirely from ground up. No external plugins used.</Box>
          <Box>Copyright © 2019-@DateTime.Now.Year Haitian (Andy) Hong. All Rights Reserved. Not really.</Box>
        </Box>
        <Box
          display="inline-block"
          width="10px"
          height="20px"
          bgcolor="white"
          marginLeft="2px"
          //animation={`${blinkAnimation} 1s steps(2, start) infinite`}
        ></Box>
      </Stack>
    );
  }

  function renderIntro() {
    const codeLineSx = { transition: "all 300ms ease-out" };
    const codeLineIndentSx = {
      paddingLeft: "5%",
      lineHeight: "130%",
    };

    const codeObjectTypeSx = { color: "#2B91AF" };
    const codeObjectSx = { color: "#001080" };
    const codeKeywordSx = { color: "#0000FF" };
    const codeNormalSx = { color: "#000000" };
    const codeStringSx = { color: "#A31515" };
    const codeCommentSx = { color: "#008000", opacity: 0.65 };
    const codeLinkSx = { color: "#0000FF" };

    // dark theme
    // const codeObjectTypeSx = { color: "#4ec9b0" };
    // const codeObjectSx = { color: "#9cdcfe" };
    // const codeKeywordSx = { color: "#569cd6" };
    // const codeNormalSx = { color: "#dcdcdc" };
    // const codeStringSx = { color: "#d69d85" };
    // const codeCommentSx = { color: "#009b40", opcaity: 0.65 };
    // const codeLinkSx = { color: "rgb(0, 140, 255)" };

    return (
      <Box
        height="100%"
        // bgcolor={"white"}
        sx={{
          display: "flex",
          alignItems: "center",
          "@media (max-width: 1024px)": {
            fontSize: "1.2em",
          },
          "@media (max-width: 768px)": {
            fontSize: "0.8em",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            paddingRight: "5%",
            paddingLeft: "5%",
            //paddingTop: '15%', // Commented out as per original
            fontSize: "1.6em",
            fontWeight: "bold",
          }}
        >
          <Box sx={codeLineSx}>
            <Box component="span" sx={codeCommentSx}>
              // Please view on computer
            </Box>
          </Box>
          <Box sx={codeLineSx}>
            <Box component="span" sx={codeKeywordSx}>
              var{" "}
            </Box>
            <Box component="span" sx={codeObjectSx}>
              dev{" "}
            </Box>
            <Box component="span" sx={codeNormalSx}>
              ={" "}
            </Box>
            <Box component="span" sx={codeKeywordSx}>
              new{" "}
            </Box>
            <Box component="span" sx={codeObjectTypeSx}>
              Developer{" "}
            </Box>
          </Box>
          <Box sx={codeLineSx}>
            <Box component="span" sx={codeNormalSx}>
              {"{"}
            </Box>
          </Box>
          <Box sx={{ ...codeLineSx, ...codeLineIndentSx }}>
            <Box component="span" sx={codeNormalSx}>
              Name ={" "}
            </Box>
            <Box component="span" sx={codeStringSx}>
              "Haitian (Andy) Hong"
            </Box>
            <Box component="span" sx={codeNormalSx}>
              ,
            </Box>
          </Box>
          <Box sx={{ ...codeLineSx, ...codeLineIndentSx }}>
            <Box component="span" sx={codeNormalSx}>
              Role ={" "}
            </Box>
            <Box component="span" sx={codeStringSx}>
              "Full Stack Software Developer"
            </Box>
            <Box component="span" sx={codeNormalSx}>
              ,
            </Box>
          </Box>
          <Box sx={{ ...codeLineSx, ...codeLineIndentSx }}>
            <Box component="span" sx={codeNormalSx}>
              Credential ={" "}
            </Box>
            <Box component="span" sx={codeStringSx}>
              "UCSD - CS"
            </Box>
            <Box component="span" sx={codeNormalSx}>
              ,
            </Box>
          </Box>
          <Box sx={{ ...codeLineSx, ...codeLineIndentSx }}>
            <Box component="span" sx={codeNormalSx}>
              Objective ={" "}
            </Box>
            <Box component="span" sx={codeStringSx}>
              "I can build a web system completely from ground up, covering all aspects needed for a complete product:
              all the way from UI/UX development design, architectural design, front-end development, back-end
              development, SQL, to server deployment."
            </Box>
            <Box component="span" sx={codeNormalSx}>
              ,
            </Box>
          </Box>
          <Box sx={{ ...codeLineSx, ...codeLineIndentSx }}>
            <Box component="span" sx={codeNormalSx}>
              Resume ={" "}
            </Box>
            <Box component="span" sx={codeKeywordSx}>
              new{" "}
            </Box>
            <Box component="span" sx={codeObjectTypeSx}>
              Resume(
              <Link href="/resume" style={codeLinkSx}>
                Click to View
              </Link>
              )
            </Box>
            <Box component="span" sx={codeNormalSx}>
              ,
            </Box>
          </Box>
          <Box sx={{ ...codeLineSx, ...codeLineIndentSx }}>
            <Box component="span" sx={codeNormalSx}>
              Portfolio ={" "}
            </Box>
            <Box component="span" sx={codeKeywordSx}>
              new{" "}
            </Box>
            <Box component="span" sx={codeObjectTypeSx}>
              Portfolio(
              <Link href="/resume" style={codeLinkSx}>
                Click to View
              </Link>
              )
            </Box>
          </Box>
          <Box sx={codeLineSx}>
            <Box component="span" sx={codeNormalSx}>
              {"};"}
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

  function renderVideoBackground(youtubeId: string, opacity: number = 0.2) {
    return (
      <Box
        sx={{
          background: "#000",
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          opacity: opacity,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            "@media (max-aspect-ratio: 21/9)": {
              width: "300%",
              left: "-100%",
            },
          }}
        >
          <iframe
            src={
              "https://www.youtube.com/embed/" +
              youtubeId +
              "?playlist=" +
              youtubeId +
              "&loop=1&autoplay=1&mute=1&controls=0&showinfo=0&autohide=1"
            }
            style={{
              position: "relative",
              width: "100%",
              height: "100vh",
              top: "0px",
              left: "0px",
            }}
            frameBorder="0"
            allowFullScreen
            allow="autoplay; fullscreen; encrypted-media"
          ></iframe>
        </Box>
      </Box>
    );
  }

  function renderBackground() {
    const waveStyles = {
      position: "fixed",
      height: "25%",
      opacity: 0.4,
      borderRadius: "1000% 1000% 0 0",
      width: "200%",
      transform: "translate3d(0, 0, 0)",
      bottom: 0,
      left: 0,
      zIndex: -1,
      background:
        "linear-gradient(315deg, rgba(200, 220, 255, 0.9) 3%, rgba(180, 240, 220, 0.9) 38%, rgba(220, 255, 240, 0.9) 68%, rgba(250, 240, 220, 0.9) 98%)",
      backgroundSize: "400% 400%",
    };

    return (
      <Box
        width="100%"
        height="100%"
        sx={{
          position: "fixed",
          margin: "auto",
          fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
          //overflow: "auto",
          background: "white",
          "@keyframes gradient": {
            "0%": { backgroundPosition: "0% 0%" },
            "50%": { backgroundPosition: "100% 100%" },
            "100%": { backgroundPosition: "0% 0%" },
          },
          "@keyframes wave": {
            "2%": { transform: "translateX(1)" },
            "25%": { transform: "translateX(-25%)" },
            "50%": { transform: "translateX(-50%)" },
            "75%": { transform: "translateX(-25%)" },
            "100%": { transform: "translateX(1)" },
          },
        }}
      >
        <Box
          sx={{
            ...waveStyles,
            // height: "100%",
            // opacity: 0.1,
            animation: "wave 15s -3s linear infinite, gradient 20s ease infinite",
          }}
        />
        <Box
          sx={{
            ...waveStyles,
            bottom: "-3em",
            // height: "50%",
            // opacity: 0.2,
            animation: "wave 21.6s linear reverse infinite, gradient 24s ease infinite",
          }}
        />
        <Box
          sx={{
            ...waveStyles,
            bottom: "-5em",
            // height: "20%",
            // opacity: 0.4,
            animation: "wave 24s -1s reverse infinite, gradient 27s ease infinite",
          }}
        />
      </Box>
    );
  }

  return (
    <>
      {renderBackground()}

      <Stack
        position="relative"
        height="100vh"
        //color="white"
        fontFamily='"Jura", sans-serif'
        //minHeight="100vh"
        fontSize="20px" // base font-size, almost all other font-size will be based on a percentage of this.
        overflow="auto"
        //bgcolor="#313233"
        letterSpacing="-1px"
        padding="0rem !important"
      >
        {/* <Stack direction="row" spacing={1}>
        <Link href="/"></Link>
        <Link href="/resume">Resume</Link>
        <Link href="/data-structures">Data Structures</Link>
      </Stack> */}

        {/* <div className={styles.center}>
        <Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
      </div> */}

        {renderHeaderBar()}

        {/* {renderVideoBackground("l73dA-A0Si4", 0.1)} */}

        <Box
          position="relative"
          paddingTop={`${headerBarHeight}px`}
          //paddingBottom={`${footerBarHeight}px`}
          flexGrow={1}
          overflow="auto"
        >
          {renderIntro()}
        </Box>

        {/* {renderFooterBar()} */}
      </Stack>
    </>
  );
}
