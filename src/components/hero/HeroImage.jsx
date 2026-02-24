import { Box } from "@mantine/core";
import Image from "../../assets/hero-cover-1.png";

export function HeroImage() {
  return (
    <Box
      pos="absolute"
      right="0"
      bottom="0"
      visibleFrom="md"
      w={{ md: "45%", lg: "50%" }}
    >
      <img
        src={Image}
        alt="Hero Image"
        style={{
          width: "100%",
          height: "auto",
          maxWidth: 700,
          position: "absolute",
          right: "0",
          bottom: "0",
        }}
      />
    </Box>
  );
}
