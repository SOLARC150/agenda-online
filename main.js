const nomes = [];
const numeros = [];
const form = document.getElementById('form');
let linhas = '';


form.addEventListener('submit', function(e){
    e.preventDefault();

    inputNome = document.getElementById('nome');
    inputNumero = document.getElementById('numero');

    if(!numeros.includes(parseInt(inputNumero.value))){
        atualizaContato();
        inputNome.value = '';
        inputNumero.value = '';
    }else {
        alert("já Existe")
    }
});

function atualizaContato (){
    nomes.push(inputNome.value);
    numeros.push(parseInt(inputNumero.value));
    let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${inputNumero.value}</td>`
        linha += `</tr>`

        linhas += linha;

    document.querySelector('tbody').innerHTML = linhas;
}
