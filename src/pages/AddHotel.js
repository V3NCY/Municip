import { useQuery, gql } from '@apollo/client';
import CreateHotel from "../components/create-hotel/create-hotel";

const GET_HOTELS = gql`
  query getHotels {
    hotels {
      _id
      title
    }
  }
`;

function AddHotel(props) {

    const { input } = useQuery(GET_HOTELS);

    const getHotels = () => {
        if (!input) {
            return null;
        }
        const hotelsList = input.hotels.map(hotel => {
            return <div
                key={hotel._id}
            >{hotel.title}</div>
        })
        return hotelsList;
    }

    return <>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <CreateHotel />
                </div>
                <div className="col">
                    <div>Списък с хотели:</div>
                    {getHotels()}
                </div>
            </div>
        </div>
    </>
}
export default AddHotel;