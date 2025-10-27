const avaliacaoQuadrantes = document.querySelectorAll('.quadrante_avaliacao');
const setaAnterior = document.querySelector('.seta_anterior');

const setaProxima = document.querySelector('.seta_proxima'); 

const numeroPaginaSpan = document.querySelector('.numero_pagina');
let paginaAtual = 0;
const totalPaginas = avaliacaoQuadrantes.length;

function atualizarCarrossel() {
    avaliacaoQuadrantes.forEach((quadrante, index) => {
        quadrante.classList.remove('pagina_ativa');
    });

    if (avaliacaoQuadrantes[paginaAtual]) {
        avaliacaoQuadrantes[paginaAtual].classList.add('pagina_ativa');
    }

    numeroPaginaSpan.textContent = paginaAtual + 1;

    setaAnterior.disabled = (paginaAtual === 0);
    setaAnterior.classList.toggle('desabilitado', paginaAtual === 0);

    setaProxima.disabled = (paginaAtual === totalPaginas - 1);
    setaProxima.classList.toggle('desabilitado', paginaAtual === totalPaginas - 1);
}

function irParaProximaPagina() {
    if (paginaAtual < totalPaginas - 1) {
        paginaAtual++;
        atualizarCarrossel();
    }
}

function voltarParaPaginaAnterior() {
    if (paginaAtual > 0) {
        paginaAtual--;
        atualizarCarrossel();
    }
}

setaProxima.addEventListener('click', irParaProximaPagina);
setaAnterior.addEventListener('click', voltarParaPaginaAnterior);
document.addEventListener('DOMContentLoaded', atualizarCarrossel);