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

export default Announcement;
