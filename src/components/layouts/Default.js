import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
function MainLayout (props) {
    return <>
  <Navbar/>
  <div className="container mt-5">
    {props.children}
  </div>
  <Footer/>
  </>
}

export default MainLayout;