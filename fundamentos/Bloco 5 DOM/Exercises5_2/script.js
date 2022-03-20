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
document.getElementById('elementoOndeVoceEsta').firstChild
// 7 Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
document.getElementById('elementoOndeVoceEsta').nextElementSibling
// 8 Agora acesse o terceiroFilho a partir de pai .
document.getElementById('pai').lastElementChild.previousElementSibling