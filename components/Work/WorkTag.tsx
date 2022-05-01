import { HStack, SpaceProps, Tag } from "@chakra-ui/react";
import { Fragment } from "react";

interface WorkTagProps {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
  current?: boolean;
}

const WorkTag = ({ tags, marginTop, current }: WorkTagProps) => {
  return (
    <HStack spacing={2} marginTop={marginTop}>
      {current === true ? (
        <Tag size={"md"} variant={"solid"} colorScheme="yellow">
          Current!
        </Tag>
      ) : (
        <></>
      )}
      {tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export default WorkTag;
