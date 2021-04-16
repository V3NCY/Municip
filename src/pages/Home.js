// import Carousel from "../components/carousel/carousel";
// import Calendar from "../components/calendar/calendar";
import BackgroundVideo from "../components/video/background";
import Hero from "../components/hero/Hero";
import Banner from "../components/banner/Banner";
import Services from "../components/services/Services";
// import { Link } from "react-router-dom";



// function Home (props){
const Home = (props) => {
    return (

        <>
            <BackgroundVideo />
            <Hero>
                <Banner
                    title="Община Копривщица"

                >

                </Banner>
            </Hero>
            <Services />

        </>
    )
}

export default Home;