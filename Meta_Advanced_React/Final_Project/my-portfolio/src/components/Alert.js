import { Box, Slide, Text, Center } from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { useEffect, useState } from "react";

/**
 * This is a global component that uses context to display a global alert message.
 */

function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const [show, setShow] = useState(false);
  const isSuccess = type === "success";

  // match the 'show' state with 'isOpen' context
  useEffect(() => {
    if (isOpen) {
      setShow(true);

      // close after 3 secs
      const timer = setTimeout(() => {
        setShow(false);
        onClose();//update context
      }, 3000);//3 secs

      return () => clearTimeout(timer);
    } 
    
    else {
      setShow(false);
    }
  }, [isOpen, onClose]);

  if (!isOpen && !show) return null; //end if closed

  return (
    <Slide direction="top" in={show} style={{ zIndex: 1000 }}>
      <Center width="100%" marginTop={4} pointerEvents="none">
        <Box
          maxWidth="19rem"
          width="auto"
          backgroundColor={isSuccess ? "#7de282" : "#e07b5c"}
          color="#f1f1f1"
          padding={3}
          borderRadius="0.5rem"
          boxShadow="0.5rem"
          pointerEvents="auto"
        >
          <Text fontWeight="1rem" fontSize="1rem">
            {isSuccess ? "All good!" : "Oops!"}
          </Text>
          <Text fontSize="1rem" marginTop={2}>
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