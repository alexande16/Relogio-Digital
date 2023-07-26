var horas = document.getElementById('horas')
var minutos = document.getElementById('minutos')
var segundos = document.getElementById('segundos')

let interval = setInterval(function(){
    relogio()


}, 100)

function relogio(){

    var watch = new Date()

    horas.innerText = watch.getHours();
    minutos.innerText = watch.getMinutes();
    segundos.innerText = watch.getSeconds();
    
}








   
