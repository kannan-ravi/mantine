import { Box, Container, Text, Title } from "@mantine/core";
import { theme } from "../../theme/theme";
import TeamCarousel from "./TeamCarousel";

function Teams() {
  return (
    <Box component="section">
      <Box py={{ base: 52, sm: 74, md: 84, lg: 102 }}>
        <Container size="xl">
          <Text c={theme.other.green} mb={12} size="sm" fw={600} ta="start">
            Team
          </Text>
          <Title order={3} mb={20} fw={700}>
            Get Quality Education
          </Title>
          <Text mb={40} c={theme.other.gray} size="sm" lh={1.6} ta="start">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </Text>

          <TeamCarousel />
        </Container>
      </Box>
    </Box>
  );
}

export default Teams;
