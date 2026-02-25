import { Box, Card, Text } from "@mantine/core";
import { theme } from "../../theme/theme";

function PackageCard({ pckg }) {
  return (
    <Card shadow="md" radius="lg" p="xl" w={{ base: "100%", sm: "50%" }}>
      <Box
        bg={theme.other.green}
        p={14}
        mb={24}
        style={{ borderRadius: 8 }}
        w="fit-content"
      >
        <img src={pckg.image} alt="Black Board Icon" width={28} height={28} />
      </Box>

      <Text fw={600} mb={12}>
        {pckg.name}
      </Text>

      <Box bg="red" w={40} h={3} mb={16} />

      <Text c={theme.other.gray} size="sm">
        {pckg.text}
      </Text>
    </Card>
  );
}

export default PackageCard;
