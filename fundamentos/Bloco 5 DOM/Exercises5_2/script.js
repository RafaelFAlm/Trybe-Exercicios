// 1Acesse o elemento elementoOndeVoceEsta .
    document.getElementById('elementoOndeVoceEsta');
// 2 Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.getElementById('elementoOndeVoceEsta').parentNode.style.color = "blue";
// 3 Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.getElementById('primeiroFilhoDoFilho').innerText= "texto pra ele"
// 4 Acesse o primeiroFilho a partir de pai .
document.getElementById('pai').firstElementChild;
// 5 Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
document.getElementById('elementoOndeVoceEsta').firstElementChild;
// 6 Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
document.getElementById('elementoOndeVoceEsta').firstChild;
// 7 Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
document.getElementById('elementoOndeVoceEsta').nextElementSibling;
// 8 Agora acesse o terceiroFilho a partir de pai .
document.getElementById('pai').lastElementChild.previousElementSibling;

//9 Crie um irmão para elementoOndeVoceEsta .
let divNova = document.createElement("div");
let conteudoNovo = document.createTextNode("Elemento irmao foi adicionado");
divNova.appendChild(conteudoNovo);
pai.appendChild(divNova);

//10 Crie um filho para elementoOndeVoceEsta .
let elementoFilho = document.createElement("div");
let conteudoFilho = document.createTextNode ("Elemento filho de onde vc esta");
elementoFilho.appendChild(conteudoFilho);
elementoOndeVoceEsta.appendChild(elementoFilho);

//11 Crie um filho para primeiroFilhoDoFilho .
let elementoFilhoDoFilho = document.createElement("div");
let conteudoFilhoDoFilho = document.createTextNode ("Mais um filho chato");
elementoFilhoDoFilho.appendChild(conteudoFilhoDoFilho);
primeiroFilhoDoFilho.appendChild(elementoFilhoDoFilho);

//12 A partir desse filho criado, acesse terceiroFilho .
elementoFilhoDoFilho .classList.add("fDF");
document.getElementsByClassName('fDF').parentNode.nextElementSibling;
