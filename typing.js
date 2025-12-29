const texts = [
  "Full Stack Web Developer",
  "PHP Laravel Developer",
  "MySQL Expert"
];

let count = 0;
let index = 0;

function type() {
  const current = texts[count];
  document.getElementById("typing").textContent =
    current.slice(0, ++index);

  if (index === current.length) {
    setTimeout(() => {
      index = 0;
      count = (count + 1) % texts.length;
    }, 1500);
  }

  setTimeout(type, 100);
}

type();
