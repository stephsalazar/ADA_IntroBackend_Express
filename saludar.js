console.log("Hola, este es mi primer script desde archivo JS");

const suma = (num) => {
  return num + num
};

const multiplicacion = (suma) => {
  return suma * 2
};

suma(5); // 10
const diez = suma(5);
console.log(diez) // 10

multiplicacion(suma(2));

console.log('Callback', multiplicacion(suma(2)));