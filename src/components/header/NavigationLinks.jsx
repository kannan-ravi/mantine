import { Anchor, Group, useMantineTheme } from "@mantine/core";

export function NavigationLinks() {
  const mantineTheme = useMantineTheme();

  const navItemStyles = {
    color: mantineTheme.other.gray,
    fontWeight: 500,
    transition: "color 0.2s ease",
    cursor: "pointer",
    textDecoration: "none",
  };

  const navigationItems = [
    { label: "Home", href: "#home" },
    { label: "Product", href: "#product" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <Group gap={22} visibleFrom="sm">
      {navigationItems.map((item) => (
        <Anchor
          key={item.label}
          href={item.href}
          style={navItemStyles}
        >
          {item.label}
        </Anchor>
      ))}
    </Group>
  );
}
