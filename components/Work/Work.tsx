import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import WorkTag from "./WorkTag";
import WorkDetail from "./WorkDetail";
import { Fragment } from "react";

interface WorkProps {
  title: string;
  companyName: string;
  description: string[];
  tags: string[];
  startDate: Date;
  endDate: Date;
  current?: boolean;
}

const Work = ({
  title,
  companyName,
  description,
  tags,
  startDate,
  endDate,
  current = false,
}: WorkProps) => {
  return (
    <Box
      marginTop={{ base: "1", sm: "8" }}
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-between"
    >
      <Box
        display="flex"
        flex="1"
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
          <Image layout="fill" src={`/${companyName}.jpg`} alt={companyName} />
        </Box>
        <Box zIndex="1" width="100%" position="absolute" height="100%">
          <Box
            bgGradient={useColorModeValue(
              "radial(orange.600 1px, transparent 1px)",
              "radial(orange.300 1px, transparent 1px)"
            )}
            backgroundSize="20px 20px"
            opacity="0.4"
            height="100%"
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flex={2}
        flexDirection="column"
        justifyContent="center"
        marginTop={{ base: "3", sm: "0" }}
      >
        <WorkTag tags={tags} current={current} />
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
        <WorkDetail
          name={companyName}
          startDate={startDate}
          endDate={endDate}
        />
      </Box>
    </Box>
  );
};
export default Work;
