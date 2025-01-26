export const AnimatedBackground = () => {
  return (
    <>
      <div className="background">
        {[...Array(20)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      <style jsx>{`
        @keyframes move {
          100% {
            transform: translate3d(0, 0, 1px) rotate(360deg);
          }
        }

        .background {
          position: fixed;
          width: 100vw;
          height: 100vh;
          top: 0;
          left: 0;
          background: #3e1e68;
          overflow: hidden;
        }

        .background span {
          width: 20vmin;
          height: 20vmin;
          border-radius: 20vmin;
          backface-visibility: hidden;
          position: absolute;
          animation: move;
          animation-duration: 5;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .background span:nth-child(0) {
          color: #ffacac;
          top: 41%;
          left: 53%;
          animation-duration: 190s;
          animation-delay: -329s;
          transform-origin: 4vw -7vh;
          box-shadow: 40vmin 0 5.162663206969866vmin currentColor;
        }

        .background span:nth-child(1) {
          color: #e45a84;
          top: 96%;
          left: 51%;
          animation-duration: 388s;
          animation-delay: -379s;
          transform-origin: -21vw -21vh;
          box-shadow: 40vmin 0 5.788461780588709vmin currentColor;
        }

        .background span:nth-child(2) {
          color: #583c87;
          top: 43%;
          left: 1%;
          animation-duration: 453s;
          animation-delay: -350s;
          transform-origin: -2vw -22vh;
          box-shadow: 40vmin 0 5.545369382314005vmin currentColor;
        }

        .background span:nth-child(3) {
          color: #ffacac;
          top: 5%;
          left: 91%;
          animation-duration: 129s;
          animation-delay: -275s;
          transform-origin: 8vw 4vh;
          box-shadow: 40vmin 0 5.31385630100667vmin currentColor;
        }

        .background span:nth-child(4) {
          color: #583c87;
          top: 22%;
          left: 42%;
          animation-duration: 430s;
          animation-delay: -362s;
          transform-origin: 3vw -9vh;
          box-shadow: -40vmin 0 5.520491394369914vmin currentColor;
        }

        .background span:nth-child(5) {
          color: #583c87;
          top: 29%;
          left: 7%;
          animation-duration: 207s;
          animation-delay: -46s;
          transform-origin: 17vw 22vh;
          box-shadow: 40vmin 0 5.855324372973413vmin currentColor;
        }

        .background span:nth-child(6) {
          color: #583c87;
          top: 32%;
          left: 40%;
          animation-duration: 441s;
          animation-delay: -369s;
          transform-origin: -24vw 19vh;
          box-shadow: 40vmin 0 5.353509012311292vmin currentColor;
        }

        .background span:nth-child(7) {
          color: #ffacac;
          top: 66%;
          left: 78%;
          animation-duration: 108s;
          animation-delay: -100s;
          transform-origin: 25vw -9vh;
          box-shadow: -40vmin 0 5.056500880149433vmin currentColor;
        }

        .background span:nth-child(8) {
          color: #e45a84;
          top: 54%;
          left: 63%;
          animation-duration: 11s;
          animation-delay: -144s;
          transform-origin: 4vw 24vh;
          box-shadow: -40vmin 0 5.732574439244139vmin currentColor;
        }

        .background span:nth-child(9) {
          color: #ffacac;
          top: 65%;
          left: 22%;
          animation-duration: 444s;
          animation-delay: -358s;
          transform-origin: 17vw -22vh;
          box-shadow: -40vmin 0 5.257222843875624vmin currentColor;
        }

        .background span:nth-child(10) {
          color: #e45a84;
          top: 62%;
          left: 36%;
          animation-duration: 307s;
          animation-delay: -11s;
          transform-origin: 18vw 17vh;
          box-shadow: -40vmin 0 5.28401759322367vmin currentColor;
        }

        .background span:nth-child(11) {
          color: #583c87;
          top: 23%;
          left: 18%;
          animation-duration: 310s;
          animation-delay: -68s;
          transform-origin: 24vw -24vh;
          box-shadow: -40vmin 0 5.3736654106772646vmin currentColor;
        }

        .background span:nth-child(12) {
          color: #e45a84;
          top: 65%;
          left: 39%;
          animation-duration: 288s;
          animation-delay: -405s;
          transform-origin: -19vw -16vh;
          box-shadow: -40vmin 0 5.974936697728967vmin currentColor;
        }

        .background span:nth-child(13) {
          color: #ffacac;
          top: 30%;
          left: 91%;
          animation-duration: 396s;
          animation-delay: -249s;
          transform-origin: 19vw 18vh;
          box-shadow: 40vmin 0 5.089036114934366vmin currentColor;
        }

        .background span:nth-child(14) {
          color: #e45a84;
          top: 2%;
          left: 69%;
          animation-duration: 430s;
          animation-delay: -273s;
          transform-origin: 25vw -12vh;
          box-shadow: -40vmin 0 5.637496962592818vmin currentColor;
        }

        .background span:nth-child(15) {
          color: #ffacac;
          top: 37%;
          left: 45%;
          animation-duration: 25s;
          animation-delay: -165s;
          transform-origin: 11vw 16vh;
          box-shadow: 40vmin 0 5.9651973928429545vmin currentColor;
        }

        .background span:nth-child(16) {
          color: #583c87;
          top: 47%;
          left: 7%;
          animation-duration: 47s;
          animation-delay: -136s;
          transform-origin: -6vw 24vh;
          box-shadow: -40vmin 0 5.098206625557754vmin currentColor;
        }

        .background span:nth-child(17) {
          color: #ffacac;
          top: 100%;
          left: 59%;
          animation-duration: 385s;
          animation-delay: -226s;
          transform-origin: 1vw -24vh;
          box-shadow: 40vmin 0 5.143025117115489vmin currentColor;
        }

        .background span:nth-child(18) {
          color: #ffacac;
          top: 84%;
          left: 14%;
          animation-duration: 56s;
          animation-delay: -56s;
          transform-origin: 16vw -19vh;
          box-shadow: 40vmin 0 5.255564515534293vmin currentColor;
        }

        .background span:nth-child(19) {
          color: #ffacac;
          top: 95%;
          left: 38%;
          animation-duration: 20s;
          animation-delay: -97s;
          transform-origin: 13vw -11vh;
          box-shadow: 40vmin 0 5.514076713276555vmin currentColor;
        }
      `}</style>
    </>
  );
};

export default AnimatedBackground;
