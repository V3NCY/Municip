import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import GoogleMaps from "../maps/index";

function HomeLayout(props) {
  return <>
    <Navbar />
    {props.children}
    <GoogleMaps />
    <Footer />
  </>
}

export default HomeLayout;