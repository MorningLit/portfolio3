import React from "react";
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import Image from "next/image";
import WorkTag from "./WorkTag";
import WorkDetail from "./WorkDetail";
//TODO: improve image resizing somehow
const WorkList = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1">Past Work Experiences</Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%" }}
            height={{ base: "200px", sm: "320px", lg: "100%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Image layout="fill" src={"/lenskart.jpg"} alt="Lenskart" />
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex={2}
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <WorkTag tags={["Frontend", "Web Testing"]} />
          <Heading marginTop="1">Frontend Developer Intern</Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            Recreated the original website using React, Next.js, and React
            Storefront to improve performance and user's experience.
            <br />
            Utilised TypeScript to minimise run-time errors and styled
            components to reduce code duplication.
            <br />
            Conducted web testing using Cypress to ensure zero bugs were
            present.
          </Text>
          <WorkDetail
            name="Lenskart"
            startDate={new Date("2021-05")}
            endDate={new Date("2021-08")}
          />
        </Box>
      </Box>
    </Container>
  );
};
export default WorkList;
