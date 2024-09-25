import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Isheng!";
const bio1 = "A computer science student creating this biography using React!";
const bio2 =
  "During my time at NCCU, I completed four projects that demonstrate my skills and expertise, outlined in the project section below.";
// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar
        size="2xl"
        name="isheng"
        src={require("../images/isheng.jpg")}
        colorScheme="gray"
      />
      <Heading as="h2" size="md">
        {greeting}
      </Heading>
      <Heading as="h2" size="lg">
        {bio1}
      </Heading>
      <p>{bio2}</p>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
