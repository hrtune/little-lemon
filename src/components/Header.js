import Nav from "./Nav";
import logo from "../assets/logo.svg";
const Header = () => {
  const headerStyle = {
    margin: "12px 290px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };
  return (
    <header style={headerStyle}>
      <img src={logo} alt="Little Lemon Logo" />
      <Nav />
    </header>
  );
};

export default Header;
