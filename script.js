digitalEl = document.querySelector('.digital')
sEl = document.querySelector('.p_s')
mEl = document.querySelector('.p_m')
hEl = document.querySelector('.p_h')

function updateClock() {
    let now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()

    digitalEl.innerHTML = `${defaultTime(hours)}:${defaultTime(minutes)}:${defaultTime(seconds)}`

    let sdeg = ((360 / 60) * seconds) - 90;
    let mdeg = ((360 / 60) * minutes) - 90;
    let hdeg = ((360 / 12) * hours) - 90;

    sEl.style.transform = `rotate(${sdeg}deg)`
    mEl.style.transform = `rotate(${mdeg}deg)`
    hEl.style.transform = `rotate(${hdeg}deg)`
}

function defaultTime(time) {
    return time < 10 ? `0${time}` : time
}

setInterval(updateClock, 1000)
updateClock()