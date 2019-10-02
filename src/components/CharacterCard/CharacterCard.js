import React from "react";
export const CharacterCard = props => {
  return (
    <>
      <div className="character__card">
        <h1 className="character__hightlight">{props.hightlight}</h1>
        <p>{props.description}</p>
      </div>
    </>
  );
};
