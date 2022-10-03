import Jaramillo from "../assests/Jaramillo.png";

function Main() {
  return (
    <main>
      <figure>
        <img src={Jaramillo} alt="Picture of Dr. Carlos Jaramillo"></img>
      </figure>
      <menu>
        <p>
          The Dr. Carlos Jaramillo said: "It's different to consciously choose
          between eating an ice cream and not being able to control to not
          eating an ice cream "
        </p>
        <p class="advertising">Find out what else he said</p>
      </menu>
    </main>
  );
}

export default Main;
