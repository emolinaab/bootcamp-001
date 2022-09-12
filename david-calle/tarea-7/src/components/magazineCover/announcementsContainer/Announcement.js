import { React } from "react";
import "./announcementsContainer.css";

const AnnouncementImage = ({ imageUrl }) => {
  return (
    <div className=" announcement-image-container">
      <img className="announcement-image" src={imageUrl} alt="" />
    </div>
  );
};

const AnnouncementTitle = ({ title }) => (
  <h3 className="announcement-title">{title}</h3>
);

const AnnouncementDescription = ({ description }) => (
  <p className="announcement-description">{description}</p>
);

const Announcement = ({ title, description, imageUrl }) => {
  return (
    <div className="announcement-container">
      {imageUrl ? <AnnouncementImage imageUrl={imageUrl} /> : null}
      <AnnouncementTitle title={title} />
      {description ? (
        <AnnouncementDescription description={description} />
      ) : null}
    </div>
  );
};

export default Announcement;
