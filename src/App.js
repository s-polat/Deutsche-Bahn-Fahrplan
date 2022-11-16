import { useEffect, useState } from "react";
import fahrPlan from "./data.js";
import "./App.css";
import Line from "./components/Line.js";

function App() {
  const [toFrankfurt, setToFrankfurt] = useState([]);
  const [fromFrankfurt, setFromFrankfurt] = useState([]);

  useEffect(() => {
    const nachFrankfurt = fahrPlan.filter((item) =>
      item.to.includes("Frankfurt")
    );
    const vonFrankfurt = fahrPlan.filter((item) =>
      item.from.includes("Frankfurt")
    );
    setToFrankfurt(nachFrankfurt);
    setFromFrankfurt(vonFrankfurt);
  }, []);

  console.log(toFrankfurt);
  console.log(fromFrankfurt);

  return (
    <div className="App">
      <div className="InApp">
        <h1>DB Fahrplananzeige</h1>
        <div className="red_line"></div>
        <button className="btn">von Frankfurt</button>
        <button className="btn">nach Frankfurt</button>
        
        <div>
          {toFrankfurt.map((item) => (
            <div key={item.to}>
              <Line departure={item.to} arrival={item.from} departureTime={item.starttime} arrivalTime={item.endtime} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
