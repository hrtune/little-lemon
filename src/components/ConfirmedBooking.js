import Footer from "./Footer";
import ui from "../ui";
const ConfirmedBooking = () => {
  const style = {
    backgroundColor: ui.color.lightGreen,
    height: "500px",
    padding: "0 290px",
  };
  return (
    <>
      <section style={style}>
        <h1
          style={{
            padding: "50px 0",
            fontFamily: ui.fontFamily.header,
            fontSize: ui.fontSize.subTitle,
          }}
        >
          Confirmed Your Reservation
        </h1>
        <h2>Thank you.</h2>
      </section>
      <Footer />;
    </>
  );
};

export default ConfirmedBooking;
