const generarInforme = () => {
  return new Promise((resolve, reject) => {
    //! pedido de ejemplo
    // let informe = true;

    //! pedido FETCH
    let informe = fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric&appid=a7fc87f5b94b227523a49f35835492c1"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));

    setTimeout(() => {
      if (informe) {
        resolve("Recibimos el informe 😁");
      } else {
        reject("No recibimos el informe 🤨");
      }
    });
  }, 2000);
};

generarInforme()
  .then((respuesta) => console.log(respuesta))
  .catch((error) => console.log(error));

//.......................................................
//.......................................................
//? ASYNC AWAIT - funciones asincronicas
const obtenerclima = async () => {
  const resp = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric&appid=a7fc87f5b94b227523a49f35835492c1"
  );

  const data = await resp.json();

  return data;
};

obtenerclima().then((respuesta) => console.log(respuesta));
