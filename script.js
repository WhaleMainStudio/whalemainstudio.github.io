// script.js
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const newsletterForm = document.getElementById('newsletter-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Formulaire de contact soumis avec succ�s !');
        // Ajoute ici le code pour envoyer les donn�es du formulaire
    });

    newsletterForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Inscription � la newsletter r�ussie !');
        // Ajoute ici le code pour envoyer les donn�es du formulaire

    });
});

