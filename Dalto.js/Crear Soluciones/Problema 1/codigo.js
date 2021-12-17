"use strict";

const definirCompra = (n) => {
  let din = prompt(`Dinero de ${n}`);
  parseInt(din);
  if (din >= 0.6 && din < 1)
    return `${n}: helado de agua y tu vuelto es: ` + (din - 0.6);
  if (din >= 1 && din < 1.6) return `${n}: helado de crema`;
  if (din >= 1.6 && din < 1.7) return `${n}: helado de heladix`;
  if (din >= 1.7 && din < 1.8) return `${n}: helado de heladovich`;
  if (din >= 1.8 && din < 2.9) return `${n}: helado de helardo`;
  if (din >= 2.9) return `${n}: helado de confites o pote de 1/4kg`;
  else return `${n}: No te alcanza para ningun helado probre de mierda`;
};

console.log(definirCompra("Cofla"));
console.log(definirCompra("Pedro"));
console.log(definirCompra("Roberto"));
