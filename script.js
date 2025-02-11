document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const newsletterForm = document.getElementById('newsletter-form');
    const confirmationMessage = document.getElementById('confirmation-message');
    const errorMessage = document.getElementById('error-message');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Formulaire de contact soumis avec succ�s !');
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
                if (data.result === 'success') {
                    confirmationMessage.style.display = 'block';
                    errorMessage.style.display = 'none';
                    newsletterForm.reset();
                } else {
                    errorMessage.style.display = 'block';
                    confirmationMessage.style.display = 'none';
                }
            })
            .catch(error => {
                errorMessage.style.display = 'block';
                confirmationMessage.style.display = 'none';
            });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

bublesNum = 0;

function createBubbles() {
    const bubblesContainer = document.createElement('div');
    bubblesContainer.className = 'bubbles-container';
    document.body.appendChild(bubblesContainer);

    function createBubble()
    {
        if (bublesNum < 50) {
            bublesNum++;
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            const size = Math.random() * 30 + 10;
            const left = Math.random() * 100;
            const delay = Math.random() * 5;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${left}%`;
            bubble.style.animationDelay = `${delay}s`;

            bubble.addEventListener('animationend', () => {
                bubble.remove();
                bubblesNum--;
            });

            bubblesContainer.appendChild(bubble);
        }
       
    }
    setInterval(createBubble, Math.random(1, 50));
}

window.addEventListener('load', createBubbles);

window.addEventListener('scroll', () => {
    const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    document.body.style.backgroundPosition = `center ${scrollPercentage * 100}%`;
});