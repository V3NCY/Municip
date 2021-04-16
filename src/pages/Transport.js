import Transp from "../components/transport/transport";

function Transport(props) {
  return (
    <>
        <h1>Транспорт</h1>
      <div className="container">
        <div className="row">
          <Transp />
        </div>
        <div class="d-flex flex-column"></div>
      </div>
    </>
  );
}
export default Transport;
