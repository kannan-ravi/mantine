import { Text } from "@mantine/core";
import { theme } from "../../theme/theme";

export function BrandLogo() {
  return (
    <Text
      size="xl"
      fw={700}
      c={theme.other.navy}
      style={{ cursor: "pointer" }}
    >
      Brandname
    </Text>
  );
}
