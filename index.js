var table = document.getElementById("table");

var tableArray=[];


function makeTable(width, height)
{
	
	// Nested loop to create all the cells
	for (let i=0; i<width; i++)
	{
		let tempCol = document.createElement("div");
		tempCol.className = "col";
		table.appendChild(tempCol);
		
		tableArray[i] = [];
		
		for (let j=0; j<height; j++)
		{
			let tempNode = document.createElement("div");
			tempNode.className = "cell";
			tempCol.appendChild(tempNode);
			
			tableArray[i][j] = tempNode;
		}		
		
	}
}

makeTable(8,5);

function cellExampleButton()
{
	let x = document.getElementById("cellX").value;
	let y = document.getElementById("cellY").value;
	
	getCell(x, y).style.backgroundColor = "red";
	
}


function getCell(x, y)
{
	return tableArray[x][y];
}