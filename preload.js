let table;
let r;
let selectedIndex; 
let infoBox;
let rows;
let cols;

// 1-4 Gallilean Satelite, 5-51 Lesser Satelite, 52-67 Unnamed Satelite, 68-79 Recently Discovered
function preload() {
	table = loadTable('JupiterMoonDataAll.csv','csv','header');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	ellipseMode(RADIUS);
	selectedIndex = 0;
		let rows = table.getRowCount();
	let cols = table.getColumnCount();
}