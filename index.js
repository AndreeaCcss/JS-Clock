const s = document.getElementById("seconds")
const m = document.getElementById("minutes")
const h = document.getElementById("hours")

function time() {
    let d = new Date();
    
    let sec = d.getSeconds();
    let min = d.getMinutes();
    let hrs = d.getHours();

    h.textContent = `${doubleDigits(hrs)}:`
    m.textContent = `${doubleDigits(min)}:`
    s.textContent = doubleDigits(sec)
}

setInterval(time, 1000);

function doubleDigits(val){
    if (val < 10){
        return "0" + val;
    }
    return val;
}