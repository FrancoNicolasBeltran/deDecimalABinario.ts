// los numeros binarios son en base 2 , f2^0 +f2^1+f2^2+f2^3+f2^4....f2^n f =0 , 1
// numero /2 = numero (resto cero o 1) y luego se le del final al inicio
let pregunta:number=0;
let activador:boolean = true; //corta el while y deja de imprimir
let tamanio : number =0; //el tamaño va a cambiar segun el numero , ejemplo el 4 necesita 3 numeros "100",8 4 numeros "1000",etc
let cajabin : string []= new Array(tamanio);//aca vamos a ir guardando los 0 y 1 (al revés),ej 4 "001"
let miExpo :number = 1;//lo cree para que me sirva de miExpoonente y variable de tamaño
function separador (cantidad:number){
    let x:number,linea : string= "{" ;
    for(x=1;x<=cantidad;x++){
        linea += "=";
    }
    console.log(linea+"}");
}
function acomodarElBinario(){
    let juntarTodoEnUnString:string="";
    for (let indice = tamanio-1; indice >= 0; indice-- ) {
      juntarTodoEnUnString+=cajabin[indice];
        }
        console.log(juntarTodoEnUnString);
}
function binario(numero:number){  
 let i:number=0; //esta variable es para que me la vaya guardando en diferentes posiciones.
    /*let resultado:string = "";*/
    while(numero>=2){ 
if (numero%2==0){
    cajabin[i]= "0";
 numero = numero/2;
 i++; // aca corre otra posicion el Array
}
 else if(numero%2!=0){
    cajabin[i]= "1";
numero = numero/2-(numero%2)/2;
i++; // aca corre otra posicion el Array
}
    }
if(numero==0){
    cajabin[i]= "0";
}
if(numero==1){
    cajabin[i]= "1";
    }
    acomodarElBinario();
    
}
pregunta=readlineSync.questionInt("Ingrese un numero : ");
while(activador){
    if(pregunta==0||pregunta==1){
        tamanio=1;
     activador=false;
     /*console.log(tamanio)*/   // este es un "Unit test"
    }
    else if (pregunta>=(2**(miExpo))&&pregunta<(2**(miExpo+1))){
        tamanio= miExpo+1;
     activador=false;
     /*console.log(tamanio+"else if");*/   // este es un "Unit test"
    }
    else{
        /*console.log(tamanio+"else"+miExpo);*/   // este es un "Unit test"
        miExpo++;
    }
}
console.log("El tamanio del binario es de : "+tamanio+" Bits ");
separador(50);
binario(pregunta);
