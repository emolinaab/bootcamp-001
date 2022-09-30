import PropTypes from "prop-types";
import "../styles/coverCard.css";

const listItems = (lines) => {
  return lines.map((line) => <li key={line.toString()}>{line}</li>);
};

export const CovercardLine = ({ lines }) => {
  return <ul>{listItems(lines)}</ul>;
};

export const CovercardImage = ({ url, lines }) => {
  return (
    <ul>
      <img src={url} />
      {listItems(lines)}
    </ul>
  );
};

export const CovercardBottom = ({ url, data }) => {
  return (
    <footer>
      <p>{data}</p>
      <img src={url} />
    </footer>
  );
};

CovercardLine.propTypes = {
  lines: PropTypes.array,
};

CovercardImage.propTypes = {
  lines: PropTypes.array,
  url: PropTypes.string,
};

CovercardBottom.propTypes = {
  data: PropTypes.string,
  url: PropTypes.string,
};
