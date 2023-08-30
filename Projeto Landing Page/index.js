// Função para atualizar o contador
function updateTimer() {
    var timerElement = document.getElementById('demo');
    var currentTime = new Date().getTime();
    var startTime = localStorage.getItem('startTime');
    var elapsedTime = currentTime - startTime;
  
    // Tempo em milissegundos (30 minutos = 30 * 60 * 1000)
    var timeLimit = 30 * 60 * 1000;
  
    // Se o tempo excedeu o limite, reseta o contador
    if (elapsedTime >= timeLimit) {
      localStorage.setItem('startTime', currentTime);
      elapsedTime = 0;
    }
  
    // Calcula o tempo restante em minutos e segundos
    var remainingTime = timeLimit - elapsedTime;
    var minutes = Math.floor(remainingTime / 60000);
    var seconds = Math.floor((remainingTime % 60000) / 1000);
  
    // Formata o tempo com dois dígitos
    var formattedTime = ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
  
    // Atualiza o elemento com o tempo restante
    timerElement.innerHTML = formattedTime;
  }
  
  // Verifica se há um tempo de início armazenado
  if (!localStorage.getItem('startTime')) {
    localStorage.setItem('startTime', new Date().getTime());
  }
  
  // Atualiza o contador a cada segundo
  setInterval(updateTimer, 1000);