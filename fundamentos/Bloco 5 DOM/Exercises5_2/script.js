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
let pai = document.getElementById('pai'); // recupera o elemento pai do elemento que tera seu novo irmaozinho
let elementoIrmao = document.createElement('section'); // cria o futuro elemento irmao
elementoIrmao.id = 'elementoIrmao'; //da um id ao elemento irmao
pai.appendChild(elementoIrmao); // adiciona o elemento Irmao como filho do mesmo pai do ElementoOndeVoceEsta

//10 Crie um filho para elementoOndeVoceEsta .
let elementoOndeVoceEsta =  document.getElementById('elementoOndeVoceEsta'); //mesmos passos acima, so q adicionamos filho direto para o Elemento Onde Voce Esta
let elementoFilho = document.createElement('section');
elementoFilho.id = 'elementoFilho';
elementoOndeVoceEsta.appendChild(elementoFilho)


//11 Crie um filho para primeiroFilhoDoFilho 
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
let elementoBisneto = document.createElement('section');
elementoBisneto.id = 'elementoBisneto';
primeiroFilhoDoFilho.appendChild(elementoBisneto);

//12 A partir desse filho criado, acesse terceiroFilho .
let terceiroFilho = elementoBisneto.parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho)

//13 Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

let pai = document.getElementById('pai');

for (let index = pai.childNodes.Length -1 ; index >= 0; index -=1){ 
    // index recebe o tamanho de ChildNodes do pai -1 e, enquanto maior ou igual a zero, eh decrementado
    // varia vel currentChild recebe o  childnode de pai na posicao index
    let currentChild = pai.childNodes[index];
    if (currentChild.id !== 'elementoOndeVoceEsta') { // verifica-se se o id eh igual ao elementoOndeVoceEsta, se nao for, a child eh removida
        currentChild.remove();
    }
}


