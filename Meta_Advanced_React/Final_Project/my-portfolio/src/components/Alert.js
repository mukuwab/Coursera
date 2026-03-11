import { Box, Slide, Text, Center } from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { useEffect, useState } from "react";

function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const [show, setShow] = useState(false);
  const isSuccess = type === "success";

  // Sync local show state with isOpen from context
  useEffect(() => {
    if (isOpen) {
      setShow(true);

      // Automatically close after 3 seconds
      const timer = setTimeout(() => {
        setShow(false);
        onClose(); // make sure context updates
      }, 3000);//3 secs

      return () => clearTimeout(timer);
    } 
    
    else {
      setShow(false);
    }
  }, [isOpen, onClose]);

  if (!isOpen && !show) return null; // don't render anything if closed

  return (
    <Slide direction="top" in={show} style={{ zIndex: 1000 }}>
      <Center width="100%" mt={4} pointerEvents="none">
        <Box
          maxWidth="400px"
          width="auto"
          backgroundColor={isSuccess ? "#81C784" : "#FF8A65"}
          color="white"
          p={4}
          borderRadius="md"
          boxShadow="lg"
          pointerEvents="auto"
        >
          <Text fontWeight="bold" fontSize="lg">
            {isSuccess ? "All good!" : "Oops!"}
          </Text>
          <Text fontSize="sm" mt={1}>
            {isSuccess
              ? `Thanks for your submission ${message}, we will get back to you shortly!`
              : "Something went wrong."}
          </Text>
        </Box>
      </Center>
    </Slide>
  );
}

export default Alert;