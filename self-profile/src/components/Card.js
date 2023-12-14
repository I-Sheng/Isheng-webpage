import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack
      align="start"
      shouldWrapChildren="true"
      spacing="0.5rem"
      style={{
        backgroundColor: "white",
        borderRadius: "0.5rem",
        color: "black",
      }}
    >
      <Image
        src={imageSrc}
        alt="A project picture"
        style={{ borderRadius: "0.5rem" }}
      />
      <Heading size="md" style={{ marginLeft: "0.5rem", fontWeight: "bolder" }}>
        {title}
      </Heading>
      <Text style={{ marginLeft: "0.5rem" }}>{description}</Text>
      <HStack style={{ marginBottom: "1rem", marginLeft: "0.5rem" }}>
        <Heading size="sm">see more</Heading>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
