import React, { useEffect, useState, useRef } from "react";
import Template from "../components/Template";

const randomPick = (maxNum) => {
  return parseInt(Math.random() * maxNum) + 1;
};

const btnStyle = {
  color: "white",
  background: "black",
  padding: ".375rem .75rem",
  border: "0px white",
  borderRadius: ".3rem",
  fontSize: "1.5rem",
  lineHeight: 2
};

const RussianRoulettePage = () => {
  const [cnt, setCnt] = useState(0);
  const [gameCnt, setGameCnt] = useState(randomPick(10));

  const checkResult = () => {
    if (cnt == gameCnt) {
      alert("YOU DIE!!!!");
      setCnt(0);
      setGameCnt(randomPick(10));
      return;
    } else {
      setCnt(cnt + 1);
      console.log("safe");
    }
  };
  return (
    <Template now="russian-roulette">
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "200px"
      }}
      >
        <h1>Russian Roulette</h1>
        <br />
        <br />
        <h2>How many : {cnt}</h2>
        <br />
        <button style={btnStyle} onClick={(e) => checkResult()}>
          Button
        </button>
      </div>
    </Template>
  );
}

export default RussianRoulettePage;