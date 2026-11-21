import { useEffect, useState } from "react";
import bannerLight from "../assets/banner-light.png";

const letters = [
  { left: "0%", right: "21.5%" },
  { left: "20%", right: "40.5%" },
  { left: "38%", right: "52.5%" },
  { left: "51%", right: "67%" },
  { left: "65.5%", right: "81.5%" },
  { left: "79.5%", right: "100%" },
];

const AtexraLoader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timeout = window.setTimeout(() => setVisible(false), reduceMotion ? 100 : 2150);

    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div
      className={`atexra-loader${reduceMotion ? " atexra-loader-reduced" : ""}`}
      role="status"
      aria-label="Loading ATEXRA"
    >
      <div className="atexra-loader-mark" aria-hidden="true">
        <div className="atexra-loader-wordmark">
          {letters.map((letter, index) => (
            <img
              key={index}
              src={bannerLight}
              alt=""
              className="atexra-loader-letter"
              style={{
                "--letter-left": letter.left,
                "--letter-right": letter.right,
                "--letter-delay": `${index * 180}ms`,
              } as React.CSSProperties}
            />
          ))}
        </div>
        <span className="atexra-loader-line" />
      </div>
    </div>
  );
};

export default AtexraLoader;
