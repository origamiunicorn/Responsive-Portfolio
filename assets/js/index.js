document.addEventListener('DOMContentLoaded', () => {

    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(elem => {
            elem.addEventListener('click', () => {
                const target = elem.dataset.target;
                const $target = document.getElementById(target);

                elem.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }
});