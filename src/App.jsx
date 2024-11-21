// import "./App.css";
import { detalleCard } from "./data/info.js";
import CardApp from "./components/CardApp";
import Carousel from "./components/Carousel";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Carousel />
      </div>
      <div className="container">
        <div className="row my-5">
          {detalleCard.map((item, index) => (
            <CardApp key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
