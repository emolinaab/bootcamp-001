import "./message.css";

export const Message = ({
  boolean = false,
  message = "The name of the movie is incorrect 🙁",
}) => {
  return (
    <section
      className={`section__message ${
        !boolean ? "section__message--hidden" : ""
      }`}
    >
      <p>{message}</p>
    </section>
  );
};
