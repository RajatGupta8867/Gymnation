import React from "react";
import "./SinglePost.css";
export default function SinglePost() {
  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        <img
          src="https://images.pexels.com/photos/1808329/pexels-photo-1808329.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="single-post-image"
        />
        <h1 className="single-post-title">
          Lorem ipsum dolor sit amet.
          <div className="single-post-edit">
            <i class="single-post-icon  fa-solid fa-pen-to-square"></i>
            <i class="single-post-icon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="single-post-info">
          <span className="single-post-author">
            Author: <b>Saket</b>
          </span>
          <span className="single-post-data">1 hour ago</span>
        </div>
        <p className="single-post-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas expedita
          minima delectus ipsum quis, ipsam distinctio dolorum doloremque
          temporibus repellendus? Sit, ducimus perferendis. Laborum dolore illo
          vitae temporibus veniam inventore alias delectus error autem, magni
          vel voluptatum voluptate in ab officia! Temporibus sit magni beatae
          eaque cum suscipit libero iste! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quas expedita minima delectus ipsum quis, ipsam
          distinctio dolorum doloremque temporibus repellendus? Sit, ducimus
          perferendis. Laborum dolore illo vitae temporibus veniam inventore
          alias delectus error autem, magni vel voluptatum voluptate in ab
          officia! Temporibus sit magni beatae eaque cum suscipit libero iste!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas expedita
          minima delectus ipsum quis, ipsam distinctio dolorum doloremque
          temporibus repellendus? Sit, ducimus perferendis. Laborum dolore illo
          vitae temporibus veniam inventore alias delectus error autem, magni
          vel voluptatum voluptate in ab officia! Temporibus sit magni beatae
          eaque cum suscipit libero iste! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quas expedita minima delectus ipsum quis, ipsam
          distinctio dolorum doloremque temporibus repellendus? Sit, ducimus
          perferendis. Laborum dolore illo vitae temporibus veniam inventore
          alias delectus error autem, magni vel voluptatum voluptate in ab
          officia! Temporibus sit magni beatae eaque cum suscipit libero iste!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas expedita
          minima delectus ipsum quis, ipsam distinctio dolorum doloremque
          temporibus repellendus? Sit, ducimus perferendis. Laborum dolore illo
          vitae temporibus veniam inventore alias delectus error autem, magni
          vel voluptatum voluptate in ab officia! Temporibus sit magni beatae
          eaque cum suscipit libero iste! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quas expedita minima delectus ipsum quis, ipsam
          distinctio dolorum doloremque temporibus repellendus? Sit, ducimus
          perferendis. Laborum dolore illo vitae temporibus veniam inventore
          alias delectus error autem, magni vel voluptatum voluptate in ab
          officia! Temporibus sit magni beatae eaque cum suscipit libero iste!
        </p>
      </div>
    </div>
  );
}
