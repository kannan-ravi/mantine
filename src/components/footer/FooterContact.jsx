import { Anchor, Flex, GridCol, Text } from "@mantine/core";
import { theme } from "../../theme/theme";

export function FooterContact({ contact }) {
  return (
    <GridCol span={{ base: 12, xs: 6, sm: 4, lg: 2.4 }}>
      <Text fw={600} mb={16}>
        {contact.title}
      </Text>
      <Flex direction="column" gap={8}>
        {contact.items.map((item, index) => (
          <Flex key={index} align="center" gap={8}>
            <img src={item.icon} width={20} height={20} alt={item.label} />
            <Anchor
              c={theme.other.gray}
              underline="none"
              size="xs"
              fw={600}
              href={item.href}
            >
              {item.label}
            </Anchor>
          </Flex>
        ))}
      </Flex>
    </GridCol>
  );
}
