export default function convertDate(_date) {
    const date = new Date(_date*1000)
    const year = date.getFullYear();
    const month = getMonthName(date);
    const day = date.getDate();
    const dayName = getDayName(date);

    const convertedDate = `${dayName}, ${day} ${month} ${year}`;
    return convertedDate;
}

function getMonthName(date) {
    let monthName;
    switch(date.getMonth()) {
        case 0:
            monthName = "January";
        break;
        case 1:
            monthName = "February";
        break;
        case 2:
            monthName = "March";
        break;
        case 3:
            monthName = "April";
        break;
        case 4:
            monthName = "May";
        break;
        case 5:
            monthName = "June";
        break;
        case 6:
            monthName = "July";
        break;
        case 7:
            monthName = "August";
        break;
        case 8:
            monthName = "September";
        break;
        case 9:
            monthName = "October";
        break;
        case 10:
            monthName = "November";
        break;
        case 11:
            monthName = "December";
        break;
    }
    return monthName
}

function getDayName(date) {
    let dayName;
    switch(date.getDay()) {
        case 0:
            dayName = "Sunday";
        break;
        case 1:
            dayName = "Monday";
        break;
        case 2:
            dayName = "Tuesday";
        break;
        case 3:
            dayName = "Wednesday";
        break;
        case 4:
            dayName = "Thursday";
        break;
        case 5:
            dayName = "Friday";
        break;
        case 6:
            dayName = "Saturday";
        break;
    }
    return dayName;
}
