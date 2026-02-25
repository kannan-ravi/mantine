import { Carousel } from "@mantine/carousel";
import { Box, Flex, Paper, Text, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { teamData } from "./TeamConfig";
import { footerData } from "../footer/FooterConfig";
import "@mantine/carousel/styles.css";

function TeamCard({ member }) {
  return (
    <Paper
      maw={340}
      w="100%"
      styles={{
        root: {
          boxShadow: "0px 13px 19px 0px #00000012",
          overflow: "hidden",
          borderRadius: "20px"
        },
      }}
    >
      <Box>
        <img
          src={member.image}
          alt={member.name}
          style={{ width: "100%", display: "block" }}
        />
      </Box>

      <Box py={20}>
        <Text ta="center" fw={700} mb={6} size="md">
          {member.name}
        </Text>
        <Text size="xs" ta="center" c="dimmed">
          {member.profession}
        </Text>
      </Box>

      <Flex gap={12} justify="center" pb={20}>
        {footerData.bottom.social.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.alt}
          >
            <img src={social.icon} width={18} height={18} alt={social.alt} />
          </a>
        ))}
      </Flex>
    </Paper>
  );
}

function TeamCarousel() {
  const theme = useMantineTheme();

  return (
    <Carousel
      mt={{ base: 30, sm: 60, md: 80 }}
      slideSize={{ base: "100%", sm: "50%", md: "33.333%", lg: "25%" }}
      slideGap={{ base: "md", md: "lg" }}
      align="start"
      withControls={false}
      withIndicators={false}
      emblaOptions={{
        align: "start",
        slidesToScroll: 1,
        loop: true,
      }}
      styles={{
        viewport: {
          padding: "16px 16px 40px",
        },
      }}
    >
      {teamData.map((member) => (
        <Carousel.Slide key={member.id}>
          <Flex justify="center">
            <TeamCard member={member} />
          </Flex>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

export default TeamCarousel;
