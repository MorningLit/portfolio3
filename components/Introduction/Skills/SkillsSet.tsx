import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import SkillIcon from "./SkillIcon";
import {
  languagesNames,
  webDevelopmentNames,
  otherNames,
} from "../../../utils/constants";

const SkillsSet = () => {
  return (
    <Flex flexDir={"column"}>
      <Text
        fontSize={{ base: "14px", lg: "16px" }}
        color={useColorModeValue("yellow.500", "yellow.300")}
        textTransform={"uppercase"}
        mb={"4"}
      >
        Languages
      </Text>
      <Flex overflow={"auto"}>
        {languagesNames.map((name) => (
          <SkillIcon key={name} name={name} />
        ))}
      </Flex>
      <Text
        fontSize={{ base: "14px", lg: "16px" }}
        color={useColorModeValue("yellow.500", "yellow.300")}
        textTransform={"uppercase"}
        mb={"4"}
      >
        Web Development
      </Text>
      <Flex overflow={"auto"}>
        {webDevelopmentNames.map((name) => (
          <SkillIcon key={name} name={name} />
        ))}
      </Flex>
      <Text
        fontSize={{ base: "14px", lg: "16px" }}
        color={useColorModeValue("yellow.500", "yellow.300")}
        textTransform={"uppercase"}
        mb={"4"}
      >
        Other Technologies
      </Text>
      <Flex overflow={"auto"}>
        {otherNames.map((name) => (
          <SkillIcon key={name} name={name} />
        ))}
      </Flex>
    </Flex>
  );
};
export default SkillsSet;
