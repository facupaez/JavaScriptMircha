const d = document;

export function digitalClock(clock, btnPlay, btnStop){
    let clockTempo;

    d.addEventListener("click", e =>{
        if(e.target.matches(btnPlay)){
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            }, 1000);
    d.querySelector(btnPlay).disabled = true;
        }

        if(e.target.matches(btnStop)){
            clearInterval(clockTempo);
             d.querySelector(clock).innerHTML = null;
            d.querySelector(btnPlay).disabled = false;
        }
    });
}

export function alarm(alarm, btnOn, btnOff){
    let alarmTempo;
    const $alarm = d.createElement("audio");
    $alarm.src = alarm;

    d.addEventListener("click", (e) =>{
        if(e.target.matches(btnOn)){
            alarmTempo = setTimeout(() => {
                $alarm.play();
            }, 2000);
            d.querySelector(btnOn).disabled = true;
        }
    });

    d.addEventListener("click", (e) =>{
        if(e.target.matches(btnOff)){
            clearTimeout(alarmTempo);
            $alarm.pause();
            $alarm.currentTime = 0;
            d.querySelector(btnOn).disabled = false;
        }
    });
}