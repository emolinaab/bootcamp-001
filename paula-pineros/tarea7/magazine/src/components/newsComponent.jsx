import Hiking from "../assests/Hiking.jpg";
import Yoga from "../assests/Yoga.jpg";

function News() {
  return (
    <section>
      <ul>
        <li id="imgs">
          <figure>
            <img src={Hiking} alt="A man hiking"></img>
          </figure>
        </li>
        <li>
          <p class="pabsolute">End this month like a champ</p>
        </li>
        <li>
          <p class="pabsolute">Saturday 27/08</p>
        </li>
        <li id="imgs">
          <figure>
            <img src={Yoga} alt="Women doing yoga"></img>
          </figure>
        </li>
        <li>
          <p class="pabsolute">Yoga according to Iyengar</p>
        </li>
      </ul>
    </section>
  );
}

export default News;
