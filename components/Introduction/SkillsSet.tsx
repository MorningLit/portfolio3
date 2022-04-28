import { SimpleGrid, List, ListItem } from "@chakra-ui/react";

const SkillsSet = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <List spacing={2}>
        <ListItem>Chronograph</ListItem>
        <ListItem>Master Chronometer Certified</ListItem>{" "}
        <ListItem>Tachymeter</ListItem>
      </List>
      <List spacing={2}>
        <ListItem>Anti‑magnetic</ListItem>
        <ListItem>Chronometer</ListItem>
        <ListItem>Small seconds</ListItem>
      </List>
    </SimpleGrid>
  );
};
export default SkillsSet;
