import React, { useState, useEffect } from "react";
import styled from "styled-components";

const star = "⭐";
const starArray = [];
const BigStar = styled.svg``;

const start = 200;
const complete = 10;
let currentCount = 1;

function Star() {
  const [percentage, setPercentage] = useState(start);
  const [stars, setStars] = useState(["*", "*", "*", "*", "*"]);

  useEffect(() => {
    const storedCount = localStorage.getItem("stars");
    let step;
    for (step = 0; step < storedCount; step++) {
      starArray[step] = star;
      setStars(starArray);
      let number = (step + 1) * 19;
      setPercentage(start - number);
    }
    if (storedCount !== currentCount) {
    }
  }, [currentCount]);

  return (
    <div>
      {stars}
      <BigStar
        xmls="https://www.w3.org/2000/svg"
        viewBox={`-400 ${percentage} 1000 200`}
      >
        <svg height="210" width="500">
          <polygon
            points="100,10 40,198 190,78 10,78 160,198"
            strokeWidth="2"
            stroke="#e4af4c"
            fill="#f4d37d"
          />
        </svg>
      </BigStar>
    </div>
  );
}

export default Star;
