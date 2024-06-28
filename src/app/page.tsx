import Image from "next/image";
import Link from "next/link";
import { Box, Stack } from "@mui/material";
import { keyframes } from "@mui/system";

export default function Home() {
  const headerBarHeight = 40;
  const footerBarHeight = 40;

  const screenPanelSx = {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    padding: "0px 5%",
    paddingTop: "20px",
  };

  function renderHeaderBar() {
    const buttonSx = {
      height: "13px",
      width: "13px",
      backgroundColor: "#bbb",
      borderRadius: "50%",
      display: "inline-block",
      marginRight: "4px",
    };

    return (
      <Stack
        width="100%"
        direction="row"
        alignItems="center"
        justifyContent={"space-between"}
        position="fixed"
        height={headerBarHeight}
        bgcolor={"black"}
        zIndex={1}
        px={2}
      >
        <Box flexShrink={0}>
          <Box sx={{ ...buttonSx, backgroundColor: "red" }}></Box>
          <Box sx={{ ...buttonSx, backgroundColor: "orange" }}></Box>
          <Box sx={{ ...buttonSx, backgroundColor: "green" }}></Box>
        </Box>

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
      <Box
        position="fixed"
        bottom="0px"
        display="flex"
        alignItems="center"
        minHeight={footerBarHeight}
        width="100%"
        bgcolor="black"
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
      </Box>
    );
  }

  function renderIntro() {
    const codeLineSx = { transition: "all 300ms ease-out" };
    const codeLineIndentSx = {
      paddingLeft: "5%",
      lineHeight: "130%",
    };
    const codeObjectTypeSx = { color: "#4ec9b0" };
    const codeObjectSx = { color: "#9cdcfe" };
    const codeKeywordSx = { color: "#569cd6" };
    const codeNormalSx = { color: "#dcdcdc" };
    const codeStringSx = { color: "#d69d85" };
    const codeCommentSx = { color: "#009b40", opcaity: 0.65 };
    const codeLinkSx = { color: "rgb(0, 140, 255)" };

    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "@media (max-width: 768px)": {
            //fontSize: "12px",
          },
        }}
        className="screen-panel"
      >
        {/* <VideoBackground youtubeId="J2qDRJdTGow"></VideoBackground> */}

        <Box
          sx={{
            position: "relative",
            paddingRight: "5%",
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
            <Box component="span" sx={codeObjectTypeSx}>
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
              "Full Stack Web Developer"
            </Box>
            <Box component="span" sx={codeNormalSx}>
              ,
            </Box>
          </Box>
          <Box sx={{ ...codeLineSx, ...codeLineIndentSx }}>
            <Box component="span" sx={codeNormalSx}>
              Graduated ={" "}
            </Box>
            <Box component="span" sx={codeStringSx}>
              "University of California: San Diego"
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
                Click Me to View
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

        {/* <svg className="laptop" viewBox="0 0 695 400" version="1.1">
          <g stroke="none" stroke-width="2" fill="#FFFFFF" fill-rule="evenodd" sketchType="MSPage">
            <g id="Laptop" sketchType="MSLayerGroup" transform="translate(1.000000, 1.000000)" stroke="#8492A5">
              <path
                d="M594,0 L98,0 C84.50415,0 73,11.0738184 73,24.7901127 L73,351.027995 L619,351.027985 L619,24.7901127 C618.999971,11.0728209 607.537479,0 594,0 Z"
                id="bezel"
                stroke-width="2"
                fill="none"
                sketchType="MSShapeGroup"
              ></path>
              <circle id="webcam" stroke-width="2" fill="none" sketchType="MSShapeGroup" cx="347" cy="19" r="4"></circle>
              <g id="bottom" transform="translate(0.000000, 351.000000)" sketchType="MSShapeGroup">
                <path
                  d="M640.812,31.01 L51.288,31.01 C20.641,31.01 0,20.494 0,16.022 L0,2.428 C0,1.084 1.335,0 2.995,0 L689.104,0 C690.766,0 692.103,1.084 692.103,2.428 L692.103,16.557 C692.096,20.092 676.112,31.01 640.812,31.01 Z"
                  id="Shape"
                  stroke-width="2"
                  fill="none"
                ></path>
                <path d="M0.5,14.5 L690.242676,14.5" id="Line" stroke-linecap="square"></path>
              </g>
              <rect id="screen" fill="none" sketchType="MSShapeGroup" x="95" y="39" width="501.073853" height="292.009"></rect>
              <path
                d="M421,352 L421,355.087 C421,357.288 416.666719,357.952714 413.386719,357.952714 L278.815286,357.952714 C275.364286,357.952714 271,357.289 271,355.087 L271,352"
                id="touchpad"
                fill="none"
                sketchType="MSShapeGroup"
              ></path>
            </g>
          </g>
        </svg> */}
      </Box>
    );
  }

  return (
    <Box
      position="relative"
      height="100%"
      color="white"
      fontFamily='"Jura", sans-serif'
      minHeight="100vh"
      fontSize="20px" // base font-size, almost all other font-size will be based on a percentage of this.
      overflow="auto"
      bgcolor="#313233"
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

      <Box paddingTop={`${headerBarHeight}px`} paddingBottom={`${footerBarHeight}px`}>
        {renderIntro()}
      </Box>

      {renderFooterBar()}
    </Box>
  );
}
