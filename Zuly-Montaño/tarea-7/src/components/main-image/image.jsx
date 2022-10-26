import Img from "../../assets/img.jpg";

export const Image = () => {
    return(
        <figure className="container-img">
            <img className="container-img__image" src= {Img} />
        </figure>
    );
};