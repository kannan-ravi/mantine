import { Box, Burger, Container, Group, useMatches } from "@mantine/core";
import { theme } from "../../theme/theme";
import { useDisclosure } from "@mantine/hooks";
import { BrandLogo } from "./BrandLogo";
import { NavigationLinks } from "./NavigationLinks";
import { AuthButtons } from "./AuthButtons";
import { MobileNavigation } from "./MobileNavigation";

function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const gapStyle = useMatches({
    sm: 40,
    md: 80,
    lg: 120,
  });

  return (
    <Box
      pos="fixed"
      top={0}
      left={0}
      w="100%"
      style={{ zIndex: 1000 }}
      bg={theme.other.peachLight}
    >
      <header>
        <Container size="xl">
          <Group justify="space-between" p={18} h="100%">
            <Group justify="flex-start" gap={gapStyle}>
              <BrandLogo />
              <NavigationLinks />
            </Group>
            <AuthButtons />

            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="sm"
              size="sm"
              color={theme.other.navy}
              aria-label="Toggle navigation"
            />
          </Group>
        </Container>
      </header>

      <MobileNavigation opened={drawerOpened} onClose={closeDrawer} />
    </Box>
  );
}

export default Header;
