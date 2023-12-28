const Nav = () => {
  const links = [
    { name: "Home", link: "#" },
    { name: "About", link: "#" },
    { name: "Menu", link: "#" },
    { name: "Reservation", link: "#" },
    { name: "Order Online", link: "#" },
    { name: "Login", link: "#" },
  ];
  const listStyle = {
    display: "flex",
    listStyleType: "none",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  };
  return (
    <nav style={{ flexGrow: "1" }}>
      <ul style={listStyle}>
        {links.map((l) => (
          <li style={{ fontSize: "16px", margin: "10px 20px" }} key={l.name}>
            {l.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
