import React from "react";
import "../styles/styles.css";

function HomeContent() {
  return (
    <section className="home-user-list">
      <div className="user-list">
        <img
          className="user-image"
          src={require("../images/user1.jpg")}
          alt="foto de perfil"
        />
        <h6>lizards</h6>
      </div>
      <div className="user-list">
        <img
          className="user-image"
          src={require("../images/user2.jpeg")}
          alt="foto de perfil"
        />
        <h6>Venom</h6>
      </div>
      <div className="user-list">
        <img
          className="user-image"
          src={require("../images/user3.jpg")}
          alt="foto de perfil"
        />
        <h6>Katty</h6>
      </div>
      <div className="user-list">
        <img
          className="user-image"
          src={require("../images/user4.jpg")}
          alt="foto de perfil"
        />
        <h6>Mangaka</h6>
      </div>
    </section>
  );
}

export default HomeContent;
