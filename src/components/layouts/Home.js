import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";

function HomeLayout (props) {
    return <>
    <Navbar/>
    {props.children}
    <Footer/>
  </>
}

export default HomeLayout;