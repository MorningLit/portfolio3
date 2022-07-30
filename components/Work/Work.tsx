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
  heights: string[];
}

const Work = ({
  title,
  companyName,
  description,
  tags,
  startDate,
  endDate,
  current = false,
  heights,
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
        width="100%"
        height="auto"
        flex={1}
        alignItems="center"
      >
        <Box
          width={{ base: "100%" }}
          height={{
            base: heights[0],
            sm: heights[1],
            md: heights[2],
            lg: heights[3],
          }}
          marginRight="3"
          position="relative"
        >
          <Image layout="fill" src={`/${companyName}.jpg`} alt={companyName} />
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
