var containersLeft = document.querySelectorAll(".container-left");
var containersRight = document.querySelectorAll(".container-right");
var projetos = document.querySelector("#projetos");
var btnProjetos = document.querySelector('#btn-projetos');

var containersAtivados = false;
var projetosAtivados = false;

/* Escutador de eventos no botão */
btnProjetos.addEventListener('click', function() {
    toggleContainers(containersLeft);
    toggleContainers(containersRight);
});

/* Função que verifica a situação dos contêineres e decide quais funções chamar:
   hideContainer para ocultar e showContainer para mostrar */
function toggleContainers(containers) {
    containers.forEach(function(container) {
        if (container.classList.contains('leftOn')) {
            hideContainer(container);
            if (containersAtivados) {
                console.log('Containers Desativados');
                containersAtivados = false;
            }
            hideProjetos(projetos);
        } else {
            showProjetos(projetos);
            showContainer(container);
            if (!containersAtivados) {
                console.log('Containers Ativados');
                containersAtivados = true;
            }
        }
    });
}

/* Função que esconde os projetos caso esteja ativado */
function hideContainer(container) {
    container.classList.remove('leftOn', 'rightOn');
    setTimeout(function () {
        container.style.display = "none";
    }, 1000);
}

/* Função que mostra os projetos caso esteja desativada */
function showContainer(container) {
    setTimeout(function () {
        container.style.display = "flex";
    }, 100);

    setTimeout(function () {
        container.classList.add('leftOn', 'rightOn');
    }, 200);
}

/* Função que aumenta a altura da parte dos projetos */
function showProjetos(projetos){

    btnProjetos.textContent = 'Fechar Projetos'

    projetos.classList.add('show')
    if (!projetosAtivados) {
        console.log('Projetos Ativados');
        projetosAtivados = true;
    }
}

/* Função que reduz a altura da parte projetos */
function hideProjetos(projetos){

    btnProjetos.textContent = 'Ver Projetos'

    projetos.classList.remove('show')
    if (projetosAtivados) {
        console.log('Projetos Desativados');
        projetosAtivados = false;
    }
}
