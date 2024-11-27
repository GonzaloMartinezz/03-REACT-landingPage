// import "./App.css";
import { useState } from "react";
import { detalleCard } from "./data/info.js";
import CardApp from "./components/CardApp";
import Carousel from "./components/Carousel";
import NavBar from "./components/NavBar";

function App() {
  //Manejar el modo oscuro
  const [darkMode, setDarkMode] = useState(false);

  //Funcion para manejar el estado del modo oscuro
  const cambiarModoOscuro = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "bg-secondary" : " "}>
      <div>
        <NavBar darkMode={darkMode} cambiarModoOscuro={cambiarModoOscuro} />
        <Carousel />
      </div>
      <div className="container">
        <div className="row my-5">
          {detalleCard.map((item, index) => (
            <CardApp key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
