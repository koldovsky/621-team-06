(function(){
setInterval(clockDoer, 1000)

function clockDoer(){
let clock = document.querySelector('.clock');
clock.innerText = new Date().toLocaleTimeString();
}
clockDoer()
})();