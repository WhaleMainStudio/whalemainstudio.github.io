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


if (!sessionStorage.getItem('reloaded')) {

    sessionStorage.setItem('reloaded', 'true');

    window.location.reload(true);
}


function reloadCSS() {

    const link = document.querySelector('link[rel="stylesheet"][href*="LINESeedSans_XBd"]');
    
    if (link) {
        const newLink = link.cloneNode(true);
        newLink.href = link.href.split('?')[0] + '?v=' + new Date().getTime();
        link.parentNode.replaceChild(newLink, link);
    }
}

reloadCSS();


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


document.addEventListener('DOMContentLoaded', function () {
    const languageSelect = document.getElementById('language-select');
    const flagImage = document.getElementById('flag-image');
    const translations = {
        'fr': {
            'welcome-title': 'WhaleMain Studio',
            'team-lead': 'Lead Dev',
            'team-dev': 'Dev',
            
            'newsletter-label': 'Demander une clef beta pour Omada :',
            'newsletter-button': "S'inscrire",
            'confirmation-message': 'Votre inscription à notre newsletter est validée !',
            'error-message': 'Il y a eu une erreur lors de l\'inscription.',
            'game-title': 'Omada',
            'game-description': 'La synergie vous apportera la victoire.',
            'contact-title': 'Contact',
            'contact-name-label': 'Nom :',
            'contact-email-label': 'Email :',
            'contact-message-label': 'Message :',
            'contact-button': 'Envoyer',
            'footer': '© 2025 WhaleMain Studio. Tous droits réservés.',
            'game': 'Omada',
            'contact': 'Contact',
            'newsletter-email-placeholder': 'Entrez votre email',
            'newsletter-name-placeholder': 'Entrez votre nom',
            'contact-name-placeholder': 'Entrez votre nom',
            'contact-email-placeholder': 'Entrez votre email',
            'contact-message-placeholder': 'Entrez votre message',
            'flag': 'Images/Flags/frenchFlag.jpg'
        },
        'en': {
            'welcome-title': 'WhaleMain Studio',
            'team-lead': 'Lead Dev',
            'team-dev': 'Dev',
            
            'newsletter-label': 'Request a beta key for Omada:',
            'newsletter-button': 'Subscribe',
            'confirmation-message': 'Your newsletter subscription is confirmed!',
            'error-message': 'There was an error during registration.',
            'game-title': 'Omada',
            'game-description': 'Synergy will bring you victory.',
            'contact-title': 'Contact',
            'contact-name-label': 'Name:',
            'contact-email-label': 'Email:',
            'contact-message-label': 'Message:',
            'contact-button': 'Send',
            'footer': '© 2025 WhaleMain Studio. All rights reserved.',
            'game': 'Omada',
            'contact': 'Contact',
            'newsletter-email-placeholder': 'Enter your email',
            'newsletter-name-placeholder': 'Enter your name',
            'contact-name-placeholder': 'Enter your name',
            'contact-email-placeholder': 'Enter your email',
            'contact-message-placeholder': 'Enter your message',
            'flag': 'Images/Flags/englandFlag.png'
        },
        'es': {
            'welcome-title': 'WhaleMain Studio',
            'team-lead': 'Desarrollador Principal',
            'team-dev': 'Desarrollador',
            
            'newsletter-label': 'Solicitar una clave beta para Omada:',
            'newsletter-button': 'Suscribirse',
            'confirmation-message': '¡Tu suscripción al boletín ha sido confirmada!',
            'error-message': 'Hubo un error durante el registro.',
            'game-title': 'Omada',
            'game-description': 'La sinergia te llevará a la victoria.',
            'contact-title': 'Contacto',
            'contact-name-label': 'Nombre:',
            'contact-email-label': 'Correo electrónico:',
            'contact-message-label': 'Mensaje:',
            'contact-button': 'Enviar',
            'footer': '© 2025 WhaleMain Studio. Todos los derechos reservados.',
            'game': 'Omada',
            'contact': 'Contacto',
            'newsletter-email-placeholder': 'Introduce tu correo electrónico',
            'newsletter-name-placeholder': 'Introduce tu nombre',
            'contact-name-placeholder': 'Introduce tu nombre',
            'contact-email-placeholder': 'Introduce tu correo electrónico',
            'contact-message-placeholder': 'Introduce tu mensaje',
            'flag': 'Images/Flags/spainFlag.png'
        },
        'ko': {
            'welcome-title': 'WhaleMain Studio',
            'team-lead': '리드 개발자',
            'team-dev': '개발자',
            
            'newsletter-label': '오마다 베타 키 요청:',
            'newsletter-button': '구독하기',
            'confirmation-message': '뉴스레터 구독이 확인되었습니다!',
            'error-message': '등록 중 오류가 발생했습니다.',
            'game-title': '오마다',
            'game-description': '시너지가 승리를 가져다 줄 것입니다.',
            'contact-title': '연락처',
            'contact-name-label': '이름:',
            'contact-email-label': '이메일:',
            'contact-message-label': '메시지:',
            'contact-button': '보내기',
            'footer': '© 2025 WhaleMain Studio. 모든 권리 보유.',
            'game': 'Omada',
            'contact': '연락처',
            'newsletter-email-placeholder': '이메일을 입력하세요',
            'newsletter-name-placeholder': '이름을 입력하세요',
            'contact-name-placeholder': '이름을 입력하세요',
            'contact-email-placeholder': '이메일을 입력하세요',
            'contact-message-placeholder': '메시지를 입력하세요',
            'flag': 'Images/Flags/southKoreaFlag.png'
        },
        'ja': {
            'welcome-title': 'WhaleMain Studio',
            'team-lead': 'リード開発者',
            'team-dev': '開発者',
            
            'newsletter-label': 'Omadaのベータキーをリクエスト:',
            'newsletter-button': '購読する',
            'confirmation-message': 'ニュースレターの購読が確認されました！',
            'error-message': '登録中にエラーが発生しました。',
            'game-title': 'Omada',
            'game-description': 'シナジーが勝利をもたらします。',
            'contact-title': '連絡先',
            'contact-name-label': '名前:',
            'contact-email-label': 'メール:',
            'contact-message-label': 'メッセージ:',
            'contact-button': '送信',
            'footer': '© 2025 WhaleMain Studio. 全著作権所有。',
            'game': 'Omada',
            'contact': '連絡先',
            'newsletter-email-placeholder': 'メールアドレスを入力してください',
            'newsletter-name-placeholder': '名前を入力してください',
            'contact-name-placeholder': '名前を入力してください',
            'contact-email-placeholder': 'メールアドレスを入力してください',
            'contact-message-placeholder': 'メッセージを入力してください',
            'flag': 'Images/Flags/japanFlag.png'
        },
        'zh': {
            'welcome-title': 'WhaleMain Studio',
            'team-lead': '首席开发者',
            'team-dev': '开发者',
            
            'newsletter-label': '请求Omada的测试版密钥:',
            'newsletter-button': '订阅',
            'confirmation-message': '您的订阅已确认！',
            'error-message': '注册过程中出现错误。',
            'game-title': 'Omada',
            'game-description': '协同作战将带来胜利。',
            'contact-title': '联系方式',
            'contact-name-label': '姓名:',
            'contact-email-label': '电子邮件:',
            'contact-message-label': '消息:',
            'contact-button': '发送',
            'footer': '© 2025 WhaleMain Studio. 版权所有。',
            'game': 'Omada',
            'contact': '联系方式',
            'newsletter-email-placeholder': '输入您的电子邮件',
            'newsletter-name-placeholder': '输入您的姓名',
            'contact-name-placeholder': '输入您的姓名',
            'contact-email-placeholder': '输入您的电子邮件',
            'contact-message-placeholder': '输入您的消息',
            'flag': 'Images/Flags/chinaFlag.png'
        }
    };

    const userLang = navigator.language || navigator.userLanguage;
    const languageMap = {
        'fr': 'fr',
        'en': 'en',
        'es': 'es',
        'ko': 'ko',
        'ja': 'ja',
        'zh': 'zh'
    };

    const defaultLang = languageMap[userLang.split('-')[0]] || 'fr';
    languageSelect.value = defaultLang;
    flagImage.src = translations[defaultLang]['flag'];

    function translatePage(lang) {
        const translation = translations[lang];
        document.querySelectorAll('[data-section]').forEach(element => {
            const section = element.getAttribute('data-section');
            if (translation[section]) {
                if (section === 'team-member-name') {
                    element.textContent = translation[section][Array.from(element.parentNode.children).indexOf(element)];
                } else {
                    element.textContent = translation[section];
                }
            }
        });
        document.getElementById('newsletter-email').placeholder = translation['newsletter-email-placeholder'];
        document.getElementById('name-message').placeholder = translation['newsletter-name-placeholder'];
        document.getElementById('name').placeholder = translation['contact-name-placeholder'];
        document.getElementById('email').placeholder = translation['contact-email-placeholder'];
        document.getElementById('message').placeholder = translation['contact-message-placeholder'];

        flagImage.src = translation['flag'];
    }

    languageSelect.addEventListener('change', function () {
        const selectedLang = languageSelect.value;
        translatePage(selectedLang);
    });

    translatePage(defaultLang);

    // Existing code...
});

