document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const omadaKeyDemandForm = document.getElementById('omadaKeyDemand-form');
    const confirmationMessage = document.getElementById('confirmation-message');
    const errorMessage = document.getElementById('error-message');
    const contactConfirmationMessage = document.getElementById('contact-confirmation-message');
    const contactErrorMessage = document.getElementById('contact-error-message');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const formData = new FormData(contactForm);

            fetch(contactForm.action, {
                method: contactForm.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (data.result === 'success') {
                        contactConfirmationMessage.style.display = 'block';
                        contactErrorMessage.style.display = 'none';
                        contactForm.reset();
                    } else {
                        contactErrorMessage.style.display = 'block';
                        contactConfirmationMessage.style.display = 'none';
                    }
                })
                .catch(error => {
                    contactErrorMessage.style.display = 'block';
                    contactConfirmationMessage.style.display = 'none';
                });
        });
    }

    if (omadaKeyDemandForm) { 
    omadaKeyDemandForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(omadaKeyDemandForm);

        fetch(omadaKeyDemandForm.action, {
            method: omadaKeyDemandForm.method,
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
                    omadaKeyDemandForm.reset();
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
    }

    if (document) {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    const languageSelect = document.getElementById('language-select');
    const flagImage = document.getElementById('flag-image');
    const translations = {
        'fr': {
            'welcome-title': 'WhaleMain Studio',
            'team-lead': 'Développeur Principal',
            'team-dev': 'Développeur',
            'omadaKeyDemand-label': 'Demander une clef beta pour Omada :',
            'omadaKeyDemand-button': "S'inscrire sur la liste d'attente",
            'confirmation-message': 'Votre demande de clef est enregistrée.',
            'error-message': 'Il y a eu une erreur lors de l\'envoi.',
            'contact-confirmation-message': 'Votre message a été envoyé.',
            'game-title': 'Omada',
            'game-description': `Traversée du Désert :<br>Vous devez survivre avec le reste de votre équipe après un accident.<br>Traversez le désert d'Omada pour trouver de l'aide parmi les chercheurs de fluide noir arrivant de tout l'univers.<br>Chaque combat fatiguera votre équipe mais vous permettra de trouver de nouvelles recrues.<br><br>Versus multijoueur :<br>Affrontez un ami ou un joueur inconnu dans le mode multijoueur d'Omada !<br>Choisissez vos pièces parmi toutes celles disponibles dans le jeu et écrasez votre adversaire.<br><br>La bêta fermée est disponible dès maintenant !<br>Demandez une clef Steam en remplissant le formulaire ci-dessous.`,
            'contact-title': 'Contact',
            'contact-name-label': 'Nom :',
            'contact-email-label': 'Email :',
            'contact-message-label': 'Message :',
            'contact-button': 'Envoyer',
            'footer': '© 2025 WhaleMain Studio. Tous droits réservés.',
            'game': 'Omada',
            'contact': 'Contact',
            'omadaKeyDemand-email-placeholder': 'Entrez votre email',
            'omadaKeyDemand-name-placeholder': 'Entrez votre nom',
            'contact-name-placeholder': 'Entrez votre nom',
            'contact-email-placeholder': 'Entrez votre email',
            'contact-message-placeholder': 'Entrez votre message',
            'flag': 'Images/Flags/frenchFlag.png',
            'legal-title': 'Mentions Légales',
            'legal-editor': 'Éditeur :',
            'legal-director': 'Directeur de la publication :',
            'legal-hosting': 'Hébergement :',
            'legal-link': 'Mentions légales',
            'home-link': 'Accueil'
        },
        'en': {
            'welcome-title': 'WhaleMain Studio',
            'team-lead': 'Lead Developer',
            'team-dev': 'Developer',
            'omadaKeyDemand-label': 'Request a beta key for Omada:',
            'omadaKeyDemand-button': 'Join waiting list',
            'confirmation-message': 'Your key request is registered.',
            'error-message': 'There was an error during sending.',
            'contact-confirmation-message': 'Your message has been sent.',
            'game-title': 'Omada',
            'game-description': `Desert Crossing:<br>You must survive with the rest of your team after an accident.<br>Cross the Omada desert to find help from black fluid researchers arriving from all over the universe.<br>Every fight will tire your team but help you recruit new members.<br><br>Multiplayer Versus:<br>Face a friend or a stranger in Omada’s multiplayer mode!<br>Choose your pieces from all those available in the game and crush your opponent.<br><br>The closed beta is now available!<br>Request a Steam key by filling out the form below.`,
            'contact-title': 'Contact',
            'contact-name-label': 'Name:',
            'contact-email-label': 'Email:',
            'contact-message-label': 'Message:',
            'contact-button': 'Send',
            'footer': '© 2025 WhaleMain Studio. All rights reserved.',
            'game': 'Omada',
            'contact': 'Contact',
            'omadaKeyDemand-email-placeholder': 'Enter your email',
            'omadaKeyDemand-name-placeholder': 'Enter your name',
            'contact-name-placeholder': 'Enter your name',
            'contact-email-placeholder': 'Enter your email',
            'contact-message-placeholder': 'Enter your message',
            'flag': 'Images/Flags/englandFlag.png',
            'legal-title': 'Legal Notices',
            'legal-editor': 'Publisher:',
            'legal-director': 'Publication Director:',
            'legal-hosting': 'Hosting:',
            'legal-link': 'Legal Notices',
            'home-link': 'Home'
        },
        'es': {
            'welcome-title': 'WhaleMain Studio',
            'team-lead': 'Desarrollador Principal',
            'team-dev': 'Desarrollador',
            'omadaKeyDemand-label': 'Solicitar una clave beta para Omada:',
            'omadaKeyDemand-button': 'Unirse a la lista de espera',
            'confirmation-message': '¡Tu solicitud de clave está registrada!',
            'error-message': 'Hubo un error durante el envío.',
            'contact-confirmation-message': 'Tu mensaje ha sido enviado.',
            'game-title': 'Omada',
            'game-description': `Cruce del Desierto:<br>Debes sobrevivir con el resto de tu equipo después de un accidente.<br>Cruza el desierto de Omada para encontrar ayuda entre los investigadores de fluido negro que llegan de todo el universo.<br>Cada combate fatigará a tu equipo pero te permitirá reclutar nuevos miembros.<br><br>Versus multijugador:<br>¡Enfréntate a un amigo o a un extraño en el modo multijugador de Omada!<br>Elige tus piezas entre todas las disponibles en el juego y destruye a tu oponente.<br><br>¡La beta cerrada ya está disponible!<br>Solicita una clave de Steam llenando el formulario a continuación.`,
            'contact-title': 'Contacto',
            'contact-name-label': 'Nombre:',
            'contact-email-label': 'Correo electrónico:',
            'contact-message-label': 'Mensaje:',
            'contact-button': 'Enviar',
            'footer': '© 2025 WhaleMain Studio. Todos los derechos reservados.',
            'game': 'Omada',
            'contact': 'Contacto',
            'omadaKeyDemand-email-placeholder': 'Introduce tu correo electrónico',
            'omadaKeyDemand-name-placeholder': 'Introduce tu nombre',
            'contact-name-placeholder': 'Introduce tu nombre',
            'contact-email-placeholder': 'Introduce tu correo electrónico',
            'contact-message-placeholder': 'Introduce tu mensaje',
            'flag': 'Images/Flags/spainFlag.png',
            'legal-title': 'Avisos Legales',
            'legal-editor': 'Editor:',
            'legal-director': 'Director de Publicación:',
            'legal-hosting': 'Alojamiento:',
            'legal-link': 'Avisos Legales',
            'home-link': 'Inicio'
        },
        'ko': {
            'welcome-title': 'WhaleMain Studio',
            'team-lead': '리드 개발자',
            'team-dev': '개발자',
            'omadaKeyDemand-label': '오마다 베타 키 요청:',
            'omadaKeyDemand-button': '대기 목록에 등록',
            'confirmation-message': '베타 키 요청이 등록되었습니다.',
            'error-message': '전송 중 오류가 발생했습니다.',
            'contact-confirmation-message': '메시지가 전송되었습니다.',
            'game-title': '오마다',
            'game-description': `사막 횡단:<br>사고 후 나머지 팀원들과 함께 살아남아야 합니다.<br>오마다 사막을 횡단하여 우주 전역에서 오는 검은 액체 연구원들로부터 도움을 찾아야 합니다.<br>각 전투는 팀을 피로하게 하지만, 새로운 팀원을 모집할 수 있게 해줍니다.<br><br>대전 모드:<br>오마다의 멀티플레이어 모드에서 친구나 낯선 사람과 싸워보세요!<br>게임에서 제공되는 모든 피스를 선택하고 상대를 제압하세요.<br><br>현재 비공개 베타가 제공되고 있습니다!<br>아래 양식을 작성하여 Steam 키를 요청하세요.`,
            'contact-title': '연락처',
            'contact-name-label': '이름:',
            'contact-email-label': '이메일:',
            'contact-message-label': '메시지:',
            'contact-button': '보내기',
            'footer': '© 2025 WhaleMain Studio. 모든 권리 보유.',
            'game': '오마다',
            'contact': '연락처',
            'omadaKeyDemand-email-placeholder': '이메일을 입력하세요',
            'omadaKeyDemand-name-placeholder': '이름을 입력하세요',
            'contact-name-placeholder': '이름을 입력하세요',
            'contact-email-placeholder': '이메일을 입력하세요',
            'contact-message-placeholder': '메시지를 입력하세요',
            'flag': 'Images/Flags/southKoreaFlag.png',
            'legal-title': '법적 고지',
            'legal-editor': '편집자:',
            'legal-director': '발행인:',
            'legal-hosting': '호스팅:',
            'legal-link': '법적 고지',
            'home-link': '홈'
        },
        'ja': {
            'welcome-title': 'WhaleMain Studio',
            'team-lead': 'リード開発者',
            'team-dev': '開発者',
            'omadaKeyDemand-label': 'Omadaのベータキーをリクエスト:',
            'omadaKeyDemand-button': 'ウェイティングリストに登録',
            'confirmation-message': 'ベータキーのリクエストが登録されました。',
            'error-message': '送信中にエラーが発生しました。',
            'contact-confirmation-message': 'メッセージが送信されました。',
            'game-title': 'Omada',
            'game-description': `砂漠横断:<br>事故後、残りのチームとともに生き残らなければなりません。<br>Omada砂漠を横断して、宇宙中から来る黒液体の研究者たちに助けを求めましょう。<br>各戦闘はチームを疲れさせますが、新しいメンバーを迎えることができます。<br><br>対戦モード:<br>Omadaのマルチプレイヤーモードで友達や見知らぬ人と戦ってみてください！<br>ゲームにあるすべてのピースから選んで、相手を粉砕しましょう。<br><br>現在、クローズドベータが提供中です！<br>以下のフォームを記入してSteamキーをリクエストしてください。`,
            'contact-title': '連絡先',
            'contact-name-label': '名前:',
            'contact-email-label': 'メール:',
            'contact-message-label': 'メッセージ:',
            'contact-button': '送信',
            'footer': '© 2025 WhaleMain Studio. 全著作権所有。',
            'game': 'Omada',
            'contact': '連絡先',
            'omadaKeyDemand-email-placeholder': 'メールアドレスを入力してください',
            'omadaKeyDemand-name-placeholder': '名前を入力してください',
            'contact-name-placeholder': '名前を入力してください',
            'contact-email-placeholder': 'メールアドレスを入力してください',
            'contact-message-placeholder': 'メッセージを入力してください',
            'flag': 'Images/Flags/japanFlag.png',
            'legal-title': '法的通知',
            'legal-editor': '編集者:',
            'legal-director': '発行責任者:',
            'legal-hosting': 'ホスティング:',
            'legal-link': '法的通知',
            'home-link': 'ホーム'
        },
        'zh': {
            'welcome-title': 'WhaleMain Studio',
            'team-lead': '首席开发者',
            'team-dev': '开发者',
            'omadaKeyDemand-label': '请求Omada的测试版密钥:',
            'omadaKeyDemand-button': '加入等候名单',
            'confirmation-message': '您的密钥请求已注册。',
            'error-message': '发送过程中出现错误。',
            'contact-confirmation-message': '您的消息已发送。',
            'game-title': 'Omada',
            'game-description': `沙漠穿越：<br>你必须和你的队友一起在事故后生存下来。<br>穿越Omada沙漠，寻找来自宇宙各地的黑液研究人员的帮助。<br>每场战斗都会让你的团队疲惫，但你能招募到新成员。<br><br>对战模式：<br>在Omada的多人对战模式中与朋友或陌生人对抗！<br>从游戏中所有可用的棋子中选择并击败对手。<br><br>目前提供封闭测试版！<br>填写以下表格请求Steam密钥。`,
            'contact-title': '联系方式',
            'contact-name-label': '姓名:',
            'contact-email-label': '电子邮件:',
            'contact-message-label': '消息:',
            'contact-button': '发送',
            'footer': '© 2025 WhaleMain Studio. 版权所有。',
            'game': 'Omada',
            'contact': '联系方式',
            'omadaKeyDemand-email-placeholder': '输入您的电子邮件',
            'omadaKeyDemand-name-placeholder': '输入您的姓名',
            'contact-name-placeholder': '输入您的姓名',
            'contact-email-placeholder': '输入您的电子邮件',
            'contact-message-placeholder': '输入您的消息',
            'flag': 'Images/Flags/chinaFlag.png',
            'legal-title': '法律通知',
            'legal-editor': '编辑者:',
            'legal-director': '发行人:',
            'legal-hosting': '托管:',
            'legal-link': '法律通知',
            'home-link': '主页'
        },
        'ru': {
            'welcome-title': 'WhaleMain Studio',
            'team-lead': 'Главный разработчик',
            'team-dev': 'Разработчик',
            'omadaKeyDemand-label': 'Запросить бета-ключ для Omada:',
            'omadaKeyDemand-button': 'Присоединиться к листу ожидания',
            'confirmation-message': 'Ваш запрос на ключ зарегистрирован.',
            'error-message': 'Произошла ошибка при отправке.',
            'contact-confirmation-message': 'Ваше сообщение отправлено.',
            'game-title': 'Omada',
            'game-description': `Пересечение пустыни:<br>Вы должны выжить с остальной частью вашей команды после аварии.<br>Пересеките пустыню Омаду, чтобы найти помощь среди исследователей черной жидкости, прибывших со всего вселенной.<br>Каждое сражение будет утомлять вашу команду, но оно позволит вам находить новых рекрутов.<br><br>Режим противостояния:<br>Сразитесь с другом или незнакомцем в многопользовательском режиме Omada!<br>Выбирайте свои фигуры из всех доступных в игре и раздавите противника.<br><br>Закрытая бета уже доступна!<br>Запросите Steam-ключ, заполнив форму ниже.`,
            'contact-title': 'Контакт',
            'contact-name-label': 'Имя:',
            'contact-email-label': 'Электронная почта:',
            'contact-message-label': 'Сообщение:',
            'contact-button': 'Отправить',
            'footer': '© 2025 WhaleMain Studio. Все права защищены.',
            'game': 'Omada',
            'contact': 'Контакт',
            'omadaKeyDemand-email-placeholder': 'Введите ваш адрес электронной почты',
            'omadaKeyDemand-name-placeholder': 'Введите ваше имя',
            'contact-name-placeholder': 'Введите ваше имя',
            'contact-email-placeholder': 'Введите ваш адрес электронной почты',
            'contact-message-placeholder': 'Введите ваше сообщение',
            'flag': 'Images/Flags/russiaFlag.png',
            'legal-title': 'Правовые уведомления',
            'legal-editor': 'Редактор:',
            'legal-director': 'Директор публикации:',
            'legal-hosting': 'Хостинг:',
            'legal-link': 'Правовые уведомления',
            'home-link': 'Главная'
        }
    };


    const userLang = navigator.language || navigator.userLanguage;
    const languageMap = {
        'fr': 'fr',
        'en': 'en',
        'es': 'es',
        'ko': 'ko',
        'ja': 'ja',
        'zh': 'zh',
        'ru': 'ru'
    };

    const defaultLang = localStorage.getItem('selectedLanguage') || languageMap[userLang.split('-')[0]] || 'fr';
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
                    if (section === 'game-description') {
                        element.innerHTML = translation[section];
                    } else {
                        element.textContent = translation[section];
                    }
                }
            }
        });

        const emailInput = document.getElementById('omadaKeyDemand-email');
        if (emailInput) {
            emailInput.placeholder = translation['omadaKeyDemand-email-placeholder'];
        }

        const nameMessageInput = document.getElementById('name-message');
        if (nameMessageInput) {
            nameMessageInput.placeholder = translation['omadaKeyDemand-name-placeholder'];
        }

        const nameInput = document.getElementById('name');
        if (nameInput) {
            nameInput.placeholder = translation['contact-name-placeholder'];
        }

        const emailContactInput = document.getElementById('email');
        if (emailContactInput) {
            emailContactInput.placeholder = translation['contact-email-placeholder'];
        }

        const messageInput = document.getElementById('message');
        if (messageInput) {
            messageInput.placeholder = translation['contact-message-placeholder'];
        }
       
        flagImage.src = translation['flag'];

    }

    languageSelect.addEventListener('change', function () {
        const selectedLang = languageSelect.value;
        localStorage.setItem('selectedLanguage', selectedLang);
        translatePage(selectedLang);
    });

    translatePage(defaultLang);

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

    let bubblesNum = 0;

    function createBubbles() {
        const bubblesContainer = document.createElement('div');
        bubblesContainer.className = 'bubbles-container';
        document.body.appendChild(bubblesContainer);

        function createBubble() {
            if (bubblesNum < 50) {
                bubblesNum++;
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
        setInterval(createBubble, Math.random() * 50 + 1);
    }

    window.addEventListener('load', createBubbles);

    window.addEventListener('scroll', () => {
        const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        document.body.style.backgroundPosition = `center ${scrollPercentage * 100}%`;
    });
});
