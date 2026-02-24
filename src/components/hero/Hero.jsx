import { Box, Container, Flex } from "@mantine/core";
import { theme } from "../../theme/theme";
import { HeroText } from "./HeroText";
import { HeroButtons } from "./HeroButtons";
import { HeroImage } from "./HeroImage";

function Hero() {
  return (
    <Box
      bg={theme.other.peachLight}
      component="section"
      mt={{ base: 69, lg: 70 }}
      pb={80}
      pos="relative"
      display="flex"
      h="calc(100vh - 77px)"
    >
      <Container size="xl" w="100%" h="100%">
        <Flex
          w="100%"
          justify="flex-start"
          h="100%"
          align="center"
          p={{ base: 6, sm: 16, md: 20, lg: 24 }}
        >
          <Box w={{ base: "100%", lg: "50%" }}>
            <HeroText />
            <HeroButtons />
          </Box>
        </Flex>
      </Container>

      <HeroImage />
    </Box>
  );
}

export default Hero;
