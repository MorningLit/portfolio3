import { HStack, Text } from "@chakra-ui/react";
import { months } from "../../utils/constants";

interface WorkDetailProps {
  startDate: Date;
  endDate: Date;
  name: string;
}

const WorkDetail = ({ startDate, endDate, name }: WorkDetailProps) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Text fontSize={"lg"} fontWeight="500">
        {name}
      </Text>
      <Text>—</Text>
      <Text>
        {months[startDate.getUTCMonth()]} {startDate.getFullYear()} to{" "}
        {months[endDate.getMonth()]} {endDate.getFullYear()}
      </Text>
    </HStack>
  );
};

export default WorkDetail;
