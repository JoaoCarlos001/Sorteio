
let nomes = [];
let adcNovo = document.getElementById('input');
let lista = document.getElementById('lista');


function adicionar(){
    if(adcNovo.value != ''){
        nomes.push(adcNovo.value);
        let item = document.createElement('option');
        item.innerHTML = `${adcNovo.value}`
        lista.appendChild(item);
    } else {
        alert('Adicione os participantes do sorteio.')
    }
    adcNovo.value =''
    adcNovo.focus();
}


function sortear(){
    if(nomes.length == 0){
        alert('Nenhum partipante na lista.')
    } else {
        let totalP = nomes.length;
        let sorte = Math.floor(Math.random() * totalP);
        alert(`O ganhador foi ${nomes[sorte]}`);
    }

}
