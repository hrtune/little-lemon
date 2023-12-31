import food from "../assets/food.jpg";
import ui from "../ui";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroStyle = {
    backgroundColor: ui.color.green,
  };
  const containerStyle = {
    height: "350px",
    margin: `0 ${ui.style.sideMargin}`,
    display: "flex",
    flexWrap: "no-wrap",
    justifyContent: "space-between",
  };
  const buttonStyle = {
    backgroundColor: ui.color.yellow,
    border: "none",
    padding: "10px",
    borderRadius: "16px",
    fontWeight: "bold",
  };
  return (
    <section style={heroStyle}>
      <div style={containerStyle}>
        <section style={{ margin: "20px 0" }}>
          <header>
            <h1
              style={{
                margin: "0",
                fontSize: ui.fontSize.title,
                fontFamily: ui.fontFamily.header,
                color: ui.color.yellow,
              }}
            >
              Little Lemon
            </h1>
            <h2
              style={{
                margin: "0",
                fontFamily: ui.fontFamily.header,
                fontSize: ui.fontSize.subTitle,
                color: ui.color.white,
              }}
            >
              Chicago
            </h2>
          </header>
          <section
            style={{
              width: "30vw",
              fontSize: ui.fontSize.leadText,
              color: ui.color.white,
            }}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link to="/book-a-table">
              <button style={buttonStyle}>Reserve a Table</button>
            </Link>
          </section>
        </section>
        <aside>
          <img
            style={{
              float: "right",
              maxWidth: "50%",
              height: "auto",
              width: "auto",
              margin: "20px 0 0 0",
              borderRadius: "16px",
            }}
            src={food}
            alt="Food"
          />
        </aside>
      </div>
    </section>
  );
};

export default Hero;
