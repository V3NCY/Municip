
import Muze from "../components/museums/museum";
// import Navbar from "../components/navbar/Navbar";


function Museums (props){

        return (
          <>
            <h1>Музеи</h1>
            <div className="container">
              <div className="row mt-4">
                <Muze />
              </div>
            </div>
          </>
        );
                   
    }
    export default Museums;