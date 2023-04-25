import React from "react";
import { Heading, Container } from "@chakra-ui/react";
import Work from "./Work";
const WorkList = () => {
  return (
    <Container maxW={"7xl"} py={{ base: 4, md: 12 }}>
      <Heading as="h1" id="Work">
        Work Experiences💼
      </Heading>
      <Work
        title={"Frontend Developer Intern"}
        companyName="ByteDance"
        description={[
          "Utilised TypeScript, React, CSS and coordinated with various teams to fulfil product requirements.",
          "Designed an interactive graph application using React-flow-renderer.",
          "Contributed to and resolved issues in internal custom React Hooks library.",
        ]}
        tags={["Frontend"]}
        startDate={new Date("2022-05")}
        endDate={new Date("2022-10")}
        current
        heights={["80px", "150px", "90px", "60px"]}
      />
      <Work
        title={"Frontend Developer Intern"}
        companyName="Lenskart"
        description={[
          "Redesigned the original website, https://lenskart.sg/, using React, Next.js and React Storefront to improve the performance and user experience of the website.",
          "Performed web application testing using Cypress.io to discover and correct bugs.",
          "Incorporated TypeScript to minimise run-time errors and Styled-Components to reduce code duplication.",
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
