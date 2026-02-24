import { Text, Title } from "@mantine/core";
import { theme } from "../../theme/theme";

export function HeroText() {
  return (
    <>
      <Text c={theme.other.green} mb={{ base: 16, md: 24 }}>
        Welcome
      </Text>
      <Title
        order={1}
        c={theme.other.navy}
        mb={{ base: 32, md: 40 }}
        fz={{ base: 36, md: 48, lg: 58 }}
      >
        Best Learning <br /> Opportunities
      </Title>
      <Text
        c={theme.other.gray}
        fw={500}
        fz={{ base: 16, md: 18, lg: 20 }}
      >
        Our goal is to make online <br /> education work for everyone
      </Text>
    </>
  );
}
