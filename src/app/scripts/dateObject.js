// CURRENT DATE
var currentDate = new Date();

// YEAR
var currentYear = currentDate.getFullYear().toString();
var currentShortYear = currentYear.toString().substr(2,2);

// MONTH
var currentMonth = currentDate.getMonth();
var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
var currentMonthName = monthNames[currentMonth];

// DAY
var currentDay = currentDate.getDay();
var currentDayNumber = currentDate.getDate().toString();
var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var currentDayName = dayNames[currentDay];

// SET ALL VARIABLES ON PAGE
var dayNumberPlaceHodler = document.querySelectorAll(".js-date-dayNumber");
dayNumberPlaceHodler.forEach(function(dayNumbers){
	dayNumbers.innerText = currentDayNumber;
})
var dayOfTheWeekPlaceHolder = document.querySelectorAll(".js-date-dayOfTheWeek");
dayOfTheWeekPlaceHolder.forEach(function(days){
	days.innerText = currentDayName;
})
var monthPlaceHolder = document.querySelectorAll(".js-date-month");
monthPlaceHolder.forEach(function(months){
	months.innerText = currentMonthName;
})
var shortYearPlaceHolder = document.querySelectorAll(".js-date-shortYear");
shortYearPlaceHolder.forEach(function(years){
	years.innerText = currentShortYear;
})
var fullYearPlaceHolder = document.querySelectorAll(".js-date-fullYear");
fullYearPlaceHolder.forEach(function(years){
	years.innerText = currentYear;
})