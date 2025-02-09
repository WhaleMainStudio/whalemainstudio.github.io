// script.js
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const newsletterForm = document.getElementById('newsletter-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Formulaire de contact soumis avec succès !');
        // Ajoute ici le code pour envoyer les données du formulaire
    });

    newsletterForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(newsletterForm);

        fetch(newsletterForm.action, {
            method: newsletterForm.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    confirmationMessage.style.display = 'block';
                    newsletterForm.reset();
                } else {
                    alert('Il y a eu une erreur lors de l\'inscription.');
                }
            })
            .catch(error => {
                alert('Il y a eu une erreur lors de l\'envoi du formulaire.');
            });
    });

    // Ajouter une navigation fluide pour les liens de navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
