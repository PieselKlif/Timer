num = document.getElementsByClassName("num");

function getTimeAsDigitList() {
	const now = new Date();

	const hours = String(now.getHours()).padStart(2, '0');
	const minutes = String(now.getMinutes()).padStart(2, '0');
	const seconds = String(now.getSeconds()).padStart(2, '0');
	
	const timeString = hours + minutes + seconds;
	
	const digitList = timeString.split('').map(Number);
	
	return digitList;
}

function update() {
	time = getTimeAsDigitList();

	for (let index = 0; index < num.length; index++) {
		const element = num[index];
		
		element.style = "margin-top: calc(-1.15em * " + time[index] + ");";
	}
}

setInterval(update, 250);