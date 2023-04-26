let year;

year = 1900;

if (year % 4 == 0) {
    if(year % 100 == 0) {
        if ( year % 400 == 0) {
            console.log("This is a leap year")
        } else {
            console.log("This is not a leap year")
        }
    } else {
        console.log("This is a leap year")
    }
} else {
    console.log("Not is not a leap year")
}