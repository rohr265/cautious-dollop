var table = document.getElementById("table");

var tableArray=[];
var redCells=[];
var blueCells=[];
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
	
	let p = document.getElementById("bCellX").value; // pulls coordinates from the text boxes
	let q = document.getElementById("bCellY").value;
	
	convertToBlue(tableArray[p][q]);
	
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
			if (possibleTargets[i].owner == "none") 
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

function expandBlueDong() // Created a separate function for now, because I didn't want the variables to get too complicated if 
						  // everything was in the expand dong function... Once the number of teams is set by the user, this 
						  // will all be dynamic anyways
{
	// go thru all the blue cells
	let allPossibleTargets = [];
	for (let q=0; q<blueCells.length; q++)
	{
		let x = blueCells[q].x;
		let y = blueCells[q].y;
		let possibleTargets = getSurroundingCells(x,y);
		
		// only look at cells that aren't blue yet
		for (let i=0; i<possibleTargets.length; i++)
		{
			if (possibleTargets[i].owner == "none")
			{
				allPossibleTargets.push(possibleTargets[i]);
			}
		}
	}
	// choose a random target
	if (allPossibleTargets.length>0)
	{
		let target = allPossibleTargets[Math.floor(Math.random()*allPossibleTargets.length)];
		convertToBlue(target);
	}
}

function expandBoth() 
{
	redTarget = [];
	blueTarget = [];
	combatCells = [];
	
	// go thru all the red cells
	let allPossibleRedTargets = [];
	
	for (let q=0; q<redCells.length; q++)
	{
		let x = redCells[q].x;
		let y = redCells[q].y;
		let possibleTargets = getSurroundingCells(x,y);
		
		// only look at cells that aren't red yet
		for (let i=0; i<possibleTargets.length; i++)
		{
			if (possibleTargets[i].owner == "none") 
			{
				allPossibleRedTargets.push(possibleTargets[i]);
			}
		}
	}
	// choose a random target
	if (allPossibleRedTargets.length>0)
	{
		redTarget = allPossibleRedTargets[Math.floor(Math.random()*allPossibleRedTargets.length)];
		//convertToRed(redTarget);
		
	}
	
	
	
	// go thru all the blue cells
	let allPossibleBlueTargets = [];
	for (let p=0; p<blueCells.length; p++)
	{
		let x = blueCells[p].x;
		let y = blueCells[p].y;
		let possibleTargets = getSurroundingCells(x,y);
		
		// only look at cells that aren't blue yet
		for (let i=0; i<possibleTargets.length; i++)
		{
			if (possibleTargets[i].owner == "none")
			{
				allPossibleBlueTargets.push(possibleTargets[i]);
			}
		}
	}
	// choose a random target
	if (allPossibleBlueTargets.length>0)
	{
		blueTarget = allPossibleBlueTargets[Math.floor(Math.random()*allPossibleBlueTargets.length)];
		//convertToBlue(blueTarget);
	}
	
	//checking for combat
	if (redTarget !== blueTarget)
	{
		convertToRed(redTarget);
		convertToBlue(blueTarget);
		
	}else
	{
		redTarget.node.style.backgroundColor = "yellow";
		redTarget.owner = "combat";
		combatCells.push(redTarget);
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

function convertToBlue(cell)
{
	cell.node.style.backgroundColor = "blue";
	cell.owner = "blue";
	blueCells.push(cell)
}