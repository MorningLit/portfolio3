import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  Grid,
  GridItem,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react";
import IntroductionText from "./IntroductionText";
import SkillsSet from "./SkillsSet";

export default function Intro() {
  return (
    <Container maxW={"7xl"}>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} py={{ base: 18, md: 24 }}>
        <GridItem colSpan={{ base: 3, lg: 1 }}>
          <Image
            rounded={"lg"}
            alt={"Ambrose's Photo"}
            src={"/Ambrose.jpg"}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", lg: "500px" }}
          />
        </GridItem>
        <GridItem colSpan={{ base: 3, lg: 2 }}>
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
                Frontend Engineer
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
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Skills
                </Text>
                <SkillsSet />
              </Box>
            </Stack>
          </Stack>
        </GridItem>
      </Grid>
    </Container>
  );
}
