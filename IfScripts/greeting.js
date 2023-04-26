let currentHour = new Date
let result = currentHour.getHours();

if (result < 10) {
    console.log("Good Morning!")
} else if (result >= 10 && result < 17) {
    console.log("Good Day!")
} else if (result >= 17 && result < 24) {
    console.log("Good Evening!")
} else {
    console.log("There has been an error!!!")
}
