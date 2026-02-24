import { Box, Container, Flex, Text } from "@mantine/core";
import { theme } from "../../theme/theme";

export function FooterBottom({ bottom }) {
  return (
    <Box bg="#FAFAFA">
      <Container size="xl">
        <Flex
          py={{ base: 26 }}
          px={{ sm: 16 }}
          direction={{ base: "column", sm: "row" }}
          align={{ base: "center" }}
          justify={{ base: "space-between" }}
          gap={16}
        >
          <Text
            ta={{ base: "center" }}
            size="xs"
            c={theme.other.gray}
            fw={600}
          >
            {bottom.copyright}
          </Text>
          <Flex gap={16}>
            {bottom.social.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.alt}
              >
                <img src={social.icon} width={20} height={20} alt={social.alt} />
              </a>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
