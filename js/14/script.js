console.log(window.screen)
window.document.body.innerHTML="<p> OLÁ </p>"
document.body.style.backgroundColor="gray"



let div = document.createElement("div");
let pnome = document.createElement("p");
pnome.innerHTML="Informe seu nome";
div.appendChild(pnome);
temp=document.createElement("input")
temp.id="inome"
div.appendChild(temp);
div.append(document.createElement("br"))

let ppeso = document.createElement("label");
ppeso.innerHTML="Informe seu peso";
div.appendChild(ppeso);
temp=document.createElement("input");
div.append(document.createElement("br"))

temp.id="ipeso";
div.appendChild(temp);



div.append(document.createElement("br"))

let paltura = document.createElement("label");
paltura.innerHTML="Informe sua altura";
div.appendChild(paltura);
div.append(document.createElement("br"))
temp=document.createElement("input");
temp.id="ialtura"
div.appendChild(temp);


document.body.appendChild(div); 

//add botao
div.appendChild(document.createElement("br"))
tmp=document.createElement("button"); 
tmp.id="btnCalcular"
tmp.innerHTML="calcular"
div.append(tmp)

temp.addEventListener("click", () =>{
    ialtura=document.getElementsById("ialtura")
    ipeso=document.getElementsById("ipeso")


    peso=Number.parseFloat(ipeso.value)
    altura=Number.parseFloat(inputAltura.value)
    imc=peso/(altura*altura);
    console.log(imc);

    result.document.createElement("p");
    result.innerHTML=imc;
    div.appendChild(result);

})