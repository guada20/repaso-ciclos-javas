/*//ciclo for 
//paso1 empieza,       paso2 final ciclo,        paso3 intervalos 
for( var x = 1; x<=30; x++){
   document.write("el valor es "+x+"<br>")
}



//ciclo while 
//paso 1
var y = 1;
//paso 2
while( y <= 30){
    document.write("el valor es"+y+"<br>")
//paso3
y++
}*/

//punto 2
/*
var pregunta = prompt("Deseas parar el ciclo");
var guardar = "";

//paso 1      //paso 2           //paso 3
for( var x= 1; pregunta !="si"; x++){
  //volver a digitar otro numero 
  numero = parseInt(prompt("Digite un numero"));
  //guardar los numeros digtados
  guardar=guardar + numero +",";
  //volver apreguntar
  pregunta = prompt("Deseas parar el ciclo");
}
//Mostrar los numeros digitados
document.write("los numeros son:"+guardar);*/
//while
/*
var x = 1
var pregunta = prompt("Deseas parar el ciclo");
var guardar = "";
while(pregunta !="si"){
    numero = parseInt(prompt("Digite un numero"))
    guardar=guardar + numero + ",";
    pregunta = prompt("Deseas parar el ciclo")
}
document.write("los numeros son:" +guardar);
*/
//punto 3
/*
var x = 30
while (x >=0) {
    document.write(x + "<br>");
    x = x-1;
}
for (i = 30; i >= 0; i--){
    document.write(i + "<br>")
}*/
//punto4

var x = 1
var pregunta = prompt("Deseas parar el ciclo");
var guardar = "";
while(pregunta !="fin"){
    numero = parseInt(prompt("Digite un numero"))
    guardar=guardar + numero + ",";
    pregunta = prompt("Deseas parar el ciclo")
}
document.write("los numeros son:" +guardar);
//for
var pregunta = prompt("Deseas parar el ciclo");
var guardar = "";

for( var x= 1; pregunta !="fin"; x++){
  numero = parseInt(prompt("Digite un numero"));
  guardar=guardar + numero +",";
  pregunta = prompt("Deseas parar el ciclo");
}
document.write("los numeros son:"+guardar);

//punto5
/*
var trabajadores = parseInt(prompt("ingrese cantidad de trabajadores"))
var acumulador = 0;
var x = 1;
while( x <= trabajadores ){
    var profesion = prompt("ingrese la profesion");
    document.write("La profesion es " +profesion+"<br>")
    acumulador=acumulador+profesion;
    x++;
    var totaltrabajadores =acumulador
}
document.write("la cantidad total trabajadores es  " +trabajadores+ " <br>")
document.write("Total con profesion es  " +  totaltrabajadores + "<br>")
*/
