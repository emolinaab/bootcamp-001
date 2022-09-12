import { React } from "react";
import "./announcementsContainer.css";
import Announcement from "./Announcement";

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
      <div id="announcements-right">{formatedAnnouncements.slice(3, 4)}</div>
    </div>
  );
};

export default AnnouncementsContainer;
