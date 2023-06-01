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
        mb={"4"}
        fontWeight={"bold"}
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
        mb={"4"}
        fontWeight={"bold"}
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
        mb={"4"}
        fontWeight={"bold"}
      >
        Others
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
