import { React } from "react";
import "./announcementsContainer.css";

const AnnouncementImage = ({ imageUrl }) => {
  return (
    <section className=" announcement-image-container">
      <figure>
        <img className="announcement-image" src={imageUrl} alt="" />
      </figure>
    </section>
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
    <li>
      <section className="announcement-container">
        {imageUrl ? <AnnouncementImage imageUrl={imageUrl} /> : null}
        <AnnouncementTitle title={title} />
        {description ? (
          <AnnouncementDescription description={description} />
        ) : null}
      </section>
    </li>
  );
};

export default Announcement;
