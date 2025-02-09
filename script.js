// script.js
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const newsletterForm = document.getElementById('newsletter-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Formulaire de contact soumis avec succès !');
        // Ajoute ici le code pour envoyer les données du formulaire
    });

    newsletterForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Inscription à la newsletter réussie !');
        // Ajoute ici le code pour envoyer les données du formulaire

    });
});

