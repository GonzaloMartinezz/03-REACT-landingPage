import React, { useEffect, useState } from "react";
//! importar la funcion
import { obtenerclima } from "../helpers/obtener-clima";
//!CSS
import "../css/navbar.css";

function NavBar() {
  //!manejar los datos del tiempo
  const [tiempo, setTiempo] = useState(null);
  // console.log(tiempo);

  //!manejar CUANDO se desata la funcion del clima
  useEffect(() => {
    //funcion
    clima();
  }, []);

  const clima = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const coords = pos.coords;
      const lat = coords.latitude;
      const long = coords.longitude;

      obtenerclima(lat, long)
        .then((respuesta) => {
          //! DESESTRUCTURAR
          const { main, weather } = respuesta;

          setTiempo({
            temp: main.temp,
            clima: weather[0],
          });
          console.log(respuesta);
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <i className="fa fa-ravelry" aria-hidden="true"></i>
            comReact1 - Robots
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
            </ul>
            {tiempo && (
              <div className="d-flex align-items-center justify-content-center gap-2">
                <img
                  src={`https://openweathermap.org/img/wn/${tiempo.clima.icon}@2x.png`}
                  alt="datos del clima"
                  className="icon-tiempo"
                />
                <span>{Math.round(tiempo.temp)}°C</span>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
