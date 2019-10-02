import React from "react";
export const TimeLine = props => {
  return (
    <>
      <div className="timeLine">
        <ul>
          <li>
            <span className="span--innerCircle"></span>
            <span className="span--outerCircle"></span>

            <div className="title">Master of Cyber Security</div>
            <div className="info">Swinburne University</div>
            <div className="time">
              <div className="time--top">Current</div>
              <div className="time--bottom">2019</div>
            </div>
          </li>
          <li className="li--long">
            <span className="span--innerCircle"></span>
            <span className="span--outerCircle"></span>
            <div className="title">Bachelor of Computer Science</div>
            <div className="info">RMIT University</div>
            <div className="">Graduated</div>

            <div className="time">
              <div className="time--top">2019</div>
              <div className="time--bottom">2015</div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
