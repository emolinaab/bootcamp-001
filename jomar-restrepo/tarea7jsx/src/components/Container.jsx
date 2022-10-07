import React from "react";
import logo from "../assets/img/logotipo-de-playstation.png";
import "../App.css";

const Container = () => {
  return (
    <section className="background">
      <section className="title">
        <section className="subtitle">
          <figure>
            <img src={logo} className="logo" alt="logotipo" />
          </figure>
          <article>
            <h3>Ps4 | Ps5</h3>
          </article>
        </section>

        <section className="date">
          <h3>Fecha de Salida: 9 de Noviembre de 2022</h3>
        </section>
      </section>
      <section className="titleplay">
        <h1 id="play">Playstation</h1>
      </section>
      <section>
        <section className="subtitle2">
          <h4 id="title2">Final de la Saga Nórdica</h4>
          <section>
            <article>
              <p className="paragraph">
                God of war Ragnarok será el final de la saga nórdica de la serie
                de Sony Santa Monica, por lo que se espera una historia del todo
                épica con Kratos, Atreus, Freya,Thor y porsupuesto,Odín.
              </p>
            </article>
          </section>
          <section className="paragraph2">
            <p>Kratos y Atreus: La mayor aventura de su vida</p>
          </section>
          <section className="direction">
            <p>www.playstation.com</p>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Container;
