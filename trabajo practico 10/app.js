let utiles = ['lapiz','goma', 'regla', 'cuaderno', 'lapicera'];

console.log(utiles);
console.log("el primer elemento es:" +utiles[0]);
console.log("el tercer elemento es:" +utiles[4]);
console.log(utiles[utiles.length-1]);
console.log(utiles.length);
utiles.push ("mochila");
console.log(utiles);
utiles.unshift ("cartuchera");
console.log(utiles);
console.log(utiles.length);

let eliminado = utiles[utiles.length-1]
utiles.pop();
console.log (eliminado);
console.log(utiles);

eliminado = utiles[0]
utiles.shift();
console.log (eliminado);
console.log(utiles);   
console.log(utiles.length);


let productos = ['Leche', 'Pan', 'Arroz', 'Fideos', 'Aceite'];

console.log(productos);
console.log(productos.length);
productos.push ("Azucar");
productos.push ("Yerba");
productos.push ("Café");
console.log(productos);
productos.unshift ("Sal");
productos.unshift ("Galletitas");
console.log(productos);

eliminado = productos[productos.length-1]
productos.pop();
console.log(eliminado);
productos.pop();
console.log(eliminado);
console.log(productos);

productos.shift();
console.log(eliminado);
console.log(productos);
console.log(productos.length);


let tecnologia = ['Teclado', 'Mouse', 'Monitor', 'Auriculares', 'Webcam', 'Parlantes'];

console.log('La posicion del mouse es '+tecnologia.indexOf('Mouse'))