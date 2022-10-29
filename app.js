let textAltura = document.getElementById("altura");
let inputAltura = document.getElementById("inputAltura");

inputAltura.addEventListener("input", function onChangeAltura(e) {
  e.preventDefault();
  let altura = document.getElementById("inputAltura").value;
  let text = `La altura del helicoptero es de ${altura} metros`;
  textAltura.innerHTML = text;
});

let button = document.getElementById("simulador");
let risco = document.getElementById("column1");

button.addEventListener("click", function (e) {
  e.preventDefault();
  let altura = document.getElementById("inputAltura").value;

  function validacion(altura) {
    if (altura == 0) {
      alert("Por favor ingrese los valores requeridos");
    } else {
      return true;
    }
  }

  function ball(altura) {
    let ball = document.createElement("div");
    ball.id = "ball";
    ball.class = "slide-top";
    let top = 255 - (altura - 1) * 60;

    if (altura == 1) {
      ball.style = "position:relative; top:255px;";
      risco.appendChild(ball);
    } else {
      ball.style = `position:relative; top:${top}px;`;
      risco.appendChild(ball);
    }
  }

  function key(altura) {
    let styleSheet = document.createElement("style");

    if (altura == 10) {
      let styles = `@keyframes mover {
        0% {
          transform: translateY(0rem);
        }
      
        100% {
          transform: translateY(38rem);
        }
      }`;
      styleSheet.innerText = styles;
      document.head.appendChild(styleSheet);
    }
    if (altura == 9) {
      let styles = `@keyframes mover {
        0% {
          transform: translateY(0rem);
        }
      
        100% {
          transform: translateY(34rem);
        }
      }`;
      styleSheet.innerText = styles;
      document.head.appendChild(styleSheet);
    }
    if (altura == 8) {
      let styles = `@keyframes mover {
        0% {
          transform: translateY(0rem);
        }
      
        100% {
          transform: translateY(30.5rem);
        }
      }`;
      styleSheet.innerText = styles;
      document.head.appendChild(styleSheet);
    }
    if (altura == 7) {
      let styles = `@keyframes mover {
        0% {
          transform: translateY(0rem);
        }
      
        100% {
          transform: translateY(26.5rem);
        }
      }`;
      styleSheet.innerText = styles;
      document.head.appendChild(styleSheet);
    }
    if (altura == 6) {
      let styles = `@keyframes mover {
        0% {
          transform: translateY(0rem);
        }
      
        100% {
          transform: translateY(23rem);
        }
      }`;
      styleSheet.innerText = styles;
      document.head.appendChild(styleSheet);
    }
    if (altura == 5) {
      let styles = `@keyframes mover {
        0% {
          transform: translateY(0rem);
        }
      
        100% {
          transform: translateY(19rem);
        }
      }`;
      styleSheet.innerText = styles;
      document.head.appendChild(styleSheet);
    }
    if (altura == 4) {
      let styles = `@keyframes mover {
        0% {
          transform: translateY(0rem);
        }
      
        100% {
          transform: translateY(15rem);
        }
      }`;
      styleSheet.innerText = styles;
      document.head.appendChild(styleSheet);
    }
    if (altura == 3) {
      let styles = `@keyframes mover {
        0% {
          transform: translateY(0rem);
        }
      
        100% {
          transform: translateY(12rem);
        }
      }`;
      styleSheet.innerText = styles;
      document.head.appendChild(styleSheet);
    }
    if (altura == 2) {
      let styles = `@keyframes mover {
        0% {
          transform: translateY(0rem);
        }
      
        100% {
          transform: translateY(7rem);
        }
      }`;
      styleSheet.innerText = styles;
      document.head.appendChild(styleSheet);
    }
    if (altura == 1) {
      let styles = `@keyframes mover {
        0% {
          transform: translateY(0rem);
        }
      
        100% {
          transform: translateY(4rem);
        }
      }`;
      styleSheet.innerText = styles;
      document.head.appendChild(styleSheet);
    }
  }
  function inputs(altura) {
    let g = 9.806;
    let inputVelocidad = document.getElementById("result1");
    let inputTiempo = document.getElementById("result2");
    let tiempo = Math.sqrt((2 * altura) / g).toFixed(4);
    let velocidad = (g * tiempo).toFixed(4);

    inputVelocidad.value = velocidad;
    inputTiempo.value = tiempo;
  }

  let text = `${altura * 60 + 50}px`;
  if (validacion(altura)) {
    let helicoptero = `<img src="heli.png"  style="position:absolute; bottom:${text};"> <div class="mar">
    <img src="nene.png" width="100%" alt="" />
  </div>`;
    risco.innerHTML = helicoptero;
    ball(altura);
    key(altura);
    inputs(altura);
    console.log(risco);
    console.log(helicoptero);
  }
});
