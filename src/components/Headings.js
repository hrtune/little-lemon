import ui from "../ui";

const Headings = () => {
  const containerStyle = {
    height: "250px",
    margin: "0 290px",
    padding: "20px 0",
  };

  return (
    <section style={{ backgroundColor: ui.color.green }}>
      <div style={containerStyle}>
        <header>
          <h1
            style={{
              fontSize: ui.fontSize.title,
              color: ui.color.white,
              fontFamily: ui.fontFamily.header,
            }}
          >
            Book a table
          </h1>
          <h2 style={{ color: ui.color.white }}>
            Please, fill in following forms to book a table.
          </h2>
        </header>
      </div>
    </section>
  );
};

export default Headings;
