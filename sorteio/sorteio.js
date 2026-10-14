let div = document.createElement("div");
let numero1 = document.createElement("p");
pnumero1.innerHTML="Informe um número";
div.appendChild(pnumero1);
temp=document.createElement("input")
temp.id="inumero1"
div.appendChild(temp);
div.append(document.createElement("br"))


let pnumero2 = document.createElement("label");
pnumero2.innerHTML="Informe outro numero";
div.appendChild(numero2);
temp=document.createElement("input");
div.append(document.createElement("br"))
temp.id="inumero2";
div.appendChild(temp);