import iconFooter from "../../assets/icon-footer.png";

export const Footer = () => {
    return(
        <footer className="footer">
            <figure className="footer__img">
                <img src={iconFooter} alt="" />
            </figure>
            <p>
                Tus compras en dias de descuentos son lo mejor, aqui puedes medirte 
                todo lo que desees por que tu felicidad es la nuestra.
            </p>
        </footer>
    );
};