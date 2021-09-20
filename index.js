var table = document.getElementById("table");

var tableArray=[];
var redCells=[];
var gridWidth=0;
var gridHeight=0;


function makeTable(width, height)
{
	gridWidth = width;
	gridHeight = height;
	
	
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
			tempNode.innerHTML = i + ", " + j;
			tempCol.appendChild(tempNode);
			
			tableArray[i][j] = {
				node: tempNode,
				owner: "none",
				x: i,
				y: j
			};
		}		
		
	}
}

makeTable(8,8);

function cellExampleButton()
{
	let x = document.getElementById("cellX").value; // pulls coordinates from the text boxes
	let y = document.getElementById("cellY").value;
	
	convertToRed(tableArray[x][y]);
	
}

function expandDong()
{
	// go thru all the red cells
	let allPossibleTargets = [];
	for (let q=0; q<redCells.length; q++)
	{
		let x = redCells[q].x;
		let y = redCells[q].y;
		let possibleTargets = getSurroundingCells(x,y);
		
		// only look at cells that aren't red yet
		for (let i=0; i<possibleTargets.length; i++)
		{
			if (possibleTargets[i].owner!=="red")
			{
				allPossibleTargets.push(possibleTargets[i]);
			}
		}
	}
	// choose a random target
	if (allPossibleTargets.length>0)
	{
		let target = allPossibleTargets[Math.floor(Math.random()*allPossibleTargets.length)];
		convertToRed(target);
	}
}


function getSurroundingCells(x, y)
{
	let a = [];
	
	for (let i = Math.max(0,x-1); i<=Math.min(gridWidth-1,parseInt(x)+1); i++)
	{
		for (let j = Math.max(0,y-1); j<=Math.min(gridHeight-1,parseInt(y)+1); j++)
		{
			a.push(tableArray[i][j]);
		}
	}
	return a;
}

function convertToRed(cell)
{
	cell.node.style.backgroundColor = "red";
	cell.owner = "red";
	redCells.push(cell);
}