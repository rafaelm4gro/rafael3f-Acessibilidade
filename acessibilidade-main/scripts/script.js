document.addEventListener('DOMContentLoaded', function() {
    const btnAcessibilidade = document.getElementById('btn-acessibilidade');
    const opcoesAcessibilidade = document.getElementById('acessibilidade-opcoes');

    btnAcessibilidade.addEventListener('click', function() {
        btnAcessibilidade.classList.toggle('rotated-button');
        opcoesAcessibilidade.classList.toggle('d-none');
        opcoesAcessibilidade.classList.toggle('show');
        
        // Atualização do valor do atributo aria-expanded
        const isExpanded = btnAcessibilidade.getAttribute('aria-expanded') === 'true';
        btnAcessibilidade.setAttribute('aria-expanded', !isExpanded);
    });

    const btnAumentaFonte = document.getElementById('aumenta-fonte');
    const btnResetaFonte = document.getElementById('reseta-fonte');
    const btnDiminiFonte = document.getElementById('diminui-fonte');
    const btnContraste = document.getElementById('btn-contraste');

    let currentFontSize = 1;

    btnAumentaFonte.addEventListener('click', function() {
        console.log(currentFontSize);
        currentFontSize += 0.1;
        document.documentElement.style.fontSize = `${currentFontSize}rem`;
    });

    btnResetaFonte.addEventListener('click', function() {
        currentFontSize = 1;
        document.documentElement.style.fontSize = `${currentFontSize}rem`;
    });

    btnDiminiFonte.addEventListener('click', function() {
        currentFontSize -= 0.1;
        document.documentElement.style.fontSize = `${currentFontSize}rem`;
    });

    btnContraste.addEventListener('click', function() {
        document.documentElement.classList.toggle('high-contrast');
    });
});
