import React from "react";
import { Heading, Container } from "@chakra-ui/react";
import Work from "./Work";
//TODO: improve image resizing somehow
const WorkList = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1">Past Work Experiences</Heading>
      <Work
        title={"Frontend Developer Intern"}
        companyName="ByteDance"
        description={["To be confirmed..."]}
        tags={["Frontend"]}
        startDate={new Date("2022-05")}
        endDate={new Date("2022-08")}
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
      />
    </Container>
  );
};
export default WorkList;
