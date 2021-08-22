var counter = 0;
var table = document.getElementById("table");

function makeSomeWords()
{
	counter++;
	var x = document.getElementById("wordsSpace");
	x.innerHTML = Math.random();
	var bluePower = 10;
	var redPower = 20;
	
	
	for (let i = 0; i < table.children.length; i++) {
		for (let j = 0; j < i.children.length; j++) {
			j.innerHTML = "ayy";
		} 
	} 
	
}