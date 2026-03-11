//imports
import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({title, description, imageSrc}) => {
  return (
    <Box
      borderRadius="1rem"
      overflow="hidden"
      boxShadow="1rem"
      backgroundColor="rgb(255, 255, 255)"
      color="#502e4b"
      maxW="406px"
      w="100%"
    >
      {/*Project Thumbnail*/}
      <Image 
        src={imageSrc} 
        alt={title} 
        objectFit="cover" 
        width="100%" 
        height="207px" />

      {/*Content/Body*/}
      <VStack 
        spacing={2.5} 
        align="start" 
        p={4}>
        <Heading 
            fontSize="1.2rem"
            fontFamily="Inter"
            color="#a43b8a"
            >
          {title}
        </Heading>
        <Text 
            fontSize="0.7rem"
            fontFamily="Inter"
            >
             {description}
        </Text>
        <HStack spacing={0.3}>
          <Text 
            fontWeight="4rem" 
            color="pink.500" 
            fontSize="0.86rem"
            fontFamily="Inter">
            View Project
          </Text>
          <FontAwesomeIcon 
            icon={faArrowRight} 
            fontSize="0.7em" 
            color="#d62ba9"/>
        </HStack>
      </VStack> 
    </Box>
  );
};

export default Card;