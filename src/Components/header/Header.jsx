import React from "react";
import "./Header.css"
export default function Header() {
  return (
    <div className="header">
      <div className="header-titles">
        <span className="header-title-sm">React and Node</span>
        <span className="header-title-lg">Blog</span>
        <img
          className="header-image"
          src="https://thumbs.dreamstime.com/b/autumn-fall-nature-scene-autumnal-park-beautiful-77869517.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
