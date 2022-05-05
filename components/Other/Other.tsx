import { Heading, Container } from "@chakra-ui/react";
import OtherList from "./OtherList";

const Other = () => {
  return (
    <Container maxW={"7xl"} p={{ base: 4, md: 12 }}>
      <Heading id="Others">Others❓</Heading>
      <OtherList />
    </Container>
  );
};

export default Other;
