import React from "react";
import "../App.css";

function Line({departure, arrival, departureTime, arrivalTime}) {

  const duration = (departureTime, arrivalTime) => {
    const departureTimeSplit = departureTime.split(":");
    const arrivalTimeSplit = arrivalTime.split(":");
    const departureTimeHour = parseInt(departureTimeSplit[0])*60;
    const departureTimeMinute = parseInt(departureTimeSplit[1]);
    const departureTimeTotalMinutes = departureTimeHour + departureTimeMinute;
    const arrivalTimeHour = parseInt(arrivalTimeSplit[0])*60;
    const arrivalTimeMinute = parseInt(arrivalTimeSplit[1]);
    const arrivalTimeTotalMinutes = arrivalTimeHour + arrivalTimeMinute;
    const timeDifference = arrivalTimeTotalMinutes - departureTimeTotalMinutes;
    const timeDifferenceHour = Math.floor(timeDifference/60);
    const timeDifferenceMinute = timeDifference%60;
    return `${timeDifferenceHour}h ${timeDifferenceMinute}min`;
  }
  return (
    <div style={{margin:"30px 0", fontWeight:"bolder"}}>
      <div className="info">
        <p>{departure} </p>
        <div className="duration">{duration(departureTime, arrivalTime)}</div>
        <p className="arrival">{arrival}</p>
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
