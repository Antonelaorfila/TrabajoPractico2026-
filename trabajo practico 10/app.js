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

console.log('La posicion del Mouse es '+ tecnologia.indexOf('Mouse'))
console.log (tecnologia)
console.log('La posicion del Monitor es '+ tecnologia.indexOf('Monitor'))
console.log (tecnologia)
console.log('La posicion del Webcam es '+ tecnologia.indexOf('Webcam'))
console.log (tecnologia)
console.log('La posicion del Impresora es '+ tecnologia.indexOf('Impresora'))
console.log (tecnologia)
console.log('La posicion del Teclado es '+ tecnologia.indexOf('Teclado'))
console.log (tecnologia)
let posteclado 
    if (impresora == registrada ) 
        {
            alert('Esta registrada')
        }else{
            alert('No esta registrada')
        }

console.log('La posicion del Impresora es '+ tecnologia.indexOf('Impresora'))
console.log (tecnologia)
console.log(tecnologia.length); 

let videojuegos = ["Minecraft","Pokémon Cristal","Super Mario","The Legend of Zelda","Sonic"];

console.log (videojuegos)
console.log (videojuegos.length)
console.log (videojuegos.push ("Animal Crossing"))
console.log (videojuegos.push ("Pokemon Rojo"))
console.log (videojuegos)
console.log (videojuegos.unshift("Tetris"))
console.log (videojuegos.unshift("Pac-Man"))
console.log (videojuegos)
console.log (videojuegos.indexOf ("Pokémon Cristal"))
console.log (videojuegos)
console.log (videojuegos.indexOf ("Sonic"))
console.log (videojuegos)
console.log (videojuegos.indexOf ("FIFA"))
console.log (videojuegos)
videojuegos.pop();


