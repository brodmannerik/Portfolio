import React from "react";
import Card from "./Card";
import useResponsiveWidth from "./hooks/useResponsiveStyles";

const Wrapper = () => {
  const cardData = [];

  const windowWidth = useResponsiveWidth();
  const bigScreen = windowWidth > 1800;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: bigScreen ? "120px" : "40px",
        padding: bigScreen ? "60px" : "16px",
        justifyContent: "center",
        paddingTop: bigScreen ? "150px" : "100px",
        paddingBottom: "100px",
      }}
    >
      {cardData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Wrapper;
