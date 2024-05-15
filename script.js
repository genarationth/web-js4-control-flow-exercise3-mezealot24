/*## Exercise3 from Exercise1 or Exercise2
Instead of printing the day of the week, your program should **print whether it is the weekend or  weekday**. for example "Wednesday" then show "It is the weekday!"
Use the logical operators.*/

const dayNumber = 4;

    switch (dayNumber) {
        case 0:
            console.log("Sunday");
            console.log("It is the weekend")
            break;
        case 1:
            console.log("Monday");
            console.log("It is the weekday")
            break;
        case 2:
            console.log("Tuesday");
            console.log("It is the weekday")
            break;
        case 3:
            console.log("Wednesday");
            console.log("It is the weekday")
            break;
        case 4:
            console.log("Thursday");
            console.log("It is the weekday")
            break;
        case 5:
            console.log("Friday");
            console.log("It is the weekday")
            break;
        case 6:
            console.log("Saturday");
            console.log("It is the weekend")
            break;
        default:
            console.log("Invalid day number");
    }

