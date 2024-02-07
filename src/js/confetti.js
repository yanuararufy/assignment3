import confetti from "canvas-confetti";
const myCanvas = document.getElementById('confetti');
// document.body.appendChild(myCanvas);
myCanvas.addEventListener("click", ()=>{
    // const scalar = 8;
    // const watermolon = confetti.shapeFromText({ text: '🍉', scalar });
  
  confetti({
    particleCount: 100,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
  });
    confetti(config)
})
