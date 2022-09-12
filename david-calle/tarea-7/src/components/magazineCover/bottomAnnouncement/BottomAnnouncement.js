import { React } from "react";
import "./bottomAnnouncement.css";

const AnnouncementTitle = ({ title }) => (
  <h2 id="bottom-announcement-title">{title}</h2>
);

const AnnouncementDescription = ({ description }) => (
  <p class="announcement-description">{description}</p>
);

const BottomAnnouncement = ({ title, description }) => {
  return (
    <div id="bottom-announcement">
      <img
        id="bottom-announcement-img"
        src={process.env.PUBLIC_URL + "/img/paw.png"}
        alt=""
      />
      <AnnouncementTitle title={title} />
      <AnnouncementDescription description={description} />
    </div>
  );
};

export default BottomAnnouncement;
