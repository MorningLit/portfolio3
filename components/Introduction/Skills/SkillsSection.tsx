import { Container, Heading, useColorModeValue } from "@chakra-ui/react";
import SkillsSet from "./SkillsSet";

const SkillsSection = () => {
  return (
    <Container maxW={"7xl"} py={{ base: 4, lg: 12 }}>
      <Heading as={"h1"} id={"Skills"} mb={"4"}>
        Skills🛠️
      </Heading>
      <SkillsSet />
    </Container>
  );
};
export default SkillsSection;
