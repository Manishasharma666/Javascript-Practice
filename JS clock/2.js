const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate(){
    const date = new Date();
    const seconds = date.getSeconds();

    const secondsDegree = ((seconds/60)* 360) + 90;  // +90 because we rotated hands by 90 degree in starting to keep all hands at 12
    secondHand.style.transform =  `rotate(${secondsDegree}deg)`;

    const minutes = date.getMinutes();
    const minutesDegree = ((minutes/60)*360)  + 90;  //+ ((seconds/60)*6)
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

    const hours = date.getHours();
    const hoursDegree = ((hours/12)*360)  + 90; //+ ((minutes/60)*30)
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;

}

setInterval(setDate, 1000);

setDate();