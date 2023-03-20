let fecha = document.getElementById('fecha')
let enviar = document.getElementById('enviar')
let tempMin = document.getElementById('tempMin')
let tempMax = document.getElementById('tempMax')
let fechareg = document.getElementById('fechareg')
let clima = document.getElementById('clima')
let clima2 = document.getElementById('clima2')
let clima3 = document.getElementById('clima3')
let nuevo = document.getElementById('nuevo')

var today = new Date().toISOString().slice(0,10);


nuevo.addEventListener('click',function(evento){
    enviar.disabled = false
    fecha.innerHTML = "";
    tempMin.innerHTML = "";
    tempMax.innerHTML = "";
    fechareg.innerHTML = "";
    clima.innerHTML = "";
    clima2.innerHTML = "";
    clima3.innerHTML = "";
    }
)


enviar.addEventListener('click',function(evento){
    evento.preventDefault();
    if(fecha.value != today )
    {
        setTimeout(()=>{
    fechareg.innerHTML = "Fecha: " + fecha.value;
    const climas = ['Despejado','Nublado','Lluvioso'];
    const climaM1 = climas[Math.floor(Math.random() * climas.length)];
    clima.innerHTML = "Mañana: " + climaM1;
    function randomTempMax(){
        var min = 9;
        var max = 30;
        return Math.floor(Math.random()*(+max - +min) + +min);
    }
    tempMax.innerHTML = "Temperatura Maxima: " + randomTempMax() +"°C"
    function randomTempMin(){
        var min = 5;
        var max = 8;
        return Math.floor(Math.random()*(+max - +min) + +min);
    }
    tempMin.innerHTML = "Temperatura Minima: " + randomTempMin() +"°C"
    },1000)
        enviar.disabled = true}

    else
    {
        setTimeout(()=>{
    fechareg.innerHTML = fecha.value
    const climas = ['Despejado','Nublado','Lluvioso'];
    const climaM = climas[Math.floor(Math.random() * climas.length)];
    const climaT= climas[Math.floor(Math.random() * climas.length)];
    const climaN = climas[Math.floor(Math.random() * climas.length)];
    clima.innerHTML = "Mañana: " + climaM;
    clima2.innerHTML = "Tarde: " + climaT;
    clima3.innerHTML = "Noche: " + climaN;
        function randomTempMax(){
            var min = 9;
            var max = 30;
            return Math.floor(Math.random()*(+max - +min) + +min);
        }
    tempMax.innerHTML = "Temperatura Maxima: " + randomTempMax() +"°C"
        function randomTempMin(){
            var min = 5;
            var max = 8;
            return Math.floor(Math.random()*(+max - +min) + +min);
        }
    tempMin.innerHTML = "Temperatura Minima: " + randomTempMin() +"°C"
        },1000)
        enviar.disabled = true}
    }
)
