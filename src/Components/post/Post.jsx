import React from "react";
import "./Post.css";
export default function post() {
  return (
    <div className="post">
      <img
        className="post-image"
        src="https://www.shutterstock.com/image-photo/tropical-paradise-beach-white-sand-260nw-1201599862.jpg"
        alt=""
      />
      <div className="post-info">
        <div className="post-categories">
          <span className="post-category">Music</span>
          <span className="post-category">Life</span>
        </div>
        <span className="post-title">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="post-date">1 hr ago</span>
      </div>
      <p className="post-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        voluptatem iusto modi. Laudantium numquam beatae, totam necessitatibus
        aliquam dicta unde, error sit voluptate quidem consectetur incidunt! Sit
        omnis tenetur, itaque consectetur mollitia assumenda, nisi sed rem
        voluptatibus soluta, provident unde!
      </p>
    </div>
  );
}
