function currentTime() {
    let date = new Date(); // returns the browsers date and time zone
    let hh = date.getHours(); // return hour
    let mm = date.getMinutes(); // return minute

    /* 
    Since 'getHours' and 'getMinutes' return numbers between 0-24 we want that IF 
     'hh' and 'mm' are less than 10, we want to add a "0" before hh and mm 🕰️
    */

    hh = (hh < 10) ? "0" + hh : hh; 
    mm = (mm < 10) ? "0" + mm : mm;

    let time = hh + ":" + mm;
    document.querySelector('#clock').innerText = time;

    /* 
    And since the new Date() is static, and we want the clock to keep running
    we write this code, so the code updates every second.
    */


    let t = setTimeout(function(){ 
        currentTime() 
    }, 1000);
}


currentTime();