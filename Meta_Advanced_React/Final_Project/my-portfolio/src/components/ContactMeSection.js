import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string().required("Required"),
      comment: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      // Call submit helper from useSubmit hook
      await submit(values);

      // Reset handled in useEffect after response
      resetForm();
    },
  });

  // Show alert when response changes
  useEffect(() => {
    if (!response) return;

    if (response.type === "success") {
      onOpen({
        title: "Success",
        description: `Thanks ${formik.values.firstName}, your message has been sent!`,
        status: "success",
      });
      formik.resetForm();
    } else if (response.type === "error") {
      onOpen({
        title: "Error",
        description: response.message || "Something went wrong",
        status: "error",
      });
    }
  }, [response, onOpen]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#731185"
      py={16}
      spacing={8}
      width="100%"
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%" bg="white" color="black">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              {/* Name */}
              <FormControl
                isInvalid={formik.touched.firstName && !!formik.errors.firstName}
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input id="firstName" {...formik.getFieldProps("firstName")} />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              {/* Email */}
              <FormControl
                isInvalid={formik.touched.email && !!formik.errors.email}
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input id="email" type="email" {...formik.getFieldProps("email")} />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              {/* Type of enquiry */}
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" {...formik.getFieldProps("type")}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">Open source consultancy session</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>

              {/* Message */}
              <FormControl
                isInvalid={formik.touched.comment && !!formik.errors.comment}
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>

              {/* Submit Button */}
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                isLoading={isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;