import { Container, Heading, useColorModeValue } from "@chakra-ui/react";
import SkillsSet from "./SkillsSet";

const SkillsSection = () => {
  return (
    <div>
      <Heading as={"h1"} id={"Skills"} mb={"4"}>
        Skills🛠️
      </Heading>
      <SkillsSet />
    </div>
  );
};
export default SkillsSection;
