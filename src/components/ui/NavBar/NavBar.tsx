import { NavLink } from "../NavLink";

interface NavLinkProps {
  title: string;
}

interface NavBarProps {
  links: NavLinkProps[];
}

export const NavBar = ({ links }: NavBarProps) => {
  return (
    <nav>
      {links.map((link) => (
        <NavLink key={link.title} title={link.title} />
      ))}
    </nav>
  );
};
