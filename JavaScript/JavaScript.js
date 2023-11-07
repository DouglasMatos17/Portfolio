var container_left = document.querySelectorAll(".container-left");
var container_right = document.querySelectorAll(".container-right");
var projetos = document.querySelector("#projetos")
var btn = document.querySelector('#btn-projetos');

btn.addEventListener('click', function() {
    toggleContainers(container_left);
    toggleContainers(container_right);
});

/* Função que esconde os projetos caso esteja ativado*/
function hideContainer(container) {
    container.classList.remove('leftOn', 'rightOn');
    setTimeout(function () {
        container.style.display = "none";
    }, 800);
    console.log('Containers Desativados');
}

/* Função que mostra os projetos caso esteja desativada*/
function showContainer(container) {
    setTimeout(function () {
        container.style.display = "flex";
    }, 100);

    setTimeout(function () {
        container.classList.add('leftOn', 'rightOn');
    }, 200);
    console.log('Containers Ativado');
}

/* Função que aumenta a altura da parte dos projetos*/
function showProjetos(projetos){
    projetos.classList.add('show')
    console.log('Projetos Ativado')
}

/*Função que reduz a altura da parte projetos*/
function hideProjetos(projetos){
    projetos.classList.remove('show')
    console.log('Projetos Desativado')
}

function toggleContainers(containers) {
    containers.forEach(function(container) {
        if (container.classList.contains('leftOn')) {
            hideContainer(container);
            hideProjetos(projetos);
        } else {
            showProjetos(projetos);
            showContainer(container);
        }
    });
}
