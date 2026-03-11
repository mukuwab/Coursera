import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      borderRadius="md"
      overflow="hidden"
      boxShadow="lg"
      backgroundColor="white"
      color="black"
      maxW="400px"
      w="100%"
    >
      {/* Project image */}
      <Image src={imageSrc} alt={title} objectFit="cover" width="100%" height="200px" />

      {/* Content */}
      <VStack spacing={3} align="start" p={4}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text fontSize="sm">{description}</Text>
        <HStack spacing={2}>
          <Text fontWeight="bold" color="blue.500">
            View Project
          </Text>
          <FontAwesomeIcon icon={faArrowRight} />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;