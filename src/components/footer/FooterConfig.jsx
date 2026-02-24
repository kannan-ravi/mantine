import MailIcon from "../../assets/email.svg";
import LocationIcon from "../../assets/location.svg";
import ContactIcon from "../../assets/contact.svg";
import FacebookIcon from "../../assets/facebook.svg";
import TwitterIcon from "../../assets/twitter.svg";
import InstagramIcon from "../../assets/instagram.svg";

export const footerData = {
  sections: [
    {
      title: "Company Info",
      links: [
        { label: "About Us", href: "#" },
        { label: "Carrier", href: "#" },
        { label: "We are hiring", href: "#" },
        { label: "Blog", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "About Us", href: "#" },
        { label: "Carrier", href: "#" },
        { label: "We are hiring", href: "#" },
        { label: "Blog", href: "#" },
      ],
    },
    {
      title: "Features",
      links: [
        { label: "Business Marketing", href: "#" },
        { label: "User Analytic", href: "#" },
        { label: "Live Chat", href: "#" },
        { label: "Unlimited Support", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "IOS & Android", href: "#" },
        { label: "Watch a Demo", href: "#" },
        { label: "Customers", href: "#" },
        { label: "API", href: "#" },
      ],
    },
  ],
  contact: {
    title: "Get In Touch",
    items: [
      {
        icon: ContactIcon,
        label: "(480) 555-0103",
        href: "tel:4805550103",
      },
      {
        icon: LocationIcon,
        label: "4517 Washington Ave. Manchester, Kentucky 39495",
        href: "#",
      },
      {
        icon: MailIcon,
        label: "debra.holt@example.com",
        href: "mailto:debra.holt@example.com",
      },
    ],
  },
  bottom: {
    copyright: "Made With Love By Figmaland All Right Reserved",
    social: [
      { icon: FacebookIcon, alt: "Facebook", href: "#" },
      { icon: TwitterIcon, alt: "Twitter", href: "#" },
      { icon: InstagramIcon, alt: "Instagram", href: "#" },
    ],
  },
};
