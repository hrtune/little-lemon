import { Link } from "react-router-dom";

const Nav = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "#" },
    { name: "Menu", link: "#" },
    { name: "Reservation", link: "/book-a-table" },
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
            <Link to={l.link}>{l.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
