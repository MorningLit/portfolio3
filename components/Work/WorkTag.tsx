import { HStack, SpaceProps, Tag } from "@chakra-ui/react";

interface WorkTagProps {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
  current?: boolean;
}

const WorkTag = ({ tags, marginTop, current }: WorkTagProps) => {
  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag, index) => {
        if (index == 0 && current === true)
          return (
            <>
              <Tag size={"md"} variant={"solid"} colorScheme="yellow" key={tag}>
                Current!
              </Tag>
              <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
                {tag}
              </Tag>
            </>
          );
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
