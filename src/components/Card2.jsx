import * as React from "react";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

export default function Card2(props) {
  const card2Style = {
    width: 200,
    height: 300,
    backgroundColor: `${props.color}`,
    borderRadius: 20,
    padding: 10,
    margin: 10,
    display: "flex",
    flexDirection: "column-reverse",
  };

  const button2Style = {
    height: "2em",
    width: "2em",
  };
  const summary2 = {
    marginLeft: 10,
    fontSize: 20,
  };
  const content = {};

  return (
    <div style={card2Style} className="card">
      <div className={content}>
        <p style={summary2}>Lorem, ipsum.</p>
        <ArrowCircleRightOutlinedIcon style={button2Style} color="action" />
      </div>
    </div>
  );
}