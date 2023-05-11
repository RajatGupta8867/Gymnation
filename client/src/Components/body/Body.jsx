import React from "react";
import "./Body.css";
import Card from "../card/Card";

export default function Body() {
  return (
    <div className="body">
      <div className="body-join-text">
        GET NOW<span className="discount"> 20% </span>
        OFF ON OUR MEMBERSHIP
      </div>
      <div className="card-wrapper">
        <div className="body-card">
          <Card
            Title={"FITNESS CLASSES"}
            subTitle={"A better way shape your body."}
            Price={"250"}
          />
          <Card
            Title={"YOGA COURSES"}
            subTitle={"Keep yourself fit fella."}
            Price={"200"}
          />
          <Card
            Title={"DANCE COURSES"}
            subTitle={"Get fit with skill."}
            Price={"300"}
          />
        </div>
      </div>
    </div>
  );
}
