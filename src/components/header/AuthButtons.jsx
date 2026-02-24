import { Button, Group } from "@mantine/core";
import { theme } from "../../theme/theme";
import { IconArrowNarrowRight } from "@tabler/icons-react";

export function AuthButtons() {
  const loginButtonStyles = {
    color: theme.other.green,
  };

  return (
    <Group visibleFrom="sm" gap={12}>
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
    </Group>
  );
}
