import ui from "../ui";
import reviewer from "../assets/reviewer0.jpg";

const RatingCard = ({ rating, image, name, review }) => {
  const cardStyle = {
    width: "220px",
    backgroundColor: ui.color.lightGreen,
  };
  return (
    <article style={cardStyle}>
      <header style={{ margin: "0 0 0 50px" }}>
        <h3>{rating}</h3>
      </header>
      <section style={{ display: "flex", justifyContent: "space-around" }}>
        <img style={{ width: "75px" }} src={image} alt={name} />
        <h4>{name}</h4>
      </section>
      <section style={{ margin: "0 10px 20px 20px" }}>
        <p
          style={{
            color: ui.color.green,
            fontSize: "15px",
          }}
        >
          {review}
        </p>
      </section>
    </article>
  );
};
const Testimonials = () => {
  const ratings = [
    {
      rating: 5,
      image: reviewer,
      name: "John",
      review:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    },
  ];

  const containerStyle = {
    margin: "100px 290px",
  };

  const cardsStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  };

  return (
    <section style={containerStyle}>
      <header style={{ textAlign: "center" }}>
        <h2
          style={{
            fontFamily: ui.fontFamily.header,
            fontSize: ui.fontSize.subTitle,
          }}
        >
          Testimonials
        </h2>
      </header>
      <section style={cardsStyle}>
        <RatingCard {...ratings[0]} />
        <RatingCard {...ratings[0]} />
        <RatingCard {...ratings[0]} />
        <RatingCard {...ratings[0]} />
      </section>
    </section>
  );
};

export default Testimonials;
