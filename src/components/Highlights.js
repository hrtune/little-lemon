import greekSalad from "../assets/greek_salad.jpg";
import ui from "../ui";

const MenuCard = ({ image, title, price, description }) => {
  const rad = ui.style.borderRadius;
  const borderRadius = `${rad} ${rad} 0 0`;
  const cardStyle = {
    width: "300px",
    backgroundColor: ui.color.lightGreen,
    borderRadius,
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <article style={cardStyle}>
      <img style={{ width: "100%", borderRadius }} src={image} alt={title} />
      <section style={{ margin: "0 20px" }}>
        <header style={headerStyle}>
          <h3 style={{ fontFamily: ui.fontFamily.header }}>{title}</h3>
          <h4 style={{ color: ui.color.pink }}>$ {price}</h4>
        </header>
        <section>
          <p style={{ color: ui.color.green }}>{description}</p>
        </section>
        <footer>
          <p style={{ fontWeight: "bold" }}>Order a delivery</p>
        </footer>
      </section>
    </article>
  );
};

const Highlights = () => {
  const menu = [
    {
      image: greekSalad,
      title: "Greek Salad",
      price: 12.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  const hlStyle = {
    margin: "250px 290px 0",
    display: "flex",
    flexDirection: "column",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const cardsStyle = {
    display: "flex",
    margin: "50px 0 0 0",
    justifyContent: "space-between",
  };

  return (
    <section style={hlStyle}>
      <header style={headerStyle}>
        <h2
          style={{
            margin: "0",
            fontFamily: ui.fontFamily.header,
            fontSize: ui.fontSize.subTitle,
          }}
        >
          This weeks specials!
        </h2>
        <button
          style={{
            border: "none",
            height: "50px",
            padding: "0 20px",
            fontWeight: "bold",
            backgroundColor: ui.color.yellow,
            borderRadius: ui.style.borderRadius,
          }}
        >
          Online Menu
        </button>
      </header>
      <section style={cardsStyle}>
        <MenuCard {...menu[0]} />
        <MenuCard {...menu[0]} />
        <MenuCard {...menu[0]} />
      </section>
    </section>
  );
};

export default Highlights;
