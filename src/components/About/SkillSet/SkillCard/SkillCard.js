import React from "react";
import Card from "react-bootstrap/Card";

export const SkillCard = props => {
  const cardStyle = {
    width: "100px",
    background: "transparent",
    border: "none",
    color: "#303030",
    wordWrap: "none",
    padding: "0 !important"
  };
  const imgStyle = {
    width: "100px",
    height: "100px"
  };
  const titleStyle = {
    fontSize: "1rem"
  };
  const bodyStyle = {
    padding: "0 !important"
  };
  return (
    <>
      <Card style={cardStyle}>
        <Card.Img style={imgStyle} variant="top" src={props.img} />
        <Card.Body style={bodyStyle}>
          <Card.Title style={titleStyle} className="text-center">
            {props.text}
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};
