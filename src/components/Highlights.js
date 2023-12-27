import greekSalad from "../assets/greek_salad.jpg";

const MenuCard = ({ image, title, price, description }) => {
  return (
    <section>
      <img width="200px" src={image} alt={title} />
      <header>
        <h3>{title}</h3>
        <h4>$ {price}</h4>
      </header>
      <content>
        <p>{description}</p>
      </content>
      <footer>
        <p>Order a delivery</p>
      </footer>
    </section>
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
  return (
    <section>
      <header>
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
      </header>
      <content>
        <MenuCard {...menu[0]} />
        <MenuCard {...menu[0]} />
        <MenuCard {...menu[0]} />
      </content>
    </section>
  );
};

export default Highlights;
