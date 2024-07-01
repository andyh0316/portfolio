"use client";

import React, { useEffect } from "react";
import "./drifter-stars-background.scss";

export const DrifterStarsBackground = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/backgrounds/drifter-stars/backgroundAnimation.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <canvas id="stars" width="300" height="300"></canvas>
    </div>
  );
};
