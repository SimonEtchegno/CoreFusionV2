ScrollReveal().reveal('.principios1',{ delay:900});
ScrollReveal().reveal('.principios2',{ delay:1000});
ScrollReveal().reveal('.principios3',{ delay:1100});
ScrollReveal().reveal('.pInformacion',{ delay:1000});
ScrollReveal().reveal('.imgSection',{ delay:850});
ScrollReveal().reveal('.containerMarcasBG',{ delay:500});
ScrollReveal().reveal('.tituloRazon',{ delay:1000});
ScrollReveal().reveal('.services1',{ delay:1000});
ScrollReveal().reveal('.services2',{ delay:1100});
ScrollReveal().reveal('.citaContainer',{ delay:500});
ScrollReveal().reveal('.c',{ delay:800});

const maquina4 = document.getElementById('maquina-escribir4')
const maquinaEscribir4 = (text = '',tiempo = 200, etiqueta = '') => {
    let arrayCaracteres = text.split('')
    etiqueta.innerHTML = ''
    let i = 0
    let escribir = setInterval(function(){
      if (arrayCaracteres[i] === '*') {
        etiqueta.innerHTML += '</br>' 
      } else {
        etiqueta.innerHTML += arrayCaracteres[i] 
      }
      if (i === arrayCaracteres.length) {
        etiqueta.innerHTML = ''
        i = -1
      }
      i++
    }, tiempo)
  }

  const letra = "";

  maquinaEscribir4( '"Trabajar con CoreFusion fue muy profesional y la mejor decisión que  hemos tomado  hasta ahora en una empresa de TI."' ,60, maquina4);


