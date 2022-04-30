import { Flex } from "@chakra-ui/react";
import SocialIcon from "./SocialIcon";
import { socialsNames } from "../../../utils/constants";

export interface SocialProps {
  name: string;
  link: string;
}

const SocialsSet = () => {
  return (
    <Flex justifyContent={"space-around"} pt={{ base: 8, lg: 10 }}>
      {socialsNames.map(({ name, link }) => (
        <SocialIcon key={name} name={name} link={link} />
      ))}
    </Flex>
  );
};
export default SocialsSet;
