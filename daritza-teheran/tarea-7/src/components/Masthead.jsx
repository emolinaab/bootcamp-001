import PropTypes from "prop-types";
import '../styles/masthead.css';

export const Masthead = ({ title, subtitle }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </>
  );
};

Masthead.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
