const currentDay = () => {
    let weekday = new Array(7);
    weekday[0] = "SUN";
    weekday[1] = "MON";
    weekday[2] = "TUE";
    weekday[3] = "WED";
    weekday[4] = "THU";
    weekday[5] = "FRI";
    weekday[6] = "SAT";

        let day = new Date().getDay();
        return weekday[day]; 
}

const currentDate = () => {
    let date = new Date().getDate();
    return date;
}
const currentMonth = () => {
    let Allmonths = new Array(12);
    Allmonths[0] = "Jan"; 
    Allmonths[1] = "Fab"; 
    Allmonths[2] = "Mar"; 
    Allmonths[3] = "Apr"; 
    Allmonths[4] = "May"; 
    Allmonths[5] = "Jun"; 
    Allmonths[6] = "Jul"; 
    Allmonths[7] = "Aug"; 
    Allmonths[8] = "Sep"; 
    Allmonths[9] = "Oct"; 
    Allmonths[10] = "Nov"; 
    Allmonths[11] = "Dec";
     
    let month = new Date().getMonth()
    return Allmonths[month];
}
let yr = new Date().getFullYear();

document.getElementById('day').textContent = `${currentDay()}`;
document.getElementById('date').textContent = `${currentDate()} `;
document.getElementById('month').textContent = `${currentMonth()} `;
document.getElementById('year').textContent = `${yr} `;
