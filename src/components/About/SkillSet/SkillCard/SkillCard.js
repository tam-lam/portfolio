import React from "react";
import Card from "react-bootstrap/Card";

export const SkillCard = props => {
  const cardStyle = {
    width: "100px",
    background: "transparent",
    border: "none",
    wordWrap: "none",
    padding: "0 !important",
    placeItems: "center"
  };
  const imgStyle = {
    width: "80px",
    height: "80px"
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
        <div className="text-center">
          <Card.Img style={imgStyle} variant="top" src={props.img} />
        </div>
        <Card.Body style={bodyStyle}>
          <Card.Title
            style={titleStyle}
            className="d-none d-md-block text-center"
          >
            {props.text}
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};
