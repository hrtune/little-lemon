import food from "../assets/food.jpg";
const Hero = () => {
  return (
    <>
      <section>
        <header>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
        </header>
        <content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Reserve a Table</button>
        </content>
      </section>
      <img width="320px" src={food} alt="Food" />
    </>
  );
};

export default Hero;
