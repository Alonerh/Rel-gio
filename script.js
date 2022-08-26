// Selecionando os elementos

let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

// Atualizando o relógio

// Funções
function updateClock() {
    let now = new Date(); // Não esquecer de colocar o ();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    let sDeg = ((360 / 60) * second) - 90; // o 90 é para corrigir o bug de ficar no tempo errado
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360/12) * hour) + ((30/60) * minute) - 90;
    /*Entre uma hora e outra temos um ângulo de 30 graus,
    o ponteiro percorrerá esse ângulo dentro dos 60 mins, logo a cada minuto o ponteiro percorrerá 0,5 grau.
    O minuto vai somente até 59 quando vai entrar no '60' ele vai pra próxima hora sendo o minuto 00, sendo assim não da nenhum bug.*/

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;

}

// Conserto do número isolado;
function fixZero(time) { 
    return time < 10 ? `0${time}` : time; // ** If - Resumido |  ? = Retorna | : = Caso contrário
}

setInterval(updateClock, 1000); // No setInterval a função deve ser feita fora
updateClock(); // Roda a função imeditamente ao abrir a página;
