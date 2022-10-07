import './SectionText.css'
const SectionText = ({ text }) => {
  return (
    <section className="container-section-text">
      <p className="section-text">{text}</p>
    </section>
  );
};

export default SectionText;
