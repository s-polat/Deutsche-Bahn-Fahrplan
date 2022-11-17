import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Line from "./components/Line.js";

function App() {
  const [toFrankfurt, setToFrankfurt] = useState([]);
  const [fromFrankfurt, setFromFrankfurt] = useState([]);
  const [currentState, setCurrentState] = useState([]);
  const [color, setColor] = useState(false);

  useEffect(() => {
    fetch("https://db-fahrplan-server.vercel.app/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const nachFrankfurt = data.filter((item) =>
          item.to.includes("Frankfurt")
        );
        setToFrankfurt(nachFrankfurt);
        setCurrentState(nachFrankfurt);
        const vonFrankfurt = data.filter((item) =>
          item.from.includes("Frankfurt")
        );
        setFromFrankfurt(vonFrankfurt);
      });
  }, []);

  const clickHandle = (e) => {
    e.target.value === "von"
      ? setCurrentState(fromFrankfurt, setColor(true))
      : setCurrentState(toFrankfurt, setColor(false));
  };

  return (
    <div className="App">
      <div className="InApp">
        <h2>DB Fahrplananzeige</h2>
        <div className="red_line"></div>
        <button
          className="btn"
          value="von"
          style={{ backgroundColor: color ? "#ec001851" : "#EC0016" }}
          onClick={clickHandle}
        >
          von Frankfurt
        </button>
        <button
          className="btn"
          value="nach"
          style={{ backgroundColor: color ? "#EC0016" : "#ec001851" }}
          onClick={clickHandle}
        >
          nach Frankfurt
        </button>
        <div>
          {currentState.length > 0 &&
            currentState.map((item) => (
              <div key={uuid()}>
                <Line
                  departure={item.from}
                  arrival={item.to}
                  departureTime={item.starttime}
                  arrivalTime={item.endtime}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
