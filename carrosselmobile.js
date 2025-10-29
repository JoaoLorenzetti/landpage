const avaliacaoQuadrantes = document.querySelectorAll('.quadrante_avaliacao');
const setaAnterior = document.querySelector('.seta_anterior');
const setaProxima = document.querySelector('.seta_proxima'); 
const setaAnteriorDesk = document.querySelector('.seta_anterior_desk');
const setaProximaDesk = document.querySelector('.seta_proxima_desk');

const numeroPaginaSpans = document.querySelectorAll('.numero_pagina');
let paginaAtual = 0;
const totalPaginas = avaliacaoQuadrantes.length;

console.log('Botões encontrados:', {
    setaAnteriorDesk,
    setaProximaDesk,
    numeroPaginaSpans: numeroPaginaSpans.length
});

function atualizarCarrossel() {
    console.log('Atualizando para página:', paginaAtual + 1);
    
    avaliacaoQuadrantes.forEach((quadrante, index) => {
        quadrante.classList.remove('pagina_ativa');
    });

    if (avaliacaoQuadrantes[paginaAtual]) {
        avaliacaoQuadrantes[paginaAtual].classList.add('pagina_ativa');
    }

    // Atualiza TODOS os spans de número de página
    numeroPaginaSpans.forEach(span => {
        span.textContent = paginaAtual + 1;
    });

    // Atualiza botões mobile
    if (setaAnterior) {
        setaAnterior.disabled = (paginaAtual === 0);
        setaAnterior.classList.toggle('desabilitado', paginaAtual === 0);
    }

    if (setaProxima) {
        setaProxima.disabled = (paginaAtual === totalPaginas - 1);
        setaProxima.classList.toggle('desabilitado', paginaAtual === totalPaginas - 1);
    }

    // Atualiza botões desktop
    if (setaAnteriorDesk) {
        setaAnteriorDesk.disabled = (paginaAtual === 0);
        setaAnteriorDesk.classList.toggle('desabilitado', paginaAtual === 0);
    }

    if (setaProximaDesk) {
        setaProximaDesk.disabled = (paginaAtual === totalPaginas - 1);
        setaProximaDesk.classList.toggle('desabilitado', paginaAtual === totalPaginas - 1);
    }
}

function irParaProximaPagina() {
    console.log('Clicou próxima. Página atual:', paginaAtual);
    if (paginaAtual < totalPaginas - 1) {
        paginaAtual++;
        atualizarCarrossel();
    }
}

function voltarParaPaginaAnterior() {
    console.log('Clicou anterior. Página atual:', paginaAtual);
    if (paginaAtual > 0) {
        paginaAtual--;
        atualizarCarrossel();
    }
}

// Event listeners mobile
if (setaProxima) {
    setaProxima.addEventListener('click', irParaProximaPagina);
}

if (setaAnterior) {
    setaAnterior.addEventListener('click', voltarParaPaginaAnterior);
}

// Event listeners desktop
if (setaAnteriorDesk) {
    setaAnteriorDesk.addEventListener('click', voltarParaPaginaAnterior);
    console.log('Listener adicionado ao botão anterior desktop');
}

if (setaProximaDesk) {
    setaProximaDesk.addEventListener('click', irParaProximaPagina);
    console.log('Listener adicionado ao botão próxima desktop');
}

document.addEventListener('DOMContentLoaded', atualizarCarrossel);