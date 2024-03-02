import React, { useState, useEffect } from "react";

const Eye = () => {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: never) => {
    const eye = document.getElementById("eye");
    const eyeRect = eye!.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
    const maxDistance = Math.min(eyeRect.width, eyeRect.height) / 7;

    const eyeballX = Math.cos(angle) * maxDistance;
    const eyeballY = Math.sin(angle) * maxDistance;

    setEyePosition({ x: eyeballX, y: eyeballY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="eye" id="eye">
      <div
        className="eyeball"
        style={{
          transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
        }}
      ></div>
    </div>
  );
};

export default Eye;
