// Datos - cada imagen con su nota
const notes = [
  { img: "espagetijpg.jpg",      text: "Pensé que me encantaba el spaguetti, pero luego te conocí a ti y me di cuenta que tú me encantas." },
  { img: "foca-alien.jpg",       text: "Mi amor por ti es algo imposible de medir, incluso podría decir que es fuera de este mundo." },
  { img: "foca-elegante.png",    text: "Amor, no importa lo que la vida nos tenga por delante, saldremos juntos de todo lo que venga." },
  { img: "foca-enamorada.jpg",   text: "Todo lo mío es tuyo y todo lo tuyo quiero que sea mío. Te amo, Kath." },
  { img: "foca-lista.png",       text: "Yo siempre voy a creer en ti, porque sé lo lista que eres y lo mucho que te esfuerzas. Eres mi más grande orgullo, Kath." },
  { img: "foca-mamada.png",      text: "Si alguien se atreviera algún día a lastimarte, que ni le rece al de arriba, porque para allá lo voy a mandar." },
  { img: "gato-pene.jpg",        text: "No sé si la imagen quite un poco el ambiente romántico jeje, pero quería que rieras un rato, preciosa." },
  { img: "nana.jpg",             text: "Eres una gran persona, amor. Eres buena, amable y una pareja increíble. De verdad, cada día contigo es maravilloso." },
  { img: "pizza.jpg",            text: "Una pizza de corazón para la persona que se robó mi corazón." },
  { img: "tapioca.jpg",          text: "Yo viéndote bien emocionado (ojos de tapioca xd)." },
  { img: "tiburon-panzon.jpg",   text: "Mira un tiburón panzón, todo bonito, todo panzón." },
  { img: "tuyyo.jpeg",           text: "Jugar Sky contigo es lo mejor. Me relajo tanto que incluso olvido la hora. De verdad me encanta pasar tiempo contigo. Como te dije una vez, hablar contigo es lo mejor de mi día." },
  { img: "ice-spice.jpg",        text: "Sé que eres fan de ella, así que mira un dibujito de Ice Spice." }
];

const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');
const continueBtn = document.querySelector('.continue-btn');
const drawBtn = document.getElementById('drawBtn');
const currentImage = document.getElementById('currentImage');
const noteText = document.getElementById('noteText');

// Ir a pantalla 2
continueBtn.addEventListener('click', () => {
  screen1.classList.remove('active');
  setTimeout(() => {
    screen2.classList.add('active');
    // Mostrar primera imagen al entrar (opcional)
    const first = notes[0];
    currentImage.src = first.img;
    noteText.textContent = first.text;
  }, 800);
});

// Lógica de "sacar nota"
drawBtn.addEventListener('click', () => {
  if (drawBtn.disabled) return;
  
  drawBtn.disabled = true;
  drawBtn.textContent = "Girando... 💫";
  noteText.textContent = "¡Saliendo sorpresa!";

  // Efecto ruleta
  currentImage.classList.add('rolling');

  // Duración total del giro ~2.8–3.5 segundos
  const spinTime = 2800 + Math.random() * 700;

  setTimeout(() => {
    currentImage.classList.remove('rolling');
    
    // Elegir nota aleatoria
    const randomIndex = Math.floor(Math.random() * notes.length);
    const selected = notes[randomIndex];

    currentImage.src = selected.img;
    noteText.textContent = selected.text;

    drawBtn.disabled = false;
    drawBtn.textContent = "Sacar otra nota 💌";
  }, spinTime);
});
