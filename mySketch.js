function draw() {
	background(0);
	let rows = table.getRowCount();
	let cols = table.getColumnCount();
	for (let i = 0; i < rows; i++) {
		const rowNum = table.getRow(i);
		const columnValue = rowNum.get(3);
		if (columnValue <= 12) {
			r = 3;
		} else if (columnValue <= 85) {
			r = 7;
		} else if (columnValue <= 200) {
			r = 15;
		} else if (columnValue <= 2000) {
			r = 20;
		} else if (columnValue <= 4000) {
			r = 40;
		}
		const axisValue = rowNum.get(1);
		let y = windowHeight / 2 + axisValue / 120 + 55 - (i + 1) * 20;
		if (50 > i > 30) {
			y = windowHeight / 2 + axisValue / 120 + 55 - i * 12;
		}
		if (65 > i > 50) {
			y = windowHeight / 2 + axisValue / 120 + 55 - (i - 50) * 10;
		}
		if (65 < i < 80) {
			y = windowHeight / 2 - axisValue / 120 - 55 + i * 5;
		}
		if (axisValue < 1000) {
			y = windowHeight / 2 + axisValue / 120 + 55 - (i + 1) * 10;
		}
		if (i == 5) {
			y = windowHeight / 2 + axisValue / 120 + 55;
		}
		let x = -sqrt(sq(axisValue / 120 + 55) - sq(windowHeight / 2 - y)) + windowWidth / 2;
		if (i % 2 == 1) {
			x = sqrt(sq(axisValue / 120 + 55) - sq(windowHeight / 2 - y)) + windowWidth / 2;
		}
		stroke(0);
		if (i === selectedIndex) {
			stroke(256);
			rect(900, 330, 375, 200);
			const row = table.getRow(i);
			textSize(20);
			for (let j = 0; j < cols; j++) {
				const colValue = row.get(j);
				fill(256);
				text(`${table.columns[j]}: ${colValue}`, 900, 330 + (j + 1) * 200 / cols - 10);
			}
			stroke(256);
			line(x, y, 900, 330);
		}
		if (i <= 3) {
			fill(0, 50, 200);
		}
		if (i <= 50 && i > 3) {
			fill(200, 0, 0);
		}
		if (i <= 67 && i > 50) {
			fill(0, 200, 0);
		}
		if (i <= 78 && i > 67) {
			fill(200, 0, 200);
		}
		circle(x, y, r);
		noFill()
		stroke(120, 50);
		circle(windowWidth / 2, windowHeight / 2, axisValue / 120 + 55);
	}
	stroke(256);
	rect(50, 40, 250, 150);
	fill(0, 50, 200);
	rect(55, 55, 35, 25);
	fill(200, 0, 0);
	rect(55, 85, 35, 25);
	fill(0, 200, 0);
	rect(55, 115, 35, 25);
	fill(200, 0, 200);
	rect(55, 145, 35, 25);
	fill(256);
	text('- Gallilean Satelite', 100, 75);
	text('- Lesser Satelite', 100, 105);
	text('- Unnamed Satelite', 100, 135);
	text('- Recently Discovered', 100, 165);
	noFill()
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		selectedIndex--;
		if (selectedIndex < 0) {
			selectedIndex = rows - 1;
		}
	}
	if (keyCode === UP_ARROW) {
		selectedIndex++;
		if (selectedIndex >= rows) {
			selectedIndex = 0;
			if (selectedIndex < 0) {
				selectedIndex = rows - 1;

			}
		}
	}
}