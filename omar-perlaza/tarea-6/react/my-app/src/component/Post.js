import React from "react";
import "../styles/styles.css";

export function Postlist() {
  return (
    <div className="container-post">
      <section className="user-info">
        <img
          className="post-image"
          src={require("../images/programador.jpg")}
          alt="foto de perfil"
        />
        <h2>User name</h2>
        <div className="post-text">
        <h3 className="post-title">titulo Post</h3>
        <p className="post-content">Contenido del post</p>
      </div>
      </section>
      <section className="user-info">
        <img
          className="post-image"
          src={require("../images/user1.jpg")}
          alt="foto de perfil"
        />
        <h2>User name</h2>
        <div className="post-text">
        <h3 className="post-title">titulo Post</h3>
        <p className="post-content">Contenido del post</p>
      </div>
      </section>
      

      
    </div>
  );
}
