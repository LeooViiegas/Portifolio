document.addEventListener('DOMContentLoaded', function() {
    const hamburguer = document.querySelector('.menu-hamburguer');

    hamburguer.addEventListener('click', function() {
        hamburguer.classList.toggle('menu-ativo');
    });
});
