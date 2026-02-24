import {
  Anchor,
  Button,
  Drawer,
  Divider,
  Flex,
  ScrollArea,
  Text,
} from "@mantine/core";
import { theme } from "../../theme/theme";
import { IconArrowNarrowRight } from "@tabler/icons-react";

export function MobileNavigation({ opened, onClose }) {
  const mobileNavItemStyles = {
    borderRadius: 8,
    width: "100%",
    padding: "8px 8px 8px 8px",
    underline: "none",
    transition: "background-color 0.2s ease",
    textAlign: "left",
    textDecoration: "none",
  };

  const loginButtonStyles = {
    color: theme.other.green,
  };

  const navigationItems = [
    { label: "Home", href: "#home" },
    { label: "Product", href: "#product" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      size="100%"
      padding="md"
      title="BrandName"
      hiddenFrom="sm"
      zIndex={10000}
      position="right"
    >
      <ScrollArea h="calc(100vh - 80px)" mx="-md">
        <Divider />

        <Flex direction="column" gap={16} p="md">
          {navigationItems.map((item) => (
            <Anchor
              key={item.label}
              href={item.href}
              style={mobileNavItemStyles}
              onClick={onClose}
            >
              <Text size="md" fw={500} c={theme.other.navy}>
                {item.label}
              </Text>
            </Anchor>
          ))}
        </Flex>

        <Flex gap={12} p="md">
          <Button
            variant="transparent"
            color={theme.other.navy}
            size="sm"
            style={loginButtonStyles}
          >
            Login
          </Button>
          <Button
            bg={theme.other.green}
            c="white"
            size="sm"
            rightSection={<IconArrowNarrowRight size={16} />}
          >
            JOIN US
          </Button>
        </Flex>
      </ScrollArea>
    </Drawer>
  );
}
