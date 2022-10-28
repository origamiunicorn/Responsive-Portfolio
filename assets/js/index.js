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

// email form for contact page follows:

(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('6YNc26NMSt6M_44MP');
})();

function fun() {
    document.getElementsByName('user_name').value = "";
    document.getElementsByName('user_email').value = "";
    document.getElementsByName('message').value = "";
};

window.onload = function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });

        form.reset();
        document.getElementById('submess').innerHTML = "Your message has been sent!"
    });
};
