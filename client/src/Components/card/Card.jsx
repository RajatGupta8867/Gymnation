import React from "react";
import "./Card.css";
export default function Card({ membership, type, Title, subTitle, Price }) {
  return (
    <>
      {membership ? (
        <div className={`card card-${type}-m`}>
          <span className="card-text card-heading">{Title}</span>
          <span className="card-text card-subheading">You are already member of this course.</span>
        </div>
      ) : (
        <div className={`card card-${type}`}>
          <span className="card-text card-heading">{Title}</span>
          <span className="card-text card-subheading">{subTitle}</span>
          <div className="card-text card-price">
            From:<span className="card-text price">₹{Price}</span>/month
          </div>
        </div>
      )}
    </>
  );
}
