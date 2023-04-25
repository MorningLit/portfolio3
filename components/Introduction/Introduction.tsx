import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
  Heading,
  Grid,
  GridItem,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import IntroductionText from "./IntroductionText";
import SocialsSet from "./Socials/SocialsSet";

export default function Intro() {
  return (
    <Container maxW={"7xl"} py={{ base: 4, lg: 12 }}>
      <Grid
        templateColumns={{ base: "repeat(3, 1fr)", lg: "repeat(12,1fr)" }}
        gap={12}
        pt={{ base: 0 }}
      >
        <GridItem colSpan={{ base: 3, lg: 4 }}>
          <Flex flexDir={"column"}>
            <Box
              pos={"relative"}
              h={{ base: "250px", sm: "400px", md: "500px", lg: "600px" }}
            >
              <Image
                alt={"Ambrose's Photo"}
                src={"/Ambrose.jpg"}
                priority
                fill
                style={{ objectFit: "cover", borderRadius: "32px" }}
              />
            </Box>
            <SocialsSet />
          </Flex>
        </GridItem>
        <GridItem colSpan={{ base: 3, lg: 8 }}>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                Ambrose Liew
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                Student📖 | Frontend Engineer💻
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <IntroductionText />
            </Stack>
          </Stack>
        </GridItem>
      </Grid>
    </Container>
  );
}
