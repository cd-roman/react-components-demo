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
      <p>Footer</p>
      {links.map((link) => (
        <a key={link.title} href={link.url}>
          {link.title}
        </a>
      ))}
    </footer>
  );
};
