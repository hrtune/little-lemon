const Nav = () => {
  const links = [
    { name: "HOME", link: "#" },
    { name: "ABOUT", link: "#" },
    { name: "MENU", link: "#" },
    { name: "RESERVATION", link: "#" },
    { name: "ORDER ONLINE", link: "#" },
    { name: "LOGIN", link: "#" },
  ];
  return (
    <nav>
      <ul>
        {links.map((l) => (
          <li key={l.name}>{l.name}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
