import React from "react";
import "../App.css";

function Line({departure, arrival, departureTime, arrivalTime}) {
    const duration = arrivalTime;
  return (
    <div style={{"margin":"40px 0"}}>
      <div className="info">
        <p>{departure} </p>
        <p>{duration}duration</p>
        <p>{arrival}</p>
      </div>
      <div className="line">
        <div className="round"></div>
        <div className="gray_line"></div>
        <div className="round"></div>
      </div>
      <div className="time">
        <p>{departureTime} Uhr</p>
        <p>{arrivalTime} Uhr</p>
      </div>
    </div>
  );
}

export default Line;
