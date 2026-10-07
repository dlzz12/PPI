//Comentario de uma linha 
/*comenetario de multiplas linhas*/ 
//tres formas de declarar uma variavel (sem tipo)//
//o var e o let se distinguem pelo escopo de declaração.//

let nome = "Guilherme";
var sobrenome;

if (nome == "Guilherme"){
    sobrenome = "Liz"
    let idade = 20;
    var pet = "dog";

    console.log ("nome: "+nome+ " sobrenome: "+sobrenome+ " Idade: "+idade +" pet: "+pet)
}

    let idade = 20;
    if(idade=="20"){
        console.log("A")

    }
    if (idade==="20"){
        console.log("B")
    }

    peso = 74 
    altura = 1.70
    imc = peso/(altura*altura)
    //classificação do IMC
    if(imc < 18.5){
        console.log("Abaixo do peso")
    
    }else if (imc>=18.5 && imc < 25){
        console.log("Peso normal")
    
    }else if (imc >= 25 && imc < 30){
        console.log("Acima do peso")

    } else if (imc >= 30 && imc < 35){
        console.log("Obesidade grau 1")

    }else if(imc >= 35 && imc < 40){
        console.log("Obesidade grau 2")

    }else if(imc >= 40){
        console.log("Obesidade grau 3")
    }

    switch(true){
        case 1: console.log("A"); break;
        case 2: console.log("B"); break;
        case 3: console.log("C"); break;
        default: console.log("D");

    }
    a = 2

    switch(a){
        case a**a == 1: console.log("A"); break;
        case a == 2: console.log ("B");break;
        case 3 == 3: console.log ("C"); break;
        default: console.log ("D");
    }

    // repeticao

    let i = 0; 

    while(i<5){
        console.log(i);
        i++;
    }

    //for

    for(let i=0; i<5; i++){
        console.log(i);
    }

    //arrays
    let carneDoChurrasco=["picanha", "alcatra", "fraldinha"];

    

     carneDoChurrasco.forEach((v1,index) => {
       console.log(v1 + "index: "+index);
     })