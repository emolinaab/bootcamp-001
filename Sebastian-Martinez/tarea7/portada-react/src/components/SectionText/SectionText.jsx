import './SectionText.css'
const SectionText = ({ text }) => {
  return (
    <div className="container-section-text">
      <p className="section-text">{text}</p>
    </div>
  );
};

export default SectionText;
