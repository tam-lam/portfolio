import React from "react";
export const TabTitle = props => {
  return (
    <h1
      className="rellax display-3 tabTitle font-weight-bold"
      data-rellax-speed="-1"
    >
      {props.title}
    </h1>
  );
};
