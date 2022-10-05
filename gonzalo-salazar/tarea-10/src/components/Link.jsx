import PropTypes from "prop-types";

const Link = ({ active, children, onClick }) => (
  <button className="footer__btn" onClick={onClick} disabled={active}>
    {children}
  </button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
