import { Box, Container, Grid } from "@mantine/core";
import { FooterLinks } from "./FooterLinks";
import { FooterContact } from "./FooterContact";
import { FooterBottom } from "./FooterBottom";
import { footerData } from "./FooterConfig";

function Footer() {
  return (
    <footer>
      <Box py={{ base: 36, sm: 42, md: 56 }} px={{ sm: 20 }}>
        <Container size="xl">
          <Grid gutter={{ base: 32, md: 40 }}>
            <FooterLinks sections={footerData.sections} />
            <FooterContact contact={footerData.contact} />
          </Grid>
        </Container>
      </Box>
      <FooterBottom bottom={footerData.bottom} />
    </footer>
  );
}

export default Footer;
