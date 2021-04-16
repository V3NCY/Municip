import PriceB from "../components/price/priceMuseums";
import PriceA from "../components/price/pricePool";


function Prices (props){

        return <>
            <h1>Цени</h1>
        <div className="container">
            <div className="row">
            <PriceA/>
            <PriceB/>
            </div>
            <div class="d-flex flex-column">
                </div>
            </div>
        </>
                   
    }
    export default Prices;