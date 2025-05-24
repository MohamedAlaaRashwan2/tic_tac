"use client"
import { useEffect, useState } from "react";
import Call from "./about/call";

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function Home() {
  const [calls, setCalls] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("Circle");
  const [winnMassage, setWinnMassage] = useState("");


  useEffect(() => {
    winningCombos.forEach((combo) => {
      const circlewine = combo.every((index) => calls[index] === "Circle");
      const crosswin = combo.every((index) => calls[index] === "Cross");

      if (circlewine) {
        setWinnMassage("circle win  (:");
      } else if (crosswin) {
        setWinnMassage("cross win  (:");
      }
    })
  }, [calls])
  useEffect(() => {
    if (calls.every((call) => call !== "") && !winnMassage) {
      setWinnMassage("draw!");
    }
  }, [calls, winnMassage])
  const handleRestart = () => {
    setCalls(["", "", "", "", "", "", "", "", ""]);
    setWinnMassage("");
}
return (
  <main className="container">
      <div className="gameborder">
        {calls.map((call, index) => (
          <Call
            id={index}
            go={go}
            steGo={setGo}
            key={index}
            calls={calls}
            setClalls={setCalls}
            call={call}
            winnMassage={winnMassage}
            />
        ))}
      </div>
      <div className="winnMassage">{winnMassage}</div>
      {!winnMassage && <div className="go">{` its now ${go} turn!`}</div>}
      <button className="restart" onClick={handleRestart}>Restart</button>
    </main>
  );
}
export default Home

