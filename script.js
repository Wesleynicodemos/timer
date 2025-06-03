const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
const timer = document.querySelector('.timer')

let hora = 0
let min = 0
let seg= 0
let contador = null

function formatar(valor) {
  return valor < 10 ? `0${valor}` : `${valor}`;
}

iniciar.addEventListener('click', ()=>{
    if (contador === null) {
        contador =  setInterval(contadorseg, 1000)
    }
    timer.classList.remove('pausado')  
})

pausar.addEventListener('click',()=>{
    clearInterval(contador)
    contador = null
    timer.classList.add('pausado')
    iniciar.innerText = "continuar"
})

zerar.addEventListener('click', (e)=> {
    clearInterval(contador)
    hora = 0
    min = 0
    seg= 0
    contador = null
    timer.innerHTML = "00:00:00"
    iniciar.innerText = "Iniciar"
})

 function contadorseg() {
    seg++
    
    if (seg > 59) {
    seg=0
    min++
    }

    if (min > 59) {
    min=0
    hora++
    }
   
    const tempoFormatado = `${formatar(hora)}:${formatar(min)}:${formatar(seg)}`
    timer.innerHTML = `${tempoFormatado}` 
   
}