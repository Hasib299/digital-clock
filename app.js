
 const houre		= document.getElementById('hour');
 const minute 		= document.getElementById('minute');
 const secound 		= document.getElementById('secound');
 const progress 	= document.getElementById('progress');


function digitalClock() {
	
	let date = new Date();

	let hr	 = date.getHours();
	let min  = date.getMinutes();
	let sec  = date.getSeconds();
	
	progress.style.width=(sec/60)*100+"%";

	houre.textContent 		= hr;
	minute.textContent 		= min; 
	secound.textContent	    = sec; 


	if (hr > 12 ) {
			document.getElementById('hour').innerHTML = (hr-12);
	 }else{
		document.getElementById('hour').innerHTML =hr;
	 }
}
setInterval(digitalClock,1000);

	var date = new Date();
	var day = date.getDay();

	switch (day) {
		case 0:
			day = "রবিবার";
			break;
		case 1:
			day = "সোমবার";
			break;
		case 2:
			day = "মঙ্গলবার";
			break;
		case 3:
			day = "বুধবার";
			break;
		case 4:
			day = "বৃহস্পতিবার";
			break;
		case 5:
			day = "শুক্রবার";
			break;
		case 6:
			day = " শনিবার";
			break;
	}
	document.getElementById("days").innerHTML = day;

	var dhoure = date.getHours();

if (dhoure>4 && dhoure<10) {
	document.querySelector("#usr_mdg").innerHTML=("Good morning....");
}
else if(dhoure>10 && dhoure<17){
	document.querySelector("#usr_mdg").innerHTML=("Have a good Day....");
}
else if(dhoure>17 && dhoure<20){
	document.querySelector("#usr_mdg").innerHTML=("Good evening....");
}else{
	document.querySelector("#usr_mdg").innerHTML=("Good Night....");
}


var months = date.getMonth();

	switch (months) {
		case 0:
			months = "January";
			break;
		case 1:
			months = "February";
			break;
		case 2:
			months = "March";
			break;
		case 3:
			months = "April";
			break;
		case 4:
			months = "May";
			break;
		case 5:
			months = "June";
			break;
		case 6:
			months = "July";
			break;
		case 7:
			months = "August";
			break;
		case 8:
			months ="September";
			break;
		case 9:
			months = "October";
			break;
		case 10:
			months = "November";
			break;
		case 11:
			months = "December";
			break;
	}


	var days = date.getDate()+"  "+ months;
	var year = date.getFullYear();

	document.getElementById("date").innerHTML = days;
	document.getElementById("year").innerHTML = "Years "+year;


	document.getElementById("date").style.color="red";
	document.getElementById("year").style.color="red";
	