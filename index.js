const keyLoger = document.querySelector('input');

const divAlert = document.querySelector('div');

const blacklist = ["a", "b", "c", "d", "e"];

function onKeyLog(eventInfo) {
    for (let i = 0; i < blacklist.length; i++) {
        if (eventInfo.key === blacklist[i])  {
            eventInfo.preventDefault();
            divAlert.style.borderColor = 'red';
            return console.error(`'${eventInfo.key}' is forbidden!`);
        }
       
    }
    divAlert.style.borderColor  = 'black';
    console.log(`User pressed: '${eventInfo.key}'`)
}

keyLoger.addEventListener('keydown', onKeyLog);