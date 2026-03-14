const form = document.querySelector('#form');
const titleInput = document.querySelector('#title');
const genreSelect = document.querySelector('#genre');
const duracaoInput = document.querySelector('#duracao');
const lancamentoInput = document.querySelector('#lancamento');
const classificacaoSelect = document.querySelector('#classificacao');
const formatoSelect = document.querySelector('#formato');
const idiomaInput = document.querySelector('#idioma');
const legendaInput = document.querySelector('#legenda');
const precoInput = document.querySelector('#preco');
const quantidadeInput = document.querySelector('#quantidade');
const descricaoTextArea = document.querySelector('#descricao');


form.addEventListener('submit', (event) => {
    event.preventDefault;

    if(titleInput.value ==='') {
        alert('Por favor, preencha o título do filme.');
        return;
    }

    if(genreSelect.value ==='') {
        alert('Por favor, selecione uma das opções de gênero.');
        return;
    }

    if(duracaoInput.value ==='') {
        alert('Por favor, preencha a duração do filme.');
        return;
    }

    if(!validateLancamento(lancamentoInput.value, 4)) {
        alert('Por favor, preencha o ano de lançamento do filme.');
        return;
    }

    if(classificacaoSelect.value ==='') {
        alert('Por favor, selecione uma das classificações indicativas.');
        return;
    }

    if(formatoSelect.value ==='') {
        alert('Por favor, selecione um dos formatos físicos do filme.');
        return;
    }

    if(idiomaInput.value ==='') {
        alert('Por favor, preencha o idioma local ou dublado do filme.');
        return;
    }

    if(legendaInput.value ==='') {
        alert('Por favor, preencha a legenda inserida no formato físico desse filme. Se não houver, escreva apenas "Nenhum".');
        return;
    }

    if(precoInput.value ==='') {
        alert('Por favor, preencha o valor do filme.');
        return;
    }

    if(quantidadeInput.value ==='') {
        alert('Por favor, preencha a quantidade existente desse filme no estoque.');
        return;
    }

    if(descricaoTextArea.value ==='') {
        alert('Por favor, escreva a sinopse do filme.');
        return;
    }

    form.submit();
})

function validateLancamento(lancamento, minDigitos) {
    if(lancamento.length == minDigitos) {
        //ano válido
        return true;
    }

    return false;
}
