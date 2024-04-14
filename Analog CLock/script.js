function updateClock(){
    const now = new Date();
    console.log("now: " , now)
    const hour = now.getHours() % 12;
    const minute = now.getMinutes();
    const second = now.getSeconds();
    console.log("hour: ", hour);
    console.log("Minute: ", minute);
    console.log("Second: ", second);

    const hourAngle =(hour * 30) + (0.5 * minute); // 30 deg from per hour , 0.5 deg per minute
    const minuteAngle =(minute * 6) + (0.1 * second); // 6 deg per minute , 0.1 deg per second
    const secondAngle = second * 6; // 6 degrees per second
    console.log("hour: ", hourAngle)
    console.log("Minute: ", minuteAngle)
    console.log("Second: ", secondAngle)

    document.getElementById('hourHand').style.transform = `rotate(${hourAngle}deg)`;
    document.getElementById('minuteHand').style.transform = `rotate(${minuteAngle}deg)`;
    document.getElementById('secondHand').style.transform = `rotate(${secondAngle}deg)`;
} 

setInterval(updateClock, 1000);