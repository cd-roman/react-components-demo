interface NavLink {
  title: string;
}

export const NavLink = ({ title }: NavLink) => {
  return <a href="/">{title}</a>;
};
