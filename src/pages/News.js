import New from "../components/news/new";

function News(props) {
  return (
    <>
      <div className="container">
        <h1> Новини </h1>
        <div className="row">
          <div className="col">
            <New />
          </div>
        </div>
        <div class="d-flex flex-column"></div>
      </div>
    </>
  );
}
export default News;
