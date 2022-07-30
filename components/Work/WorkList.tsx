import React from "react";
import { Heading, Container } from "@chakra-ui/react";
import Work from "./Work";
//TODO: improve image resizing somehow
const WorkList = () => {
  return (
    <Container maxW={"7xl"} p={{ base: 4, md: 12 }}>
      <Heading as="h1" id="Work">
        Work Experiences💼
      </Heading>
      <Work
        title={"Frontend Developer Intern"}
        companyName="ByteDance"
        description={[
          "Utilised TypeScript, React and CSS to fulfil product requirements.",
          "Coordinated with various teams (Product Manager, Backend and QA testing team) to fulfil product requirements.",
          "Contributed to and resolved issues in custom React Hooks library.",
        ]}
        tags={["Frontend"]}
        startDate={new Date("2022-05")}
        endDate={new Date("2022-08")}
        current
        heights={["80px", "150px", "90px", "60px"]}
      />
      <Work
        title={"Frontend Developer Intern"}
        companyName="Lenskart"
        description={[
          "Recreated the original website using React, Next.js, and React Storefront to improve performance and user's experience.",
          "Utilised TypeScript to minimise run-time errors and styled components to reduce code duplication.",
          "Conducted web testing using Cypress to ensure zero bugs were present.",
        ]}
        tags={["Frontend", "Web Testing"]}
        startDate={new Date("2021-05")}
        endDate={new Date("2021-08")}
        heights={["200px", "380px", "285px", "200px"]}
      />
    </Container>
  );
};
export default WorkList;
