import { getCurrentYear } from "../../utils/dateUtils";

type FooterLink = {
  title: string;
  url: string;
};

interface Footer {
  links: FooterLink[];
}

export const Footer = ({ links }: Footer) => {
  return (
    <footer>
      {links.map((link) => (
        <a key={link.title} href={link.url}>
          {link.title}
        </a>
      ))}
      <p>© {getCurrentYear()} UI Components Showcase</p>
    </footer>
  );
};
