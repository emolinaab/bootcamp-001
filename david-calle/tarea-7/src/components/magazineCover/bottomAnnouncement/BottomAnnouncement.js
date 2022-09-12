import "./bottomAnnouncement.css";

const BottomAnnouncement = ({ title, description }) => {
  return (
    <div id="bottom-announcement">
      <img
        id="bottom-announcement-img"
        src={process.env.PUBLIC_URL + "/img/paw.png"}
        alt=""
      />
      <h2 id="bottom-announcement-title">{title}</h2>
      <p class="announcement-description">{description}</p>
    </div>
  );
};

export default BottomAnnouncement;
