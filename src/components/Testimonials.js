const RatingCard = ({ rating, image, name, review }) => {
  return (
    <article>
      <header>
        <h3>{rating}</h3>
      </header>
      <section>
        <img src={image} alt={name} />
        <h4>{name}</h4>
      </section>
      <section>
        <p>{review}</p>
      </section>
    </article>
  );
};
const Testimonials = () => {
  const ratings = [
    {
      rating: 5,
      image: "",
      name: "John",
      review:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    },
  ];
  return (
    <section>
      <header>
        <h2>Testimonials</h2>
      </header>
      <section>
        <RatingCard {...ratings[0]} />
      </section>
    </section>
  );
};

export default Testimonials;
