import React from "react";
import { Heading, Container } from "@chakra-ui/react";
import Work from "./Work";
//TODO: improve image resizing somehow
const WorkList = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1" id="Work">
        Work Experiences💼
      </Heading>
      <Work
        title={"Frontend Developer Intern"}
        companyName="ByteDance"
        description={["To be confirmed at the end of my internship!"]}
        tags={["Frontend"]}
        startDate={new Date("2022-05")}
        endDate={new Date("2022-08")}
        current
        heights={["80px", "100px", "120px", "140px"]}
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
        heights={["200px", "300px", "120px", "140px"]}
      />
    </Container>
  );
};
export default WorkList;
