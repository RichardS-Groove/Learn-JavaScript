let free = false;
const validarCliente = (time) => {
  let edad = prompt("¿Cuál es tu edad?");
  if (edad >= 18) {
    if (time >= 2 && time < 7 && !free) {
      alert("podes pasar gratis porque sos la primera persona despues de las 2 AM");
      free = true;
    } else {
      alert(`son las ${time}:00Hs y podes pasar, pero tenes que pagar la entrada`);
    }
  } else {
    alert("mira papu, sos menor de edad por ende no podes pasar, Maquinola");
  }
};


validarCliente(23);
validarCliente(5);