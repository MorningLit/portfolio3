import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Link,
  HStack,
} from "@chakra-ui/react";
import { Fragment } from "react";
import Image from "next/image";
import { SocialProps } from "../Introduction/Socials/SocialsSet";

interface ProjectProps {
  title: string;
  description: string[];
  socials: SocialProps[];
}

const Project = ({ title, description, socials }: ProjectProps) => {
  return (
    <Box
      marginTop={{ base: "1", sm: "8" }}
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-between"
    >
      <Box
        display="flex"
        flex={1}
        marginRight="3"
        position="relative"
        alignItems="center"
      >
        <Box
          width={{ base: "100%" }}
          height={{ base: "200px", sm: "320px", lg: "180px" }}
          zIndex="2"
          marginLeft={{ base: "0", sm: "5%" }}
          marginTop="5%"
        >
          <Image
            layout="fill"
            src={`/projectImages/${title}.png`}
            alt={title}
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flex={{ md: 1, lg: 3 }}
        flexDirection="column"
        justifyContent="center"
        marginTop={{ base: "3", sm: "0" }}
        pl={{ base: 0, md: 4 }}
      >
        <Heading marginTop="1">{title}</Heading>
        <Text
          as="p"
          marginTop="2"
          color={useColorModeValue("gray.700", "gray.200")}
          fontSize="lg"
        >
          {description.map((description) => (
            <Fragment key={description}>
              {description}
              <br />
            </Fragment>
          ))}
        </Text>
        <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
          {socials.map(({ name, link }) => {
            return (
              <Link
                href={link}
                key={link}
                target="_blank"
                rel="noreferrer nofollow"
                fontSize={"xl"}
                fontWeight={500}
                textDecoration={"underline"}
              >
                {name}
              </Link>
            );
          })}
        </HStack>
      </Box>
    </Box>
  );
};

export default Project;
