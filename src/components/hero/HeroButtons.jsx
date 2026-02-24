import { Button, Flex } from "@mantine/core";
import { theme } from "../../theme/theme";

export function HeroButtons() {
  return (
    <Flex gap={16} mt={{ base: 20, md: 28 }}>
      <Button bg={theme.other.green} variant="filled" size="md">
        Join Us
      </Button>
      <Button color={theme.other.green} variant="outline" size="md">
        Learn More
      </Button>
    </Flex>
  );
}
