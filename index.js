var counter = 0;
var table = document.getElementById("table");
var rows = table.children;
function makeSomeWords()
{
	
	var x = document.getElementById("wordsSpace");
	x.innerHTML = Math.random();
	var bluePower = 10;
	var redPower = 20;
	
	for (let j = 0; j < rows[counter].children.length; j++) {
		rows[counter].children[j].style.backgroundColor = "red";
	} 
	
	counter++;
	
}