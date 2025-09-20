// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "She's got a smile that it seems to me", time: 31 },
  { text: "Reminds me of childhood memories", time: 34, },
  { text: "Where everything was as fresh", time: 38 },
  { text: "As the bright blue sky", time: 41 },
  { text: "Now and then when I see her face", time: 46 },
  { text: "She takes me away to that special place", time: 49,5 },
  { text: "And if I stared too long", time: 53,5 },
  { text: "I'd probably break down and cry", time: 56 },
  { text: "Whoa, oh-oh", time: 61,5 },
  { text: "Sweet child o' mine", time: 64 },
  { text: "Whoa, oh-oh-oh", time: 69 },
  { text: "Sweet love of mine", time: 71,5 },
  { text: "She's got eyes of the bluest skies", time: 92 },
  { text: "As if they thought of rain", time: 96 },
  { text: "I'd hate to look into those eyes", time: 100 },
  { text: "And see an ounce of pain", time: 103,5 },
  { text: "Her hair reminds me of a warm, safe place", time: 107,5 },
  { text: "Where as a child I'd hide", time: 112 },
  { text: "And pray for the thunder and the rain", time: 115,5 },
  { text: "To quietly pass me by", time: 119,5 },
  { text: "Whoa oh, sweet child of mine", time: 122 },
  { text: "Whoa-whoa, oh-oh, oh-oh", time: 129,5 },
  { text: "Sweet love of mine", time: 132 },
  { text: "Whoa, oh-oh-oh, sweet child of mine, ooh yeah", time: 137 },
  { text: "Ooh-ooh, sweet love of mine", time: 146 },
  { text: "Where do we go? Where do we go now?", time: 217 },
  { text: "Where do we go? Mm-mm, oh", time: 220 },
  { text: "Oh, where do we go now?", time: 224,5 },
  { text: "Where do we go? (Sweet child)", time: 231 },
  { text: "Mm-huh, where do we go now?", time: 235 },
  { text: "Ah-yah-yah-yah-yah-yah-yah-yah-oh", time: 240 },
  { text: "Where do we go? Where do we go now?", time: 244 },
  { text: "Sweet child", time: 270 },
  { text: "Sweet ch-yah-yah-yah-ild of mine", time: 273 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 303 segundos (303,000 milisegundos)
setTimeout(ocultarTitulo, 303000);