

var b;
let a;
const c = 3.14;

b = 2.0;
console.log("o tipo da variável B: " +typeof(b));
a="2";
console.log("o tipo da variável A: " +typeof(a));

if(a==b) {
    console.log("O valor dessas variaveis é igual");
}

if(a===b){
    console.log("O valor dessas variáveis são diferentes");
}


var itensChurrasco = [];
itensChurrasco.push("costela");
itensChurrasco.push("pão de alho");
itensChurrasco.push("linguiça");
itensChurrasco.push("romops");

for (let i = 0; i<itensChurrasco.length-1;i++){

}

itensChurrasco.forEach((e,i)=>{
    console.log(i+"-"+e);
})

nome = "Joao Henrique Boos sha sha sha sha ";
console.log(nome.split("").reverse().join(""));

itensChurrasco.map((e) => {
    console.log(e.length);
})

console.log(itensChurrasco.filter( (e,i)=>{return i!=3}));

console.log(itensChurrasco.filter( (e,i)=>{return !e.split("").includes("p")}))

console.log(JSON.stringify(itensChurrasco)); 

console.log(JSON.parse("[\"bla\", \"bla\" ]"))