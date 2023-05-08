import React from "react";
import "./Write.css";
export default function Write() {
  return (
    <div className="write">
        <img src="https://thumbs.dreamstime.com/b/tiger-wild-winter-nature-amur-tiger-running-snow-action-wildlife-scene-danger-animal-cold-winter-tajga-russ-84783074.jpg" alt="" className="write-image"/>
      <form className="write-form">
        <div className="write-form-group">
          <label htmlFor="file-input">
            <i class="write-icon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="file-input" style={{ display: "none" }} />
          <input
            type="text"
            id="text-input"
            placeholder="Title"
            className="write-input"
            autoFocus={true}
          />
        </div>
        <div className="write-form-group">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="write-input write-text"
          ></textarea>
        </div>
        <button className="write-submit">Submit</button>
      </form>
    </div>
  );
}
