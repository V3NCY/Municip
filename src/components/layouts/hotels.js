import Navbar from "../navbar/Navbar";

function HotelLayout(props) {
  return (
    <>
      <Navbar />
      <h1 className="p-3 ml-5">Хотели</h1>
      {props.children}
    </>
  );
}

export default HotelLayout;
