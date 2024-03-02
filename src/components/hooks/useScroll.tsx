import { useState, useEffect, useRef } from "react";

const useScroll = (isCardHovered) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverflowed, setIsOverflowed] = useState(false);
  const cardRef = useRef(null);

  const handleScroll = () => {
    const div = cardRef.current;
    setIsScrolled(div!.scrollTop > 0);
    setIsOverflowed(div!.scrollHeight > div!.clientHeight);
  };

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (cardRef.current) {
        cardRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (!isCardHovered && cardRef.current) {
      cardRef.current.scrollTop = 0;
    }
  }, [isCardHovered]);

  return { cardRef, isScrolled, isOverflowed };
};

export default useScroll;
