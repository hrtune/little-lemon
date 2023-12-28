import food from "../assets/food.jpg";
import ui from "../ui";

const Hero = () => {
  return (
    <section>
      <section>
        <header>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
        </header>
        <section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Reserve a Table</button>
        </section>
      </section>
      <aside>
        <img width="320px" src={food} alt="Food" />
      </aside>
    </section>
  );
};

export default Hero;
