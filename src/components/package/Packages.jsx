import { Anchor, Box, Card, Container, Flex, Text, Title } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { theme } from "../../theme/theme";
import { packageCardData } from "./PackageConfig";
import PackageCard from "./PackageCard";

function Packages() {
  return (
    <Box component="section">
      <Box py={{ base: 52, sm: 74, md: 84, lg: 102 }}>
        <Container size="xl">
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: 50, lg: 40 }}
            align="flex-start"
          >
            <Box w={{ base: "100%", lg: "50%" }}>
              <Box bg="red" w={60} h={4} />

              <Title order={2} my={40} c={theme.other.navy}>
                Affordable Packages
              </Title>

              <Text c={theme.other.gray} mb={30} fw={500}>
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </Text>

              <Anchor
                c={theme.other.green}
                underline="never"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontWeight: 600,
                }}
                className="packages-learnmore"
              >
                Learn More
                <IconChevronRight
                  size={18}
                  style={{ transition: "all 0.3s ease" }}
                />
              </Anchor>
            </Box>

            <Flex
              direction={{ base: "column", sm: "row" }}
              gap={30}
              w={{ base: "100%", lg: "50%" }}
            >
              {packageCardData.map((pckg) => (
                <PackageCard pckg={pckg} key={pckg.id} />
              ))}
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

export default Packages;
