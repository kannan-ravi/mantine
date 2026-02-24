import { Anchor, Flex, GridCol, Text } from "@mantine/core";
import { theme } from "../../theme/theme";

export function FooterLinks({ sections }) {
  return sections.map((section, index) => (
    <GridCol key={index} span={{ base: 12, xs: 6, sm: 4, lg: 2.4 }}>
      <Text fw={600} mb={16}>
        {section.title}
      </Text>
      <Flex direction="column">
        {section.links.map((link, linkIndex) => (
          <Anchor
            key={linkIndex}
            c={theme.other.gray}
            underline="none"
            size="xs"
            mb={linkIndex === section.links.length - 1 ? 0 : 8}
            fw={600}
            href={link.href}
          >
            {link.label}
          </Anchor>
        ))}
      </Flex>
    </GridCol>
  ));
}
