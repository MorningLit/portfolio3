import { Container, Heading, useColorModeValue } from "@chakra-ui/react";
import SkillsSet from "./SkillsSet";

const SkillsSection = () => {
  return (
    <Container maxW={"7xl"} p={12}>
      <Heading
        as={"h1"}
        id={"Skills"}
        color={useColorModeValue("yellow.500", "yellow.300")}
        mb={"4"}
      >
        Skills🛠️
      </Heading>
      <SkillsSet />
    </Container>
  );
};
export default SkillsSection;
