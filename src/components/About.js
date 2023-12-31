import ui from "../ui";
import chef from "../assets/chef.jpg";

const About = () => {
  return (
    <section
      style={{
        margin: `50px ${ui.style.sideMargin}`,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <section style={{ width: "500px" }}>
        <header style={{ fontFamily: ui.fontFamily.header }}>
          <h2 style={{ fontSize: ui.fontSize.subTitle }}>Little Lemon</h2>
          <h3 style={{ fontSize: ui.fontSize.leadText }}>Chicago</h3>
        </header>
        <section>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit; Aenean
            commodo ligula eget dolor.
          </p>
        </section>
      </section>
      <aside style={{}}>
        <img style={{ width: "500px" }} src={chef} alt="Image1" />
      </aside>
    </section>
  );
};

export default About;
