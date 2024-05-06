// Funkcja generująca losowy kolor
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Pobranie referencji do przycisków
const startButton = document.querySelector("[data-start]");
const stopButton = document.querySelector("[data-stop]");

// przycisk "Stop" jest nieaktywny
stopButton.disabled = true;

let intervalId; // Zmienna przechowująca ID interwału

// Funkcja obsługująca kliknięcie przycisku "Start"
function handleStartButtonClick() {
  startButton.disabled = true; // Dezaktywacja przycisku "Start"
  stopButton.disabled = false; // Aktywacja przycisku "Stop"

  // Rozpoczęcie interwału zmieniającego kolor tła co sekundę
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

// Funkcja obsługująca kliknięcie przycisku "Stop"
function handleStopButtonClick() {
  startButton.disabled = false; // Aktywacja przycisku "Start"
  stopButton.disabled = true; // Dezaktywacja przycisku "Stop"

  // Zatrzymanie interwału zmieniającego kolor tła
  clearInterval(intervalId);
}

// Dodanie nasłuchiwania na kliknięcia przycisków
startButton.addEventListener("click", handleStartButtonClick);
stopButton.addEventListener("click", handleStopButtonClick);
