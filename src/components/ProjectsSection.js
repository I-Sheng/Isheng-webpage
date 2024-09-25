import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Film Manage System",
    description:
      "This project integrates the Django framework with the Yugabyte database to develop an efficient file management system.",
    getImageSrc: () => require("../images/photo-p1.jpg"),
    hyperlink: "https://github.com/I-Sheng/film-manage-system",
    alt: "Photo by Obregonia D. Toretto: https://www.pexels.com/photo/black-and-white-production-scene-take-tool-918281/",
  },
  {
    title: "Basketball Competition Dashboard",
    description:
      "This project utilizes Vue.js for the frontend, Flask for the backend, and SQLite as the database to build an advanced basketball competition dashboard.",
    getImageSrc: () => require("../images/photo-p2.jpg"),
    hyperlink: "https://github.com/Basketball-Competition-Dashboard/Project",
    alt: "Photo by TJ Dragotta on Unsplash",
  },
  {
    title: "Luxury Jewelry Mangata and Gallo",
    description:
      "This is the project for Coursera's course \"HTML and CSS in depth's\". The goal is to design a frontend page for the jewelry store.",
    getImageSrc: () => require("../images/photo-p3.jpg"),
    hyperlink: "https://i-sheng.github.io/Luxury-Jewelry-Mangata-and-Gallo/",
    alt: "Photo by  Anastasia  Shuraeva: https://www.pexels.com/photo/two-women-in-white-trying-on-golden-rings-and-necklaces-on-marble-table-5705481/",
  },
  {
    title: "Traveling Planner With LLM",
    description:
      "This project is part of the College Student Research Scholarship program and is currently ongoing, with completion expected by February 2025.",
    getImageSrc: () => require("../images/photo-p4.jpg"),
    hyperlink: "https://github.com/I-Sheng/Traveling-Planner-With-LLM",
    alt: "Photo by veerasak Piyawatanakul: https://www.pexels.com/photo/woman-holding-map-2415935/",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            hyperlink={project.hyperlink}
            alt={project.alt}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
