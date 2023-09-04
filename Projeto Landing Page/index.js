        // Função para atualizar o contador de tempo
        function updateTimer() {
            var timerElement = document.getElementById('demo');
            var currentTime = new Date().getTime();

            // Obtém o tempo inicial armazenado nos cookies (se existir)
            var initialTime = parseFloat(getCookie('initialTime')) || currentTime;

            // Limite de tempo em milissegundos (30 minutos = 30 * 60 * 1000)
            var timeLimit = 30 * 60 * 1000;

            // Calcula o tempo restante em minutos e segundos
            var remainingTime = timeLimit - (currentTime - initialTime);
            var minutes = Math.floor(remainingTime / 60000);
            var seconds = Math.floor((remainingTime % 60000) / 1000);

            // Formata o tempo com dois dígitos
            var formattedTime = ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);

            // Atualiza o elemento com o tempo restante
            timerElement.innerHTML = formattedTime;

            // Armazena o tempo inicial nos cookies
            setCookie('initialTime', initialTime, 365); // Armazena por 1 ano
        }        

        // Função para definir um cookie
        function setCookie(name, value, days) {
            var expires = '';
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = '; expires=' + date.toUTCString();
            }
            document.cookie = name + '=' + value + expires + 'path=D:\COOKIES';
        }

        // Função para obter o valor de um cookie
        function getCookie(name) {
            var nameEQ = name + '=';
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i];
                while (cookie.charAt(0) == ' ') {
                    cookie = cookie.substring(1, cookie.length);
                }
                if (cookie.indexOf(nameEQ) == 0) {
                    return cookie.substring(nameEQ.length, cookie.length);
                }
            }
            return null;
        }

        // Atualiza o contador a cada segundo
        setInterval(updateTimer, 1000);

        // Inicializa o tempo inicial se ainda não estiver definido
        if (!getCookie('initialTime')) {
            setCookie('initialTime', new Date().getTime(), 1); // Armazena por 1 dia
        }
   