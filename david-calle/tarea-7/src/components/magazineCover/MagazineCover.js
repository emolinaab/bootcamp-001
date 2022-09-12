import AnnouncementsContainer from "./announcementsContainer/AnnouncementsContainer";
import BottomAnnouncement from "./bottomAnnouncement/BottomAnnouncement";
import "./magazineCoverStyles.css";

const MagazineTitle = ({ title }) => {
  return <h1 id="magazine-title">{title}</h1>;
};

const MagazineTitleDescription = ({ description }) => {
  return <h3 id="magazine-title-description">{description}</h3>;
};

const MagazineCover = ({ magazineData }) => {
  const { title, description, announcements, bottomTitle, bottomDescription } =
    magazineData;
  return (
    <div id="magazine-container">
      <MagazineTitle title={title} />
      <MagazineTitleDescription description={description} />
      <AnnouncementsContainer announcementsData={announcements} />
      <BottomAnnouncement title={bottomTitle} description={bottomDescription} />
    </div>
  );
};

export default MagazineCover;
