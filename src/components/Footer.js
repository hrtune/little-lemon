import cardLogo from "../assets/card_logo.jpg";
import ui from "../ui";

const FooterNav = ({ header, links }) => {
  return (
    <section>
      <header style={{ fontWeight: "bold" }}>{header}</header>
      <nav>
        <ul style={{ listStyle: "none", padding: "0" }}>
          {links.map((obj) => (
            <li style={{ padding: "5px 0" }} key={obj.name}>
              {obj.name}
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

const Footer = () => {
  const doormatLinks = [
    { name: "Home", link: "#" },
    { name: "About", link: "#" },
    { name: "Menu", link: "#" },
    { name: "Reservations", link: "#" },
    { name: "Order Online", link: "#" },
    { name: "Login", link: "#" },
  ];

  const contactLinks = [
    { name: "Address", link: "#" },
    { name: "Phone Number", link: "#" },
    { name: "Email", link: "#" },
  ];

  const socialLinks = [
    { name: "Facebook", link: "#" },
    { name: "Instagram", link: "#" },
  ];

  return (
    <footer style={{ backgroundColor: ui.color.green, padding: "40px 0" }}>
      <section
        style={{
          margin: `0 ${ui.style.sideMargin}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <img
          style={{ width: "120px" }}
          src={cardLogo}
          alt="Little Lemon Logo"
        />
        <FooterNav header="Doormat Navigation" links={doormatLinks} />
        <FooterNav header="Contact" links={contactLinks} />
        <FooterNav header="Social Media Links" links={socialLinks} />
      </section>
    </footer>
  );
};

export default Footer;
