import "./announcementsContainer.css";

const Announcement = ({ title, description, imageUrl }) => {
  return (
    <div className="announcement-container">
      {imageUrl ? (
        <div className=" announcement-image-container">
          <img className="announcement-image" src={imageUrl} alt="" />
        </div>
      ) : null}

      <h3 className="announcement-title">{title}</h3>
      {description ? (
        <p className="announcement-description">{description}</p>
      ) : null}
    </div>
  );
};

const AnnouncementsContainer = ({ announcementsData }) => {
  const formatedAnnouncements = announcementsData.map((data) => (
    <Announcement
      title={data.title}
      description={data.description}
      imageUrl={data.imageUrl}
    />
  ));
  return (
    <div id="announcements-container">
      <div id="announcements-left">{formatedAnnouncements.slice(0, 3)}</div>
      <div id="announcements-right">{formatedAnnouncements.slice(3)}</div>
    </div>
  );
};

export default AnnouncementsContainer;
