export const JOIN_US_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLScv_6fRDRiEsQXGr45T3pJVbA-kop2gEB3Dhkte1DnF55Vwcg/viewform?usp=dialog";

export const PARTNER_FORM = "https://forms.gle/bStA2ruSWQuLZ3sK9";

export const INSTAGRAM_URL = "https://www.instagram.com/vidhata.np/";

export const CONTACT_EMAIL = "contact.vidhata@gmail.com";

export const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Programs", path: "/programs" },
  { label: "Partners", path: "/partners" },
  { label: "Recognitions", path: "/recognitions" },
  { label: "Our Team", path: "/team" },
  { label: "Contact", path: "/contact" },
] as const;

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: INSTAGRAM_URL,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61577618310013",
  },
  {
    label: "LinkedIn",
    href: "https://np.linkedin.com/company/vidhata1",
  },
  {
    label: "Email",
    href: `mailto:${CONTACT_EMAIL}`,
  },
] as const;
