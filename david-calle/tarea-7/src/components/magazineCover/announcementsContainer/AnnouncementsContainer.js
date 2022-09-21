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
    <section id="announcements-container">
      <ul id="announcements-left">{formatedAnnouncements.slice(0, 3)}</ul>
      <ul id="announcements-right">{formatedAnnouncements.slice(3, 4)}</ul>
    </section>
  );
};

export default AnnouncementsContainer;
