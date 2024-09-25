import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, hyperlink, alt }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack
      align="start"
      shouldWrapChildren={true}
      spacing="0.5rem"
      bg="white"
      borderRadius="0.5rem"
      color="black"
    >
      <Image
        src={imageSrc}
        alt={alt}
        borderRadius="0.5rem"
        width="600px" // Set width
        height="350px" // Set height
        objectFit="cover"
      />

      <Heading size="md" ml="0.5rem" fontWeight="bolder">
        {title}
      </Heading>
      <Text ml="0.5rem">{description}</Text>
      <HStack mb="1rem" ml="0.5rem">
        <a href={hyperlink}>
          <HStack spacing="2">
            <Heading size="sm">See more</Heading>
            <FontAwesomeIcon
              icon={faArrowRight}
              size="1x"
              aria-label="Arrow right icon"
            />
          </HStack>
        </a>
      </HStack>
    </VStack>
  );
};

export default Card;
