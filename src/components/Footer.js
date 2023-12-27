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
    <footer>
      <img src="" alt="Little Lemon Logo" />
      <section>
        <header>Doormat Navigation</header>
        <nav>
          <ul>
            {doormatLinks.map((obj) => (
              <li key={obj.name}>{obj.name}</li>
            ))}
          </ul>
        </nav>
      </section>
      <section>
        <header>Contact</header>
        <nav>
          <ul>
            {contactLinks.map((obj) => (
              <li key={obj.name}>{obj.name}</li>
            ))}
          </ul>
        </nav>
      </section>
      <section>
        <header>Social Media Links</header>
        <nav>
          <ul>
            {socialLinks.map((obj) => (
              <li key={obj.name}>{obj.name}</li>
            ))}
          </ul>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;
