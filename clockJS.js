// let a = new Date()

// setInterval(() => {
//     let a = new Date();
//     console.log(a);
// }, 1000);

let a;
let b;


let twelveHr = function twelveHrs() {

    clearTimeout(b);

    let date = new Date()
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()
    let session = "AM"

    if (hh == 0) {
        hh = 12;
    }
    if (hh > 12) {
        hh = hh - 12;
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss + " " + session;

    document.getElementById("clock").innerHTML = time;


    a = setTimeout(function () {
        twelveHrs();
    }, 1000);


}

// x();
// ************* //

let twentyfourHr = function twentyfourHrs() {

    clearTimeout(a);

    let date = new Date()
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()
    // let session = "AM"

    // if (hh == 0){
    //     hh = 12;
    // }
    // if (hh > 12){
    //     hh = hh - 12;
    //     session - "PM";
    // }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss;

    document.getElementById("clock").innerHTML = time;



    b = setTimeout(function () {
        twentyfourHrs();
    }, 1000);



}

twelveHr();

// const btn1 = document.getElementById("btn1")
// const btn2 = document.getElementById("btn2")

btn1.addEventListener('click', twelveHr);
btn2.addEventListener('click', twentyfourHr);

