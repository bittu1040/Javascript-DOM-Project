
setInterval(() => {
    const time= new Date();

    document.getElementById("clock").innerHTML= time.toLocaleTimeString();
}, 1000);
