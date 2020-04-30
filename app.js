var context ;
var shape// = new Object();
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var angle// = new Object();
var interval;
var board;
var ghostArray //= []
var arrayPos //= [];
var ExtraPoint //= new Object()
var counter// = 0;
var colors = ["DarkBlue", "CornflowerBlue"]
var turn //= 0;
var slowMotion //= 0;
var specialPill //= new Object()
var specialPillTime// = 0;
var stop// = false;
var moveSpeed //= 1;
var timerforEndstop //= 0;
var checker;
var dir = -3;
var pctOpen = 0.05;
var fltOpen = new Object();
var prevPackMove
//var music

var PLAYER_NAME = "Max"
var TIME = 200;
var BALLS_NUMBER = 90;
var GHOUST_NUMBER = 4;
var pacman_remain = 5;

var UP = 37;
var LEFT = 38
var DOWN = 39;
var RIGHT = 40


$(document).ready(function () {
	 context = canvas.getContext("2d");
});


function Start() {
	prevPackMove = 0;
	fltOpen.x = 0.15
	fltOpen.y = 1.85
	checker = false;
//	music = document.getElementById("Music")
//	music.play();
	pacman_remain = 5
	shape = new Object();
	angle = new Object();
	ghostArray = []
	arrayPos = [];
	ExtraPoint = new Object()
	counter = 0;
	ExtraPoint.x = 22
	ExtraPoint.y = 20
	turn = 0;
 	slowMotion = 0;
 	specialPill = new Object()
 	specialPillTime = 0;
 	this.stop = false;
 	moveSpeed = 1;
	timerforEndstop = 0;
	ExtraPoint.live = true
	board = [
		[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		[4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4],
		[4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 4, 4, 4, 4, 1, 4, 1, 4, 1, 4, 4, 4, 4, 1, 4],
		[4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 1, 1, 1, 1, 4, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 4],
		[4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 1, 1, 4, 1, 4, 4, 4, 4, 4, 1, 4, 1, 4, 1, 4, 1, 4, 4, 4, 1, 4, 4],
		[4, 1, 4, 1, 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 4],
		[4, 1, 4, 1, 4, 1, 4, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 1, 4, 4, 4, 1, 4, 1, 4, 1, 4, 1, 4, 4, 1, 4],
		[4, 1, 4, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 4, 1, 4, 1, 4, 4, 1, 4],
		[4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 4, 4, 1, 4, 1, 4, 4, 4, 1, 4, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 4],
		[4, 1, 4, 1, 1, 1, 4, 1, 4, 1, 4, 1, 1, 1, 4, 1, 1, 1, 4, 1, 4, 1, 4, 1, 4, 4, 4, 1, 4, 1, 4, 4],
		[4, 1, 1, 1, 4, 1, 1, 1, 4, 1, 4, 1, 4, 4, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 1, 1, 4, 1, 4, 1, 1, 4],
		[4, 4, 4, 1, 4, 1, 4, 4, 4, 1, 4, 1, 1, 1, 4, 1, 4, 1, 4, 1, 1, 1, 4, 1, 4, 1, 4, 1, 4, 4, 1, 4],
		[4, 1, 1, 1, 4, 1, 4, 1, 1, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 1, 4],
		[4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 1, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 4],
		[4, 1, 4, 1, 4, 1, 4, 1, 4, 4, 4, 1, 4, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 4, 1, 1, 4],
		[4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 4, 4, 4, 1, 4, 4, 4, 4, 1, 4, 4, 4, 4, 1, 4, 4, 1, 4],
		[4, 1, 4, 4, 4, 4, 4, 4, 4, 1, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 4],
		[4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 4, 4, 4, 4, 1, 4, 1, 4, 4, 4, 4, 4, 1, 4, 1, 4, 4, 1, 4, 4],
		[4, 1, 4, 4, 4, 1, 4, 1, 4, 1, 4, 1, 1, 1, 1, 4, 1, 4, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4],
		[4, 1, 1, 1, 1, 1, 4, 1, 4, 1, 4, 1, 4, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 4, 4, 1, 4, 1, 4],
		[4, 1, 4, 4, 4, 1, 4, 1, 1, 1, 4, 1, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 1, 1, 4, 1, 4, 1, 4],
		[4, 1, 4, 1, 1, 1, 4, 1, 4, 1, 4, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 4, 4, 1, 4, 1, 4, 1, 4],
		[4, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 20, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 4],
		[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
	];
	angle.x = 0.15;
	angle.y = 1.85;
	score = 0;
	pac_color = "yellow";
	var cnt = 100;
	var food_remain = BALLS_NUMBER;
	start_time = new Date();
	shape.i = 1;
	shape.j = 1;
	for (var i = 0; i < 24; i++) {
		for (var j = 0; j < 32; j++) {
			if (board[i][j] == 4 || board[i][j] == 0 || board[i][j] == 2 || board[i][j] == 5 || board[i][j] == 20) {
				continue;
			} else {
				board[i][j] = 0;
			}
		}
	}
	let blackBalls = (Math.floor)(food_remain * 0.6);
	let redBalls = (Math.floor)(food_remain * 0.3);
	let orangeBalls = (Math.floor)(food_remain * 0.1);
	let otherBalls = food_remain - (blackBalls + redBalls + orangeBalls);
	blackBalls = blackBalls + otherBalls
	while (blackBalls > 0) {
		var emptyCell = findRandomEmptyCell(board);
		board[emptyCell[0]][emptyCell[1]] = 11;
		blackBalls--;
	}
	while (redBalls > 0) {
		var emptyCell = findRandomEmptyCell(board);
		board[emptyCell[0]][emptyCell[1]] = 12;
		redBalls--;
	}
	while (orangeBalls > 0) {
		var emptyCell = findRandomEmptyCell(board);
		board[emptyCell[0]][emptyCell[1]] = 13;
		orangeBalls--;
	}
	for (let i = 0; i < 3; i++) {
		var emptyCell = findRandomEmptyCell(board);
		board[emptyCell[0]][emptyCell[1]] = 14;
	}

	specialPill = new Object();
	var emptyCell = findRandomEmptyCell(board);
	board[emptyCell[0]][emptyCell[1]] = 30;
	specialPill.x = emptyCell[0];
	specialPill.y = emptyCell[1];
	specialPill.live = true;

	arrayPos[0] = new Object();
	arrayPos[0].x = 1;
	arrayPos[0].y = 1;

	arrayPos[1] = new Object();
	arrayPos[1].x = 1;
	arrayPos[1].y = 30;

	arrayPos[2] = new Object();
	arrayPos[2].x = 22;
	arrayPos[2].y = 1;

	arrayPos[3] = new Object();
	arrayPos[3].x = 22;
	arrayPos[3].y = 30;

	shuffle(arrayPos)

	for (let i = 0; i < GHOUST_NUMBER; i++) {
		ghostArray[i] = new Object();
		ghostArray[i].x = arrayPos[i].x;
		ghostArray[i].y = arrayPos[i].y;
		board[ghostArray[i].x][ghostArray[i].y] = 5;
		ghostArray[i].prevMove = "n"
		ghostArray[i].prevItem = 0
	}

	var emptyCell = findRandomEmptyCell(board);
	board[emptyCell[0]][emptyCell[1]] = 2;
	shape.i = emptyCell[0];
	shape.j = emptyCell[1];
	keysDown = {};
	addEventListener(
		"keydown",
		function (e) {
			keysDown[e.keyCode] = true;
		},
		false
	);
	addEventListener(
		"keyup",
		function (e) {
			keysDown[e.keyCode] = false;
		},
		false
	);
	interval = setInterval(UpdatePosition, 150);
}

function findRandomEmptyCell(board) {
	var i = (Math.floor(Math.random() * 1000)) % 24;
	var j = (Math.floor(Math.random() * 1000)) % 32;
	while (board[i][j] != 0) {
		i = (Math.floor(Math.random() * 1000)) % 24;
		j = (Math.floor(Math.random() * 1000)) % 32;
	}
	return [i, j];
}

function findRandomEmptyCellOnBorder(board) {
	var i = (Math.floor(Math.random() * 1000)) % 2;
	if (i == 0)
		i = 30;
	var j = (Math.floor(Math.random() * 1000)) % 32;
	while (board[i][j] != 0) {
		i = (Math.floor(Math.random() * 1000)) % 24;
		if (i == 0)
			i = 30;
		j = (Math.floor(Math.random() * 1000)) % 32;
	}
	return [i, j];
}

function GetKeyPressed() {
	if (keysDown[UP]) { //UP
		return 1;
	}
	if (keysDown[DOWN]) { //down
		return 2;
	}
	if (keysDown[LEFT]) { //left
		return 3;
	}
	if (keysDown[RIGHT]) { //rig
		return 4;
	}
}

function Draw(pctOpen) {
	canvas.width = canvas.width; //clean board
	lblScore.value = score
	lblTime.value = time_elapsed
	lbllives.value = pacman_remain
	lbName.value = PLAYER_NAME

	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board[i].length; j++) {
			var center = new Object();
			center.x = j * 20 + 10;
			center.y = i * 20 + 10;
			if (board[i][j] == 2) { //2
				context.beginPath();
				context.arc(center.x, center.y, 10, (this.angle.x - pctOpen.x) * Math.PI, (this.angle.y + pctOpen.y) * Math.PI);
				context.lineTo(center.x, center.y);
				context.closePath();
				context.fillStyle = "#FF0";
				context.fill();
				context.strokeStyle = '#000';
				context.stroke();
			 
			} else if (board[i][j] == 11) { //1
				context.beginPath();
				context.arc(center.x, center.y, 5, 0, 2 * Math.PI); // circle
				context.fillStyle = "grey"; //color
				context.fill();
			}
			else if (board[i][j] == 12) { //1
				context.beginPath();
				context.arc(center.x, center.y, 5, 0, 2 * Math.PI); // circle
				context.fillStyle = "red"; //color
				context.fill();
			}
			else if (board[i][j] == 13) { //1
				context.beginPath();
				context.arc(center.x, center.y, 5, 0, 2 * Math.PI); // circle
				context.fillStyle = "orange"; //color
				context.fill();
			}
			else if (board[i][j] == 14) { //1
				context.beginPath();
				context.arc(center.x, center.y, 5, 0, 2 * Math.PI); // circle
				context.fillStyle = "Tan"; //color
				context.fill();
			}

			else if (board[i][j] == 30) { //1
				context.beginPath();
				context.arc(center.x, center.y, specialPillTime % 7, 0, 2 * Math.PI); // circle
				context.fillStyle = "SaddleBrown"; //color
				context.fill();
			}
			else if (board[i][j] == 20) { //1
				context.beginPath();
				context.arc(center.x, center.y, 5, 0, 2 * Math.PI); // circle
				context.fillStyle = colors[counter]
				if (counter == 1) {
					counter = 0
				}
				else {
					counter = 1
				}
				context.fill();
			}
			else if (board[i][j] == 4) { // 4
				context.beginPath();
				context.rect(center.x - 10, center.y - 10, 20, 20);
				context.fillStyle = "black"; //color
				context.fill();
			} else if (board[i][j] == 5) {
				context.beginPath();
				context.arc(
					(center.x - 10) + 10,
					(center.y - 10) + 10,
					10,
					0, Math.PI, true
				);
				if (stop) {
					context.fillStyle = "Blue";
				}
				else {
					context.fillStyle = "Coral"; //color
				}
				context.lineTo((center.x - 10), (center.y - 10) + 20 * (3 / 4));
				for (let i = 1; i <= 4; ++i) {
					context.bezierCurveTo(
						(center.x - 10) + 20 * (i * 2 - 1) / (4 * 2), (center.y - 10) + 20,
						(center.x - 10) + 20 * (i * 2 - 1) / (4 * 2), (center.y - 10) + 20,
						(center.x - 10) + 20 * i / 4, (center.y - 10) + 20 * (3 / 4)
					);
				}
				context.lineTo((center.x - 10) + 20, (center.y - 10) + 10);
				context.closePath();
				context.stroke();
				context.fill();
			}
		}
	}
}

function UpdatePosition() {
	checker = false;
	board[shape.i][shape.j] = 0;
	movePackman();
	if (!stop) {
		if (slowMotion > 0) {
			if (slowMotion % 4 == 2) {
				moveGhost();
			}
			slowMotion--;
		}
		else {
			if (moveSpeed == 1) {
				moveGhost();
				moveSpeed = 0;
			}
			else {
				moveSpeed++
			}
		}
	}
	else {
		if (timerforEndstop == 20) {
			stop = false;
			timerforEndstop = 0;
		}
		else {
			timerforEndstop++;
			stop = true;
		}
	}
	if (specialPill.live) {
		if (specialPillTime == 21) {
			specialPillTime = 0;
			var emptyCell = findRandomEmptyCell(board);
			board[specialPill.x][specialPill.y] = 0;
			board[emptyCell[0]][emptyCell[1]] = 30;
			specialPill.x = emptyCell[0];
			specialPill.y = emptyCell[1];
		}
		else {
			specialPillTime++;
		}
	}
	eatBall();
	ExtraPointMove();
	collision();
	var currentTime = new Date();
	time_elapsed = TIME - (currentTime - start_time) / 1000;
	if (score >= 20 && time_elapsed <= 10) {
		pac_color = "green";
	}
	if (time_elapsed == 0 && score < 100) {
		window.clearInterval(interval);
	//	music.pause()
		window.alert("You are better than " + score + " points!");
		Start()
	}
	if (time_elapsed == 0 && score >= 100) {
		window.clearInterval(interval);
	//	music.pause()
		window.alert("Winner!!!");
		Start()
	}
	if (pacman_remain == 0) {
		window.clearInterval(interval);
	//	music.pause()
		window.alert("Loser!");
		Start()
	}
	else {
		fltOpen.x = pctOpen*dir
		fltOpen.y = pctOpen*dir
		if(dir ==3){
		dir = -3;
		}
		else{
			dir++
		}
		Draw(fltOpen);
	}
}

function stopGame(){
	window.clearInterval(interval);
}

function ExtraPointMove() {
	if (ExtraPoint.live) {
		if (turn == 2) {
			let isMoved = false
			let i = Math.floor(Math.random() * 4);
			while (!isMoved) {
				i = Math.floor(Math.random() * 4);
				switch (i) {
					case 0: {
						if (ExtraPoint.y < board[0].length && board[ExtraPoint.x][ExtraPoint.y + 1] != 4 && board[ExtraPoint.x][ExtraPoint.y + 1] != 5 && board[ExtraPoint.x][ExtraPoint.y + 1] != 2) { //right
							board[ExtraPoint.x][ExtraPoint.y] = ExtraPoint.prevItem;
							ExtraPoint.y++;
							ExtraPoint.prevItem = board[ExtraPoint.x][ExtraPoint.y];
							board[ExtraPoint.x][ExtraPoint.y] = 20;
							isMoved = true;
							break;
						}
					}
					case 1: {
						if (ExtraPoint.y > 0 && board[ExtraPoint.x][ExtraPoint.y - 1] != 4 && board[ExtraPoint.x][ExtraPoint.y - 1] != 5 && board[ExtraPoint.x][ExtraPoint.y - 1] != 2) { //left
							board[ExtraPoint.x][ExtraPoint.y] = ExtraPoint.prevItem;
							ExtraPoint.y--;
							ExtraPoint.prevItem = board[ExtraPoint.x][ExtraPoint.y];
							board[ExtraPoint.x][ExtraPoint.y] = 20;
							isMoved = true;
							break;
						}
					}
					case 2: {
						if (ExtraPoint.x > 0 && board[ExtraPoint.x - 1][ExtraPoint.y] != 4 && board[ExtraPoint.x - 1][ExtraPoint.y] != 5 && board[ExtraPoint.x - 1][ExtraPoint.y] != 2) { //up
							board[ExtraPoint.x][ExtraPoint.y] = ExtraPoint.prevItem;
							ExtraPoint.x--;
							ExtraPoint.prevItem = board[ExtraPoint.x][ExtraPoint.y];
							board[ExtraPoint.x][ExtraPoint.y] = 20;
							isMoved = true;
							break;
						}
					}
					case 3: {
						if (ExtraPoint.y < board[0].length && board[ExtraPoint.x + 1][ExtraPoint.y] != 4 && board[ExtraPoint.x + 1][ExtraPoint.y] != 5 && board[ExtraPoint.x + 1][ExtraPoint.y] != 2) { //up
							board[ExtraPoint.x][ExtraPoint.y] = ExtraPoint.prevItem;
							ExtraPoint.x++;
							ExtraPoint.prevItem = board[ExtraPoint.x][ExtraPoint.y];
							board[ExtraPoint.x][ExtraPoint.y] = 20;
							isMoved = true;
							break;
						}
					}
				}
			}
			turn = 0
		}
		else {
			turn++
		}
	}
}

function collision() {
	for(let u=0 ; u < GHOUST_NUMBER ; u++){
		if (shape.i == ghostArray[u].x && shape.j == ghostArray[u].y)
		checker = true
	}
	if (checker) {
		score = score - 10
		pacman_remain = pacman_remain - 1
		for (let i = 0; i < GHOUST_NUMBER; i++) {
			board[ghostArray[i].x][ghostArray[i].y] = 0;
			ghostArray[i] = new Object();
			ghostArray[i].x = arrayPos[i].x;
			ghostArray[i].y = arrayPos[i].y;
			board[ghostArray[i].x][ghostArray[i].y] = 5;
			ghostArray[i].prevMove = "n"
			ghostArray[i].prevItem = 0
		}
		var emptyCell = findRandomEmptyCell(board);
		board[emptyCell[0]][emptyCell[1]] = 2;
		shape.i = emptyCell[0];
		shape.j = emptyCell[1];
	}
	else if (board[shape.i][shape.j] == 20) {
		score = score + 50
		ExtraPoint.live = false;
	}
	else {
		board[shape.i][shape.j] = 2;
	}
}

function movePackman() {
	let isMoved = false;
	var x = GetKeyPressed();
	if (x == 1 ) {
		if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
			if(shape.j > 0 && board[shape.i][shape.j - 1] == 5){
				checker = true;
			}
			shape.j--;
			angle.x = 1.15;
			angle.y = 2.85;
			isMoved = true;
			prevPackMove = x;
		}
	}
	if (x == 2) {
		if (shape.j < board[0].length && board[shape.i][shape.j + 1] != 4) {
			if(shape.j < board[0].length && board[shape.i][shape.j + 1] == 5){
				checker = true;
			}
			shape.j++;
			angle.x = 0.15;
			angle.y = 1.85;
			isMoved = true;
			prevPackMove = x;
		}
	}
	if (x == 3) {
		if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
			if(shape.i > 0 && board[shape.i - 1][shape.j]  == 5){
				checker = true;
			}
			shape.i--;
			angle.x = 1.66;
			angle.y = 1.35;
			isMoved = true;
			prevPackMove = x;
		}
	}
	if (x == 4) {
		if (shape.i < board.length && board[shape.i + 1][shape.j] != 4) {
			if(shape.i < board.length && board[shape.i + 1][shape.j] == 5){
				checker = true;
			}
			shape.i++;
			angle.x = 0.65;
			angle.y = 2.35;
			isMoved = true;
			prevPackMove = x;
		}
	}
	if(!isMoved){
		if (prevPackMove == 1 ) {
			if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
				if(shape.j > 0 && board[shape.i][shape.j - 1] == 5){
					checker = true;
				}
				shape.j--;
				angle.x = 1.15;
				angle.y = 2.85;

			}
		}
		if (prevPackMove == 2) {
			if (shape.j < board[0].length && board[shape.i][shape.j + 1] != 4) {
				if(shape.j < board[0].length && board[shape.i][shape.j + 1] == 5){
					checker = true;
				}
				shape.j++;
				angle.x = 0.15;
				angle.y = 1.85;
			}
		}
		if (prevPackMove == 3) {
			if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
				if(shape.i > 0 && board[shape.i - 1][shape.j]  == 5){
					checker = true;
				}
				shape.i--;
				angle.x = 1.66;
				angle.y = 1.35;
			}
		}
		if (prevPackMove == 4) {
			if (shape.i < board.length && board[shape.i + 1][shape.j] != 4) {
				if(shape.i < board.length && board[shape.i + 1][shape.j] == 5){
					checker = true;
				}
				shape.i++;
				angle.x = 0.65;
				angle.y = 2.35;
			}
		}
	}
}

function eatBall() {
	if (board[shape.i][shape.j] == 11) {
		score = score + 5
	}
	if (board[shape.i][shape.j] == 12) {
		score = score + 15
	}
	if (board[shape.i][shape.j] == 13) {
		score = score + 25
	}
	if (board[shape.i][shape.j] == 20) {
		score = score + 50
		ExtraPoint.live = false;
	}
	if (board[shape.i][shape.j] == 14) {
		slowMotion = 30;
	}
	if (board[shape.i][shape.j] == 30) {
		stop = true;
		specialPill.live = false
	}

}

function moveGhost() {
	for (let k = 0; k < GHOUST_NUMBER; k++) {
		var left = Math.abs((ghostArray[k].x) - shape.i) + Math.abs((ghostArray[k].y - 1) - shape.j)
		var right = Math.abs((ghostArray[k].x) - shape.i) + Math.abs((ghostArray[k].y + 1) - shape.j)
		var up = Math.abs((ghostArray[k].x - 1) - shape.i) + Math.abs((ghostArray[k].y) - shape.j)
		var down = Math.abs((ghostArray[k].x + 1) - shape.i) + Math.abs((ghostArray[k].y) - shape.j)
		let isChanges = false;
		let option = 5;
		let min = 100000;

		if (ghostArray[k].y > 0 && board[ghostArray[k].x][ghostArray[k].y - 1] != 4 && left < min && ghostArray[k].prevMove != "right" && board[ghostArray[k].x][ghostArray[k].y - 1] != 5 && board[ghostArray[k].x][ghostArray[k].y - 1] != 20 && board[ghostArray[k].x][ghostArray[k].y - 1] != 30) { // left
			option = 0
			min = left
			isChanges = true;
		}
		if (ghostArray[k].y < board[0].length && board[ghostArray[k].x][ghostArray[k].y + 1] != 4 && right < min && ghostArray[k].prevMove != "left" && board[ghostArray[k].x][ghostArray[k].y + 1] != 5 && board[ghostArray[k].x][ghostArray[k].y + 1] != 20 && board[ghostArray[k].x][ghostArray[k].y - 1] != 30) { // right
			option = 1
			min = right
			isChanges = true
		}
		if (ghostArray[k].x > 0 && board[ghostArray[k].x - 1][ghostArray[k].y] != 4 && up < min && ghostArray[k].prevMove != "down" && board[ghostArray[k].x - 1][ghostArray[k].y] != 5 && board[ghostArray[k].x - 1][ghostArray[k].y] != 20 && board[ghostArray[k].x][ghostArray[k].y - 1] != 30) { // up
			option = 2
			min = up
			isChanges = true
		}
		if (ghostArray[k].x < board.length && board[ghostArray[k].x + 1][ghostArray[k].y] != 4 && down < min && ghostArray[k].prevMove != "up" && board[ghostArray[k].x + 1][ghostArray[k].y] != 5 && board[ghostArray[k].x + 1][ghostArray[k].y] != 20 && board[ghostArray[k].x][ghostArray[k].y - 1] != 30) { // down
			option = 3
			min = down
			isChanges = true;
		}
		if (!isChanges) {
			ghostArray[k].prevMove = "n"
		}
		board[ghostArray[k].x][ghostArray[k].y] = ghostArray[k].prevItem
		switch (option) {
			case 0:
				goLeft(k);
				ghostArray[k].prevMove = "left"
				break;
			case 1:
				goRight(k);
				ghostArray[k].prevMove = "right"
				break;
			case 2:
				goUp(k);
				ghostArray[k].prevMove = "up"
				break;
			case 3:
				goDown(k);
				ghostArray[k].prevMove = "down"
				break;
			default:
				break;
		}
		if (!(board[ghostArray[k].x][ghostArray[k].y] == 5)) {
			ghostArray[k].prevItem = board[ghostArray[k].x][ghostArray[k].y];
		}
		board[ghostArray[k].x][ghostArray[k].y] = 5;
	}
}

function shuffle(a) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}

function goDown(k) {
	if (ghostArray[k].x < board.length && board[ghostArray[k].x + 1][ghostArray[k].y] != 4) { //down
		ghostArray[k].x++;
		//board[ghostArray[k].x][ghostArray[k].y] = 5;
	}
}

function goUp(k) {
	if (ghostArray[k].x > 0 && board[ghostArray[k].x - 1][ghostArray[k].y] != 4 ) { //up
		ghostArray[k].x--;
		//board[ghostArray[k].x][ghostArray[k].y] = 5;
	}
}

function goLeft(k) {
	if (ghostArray[k].y > 0 && board[ghostArray[k].x][ghostArray[k].y - 1] != 4 ) { //left
		ghostArray[k].y--;
		//	board[ghostArray[k].x][ghostArray[k].y] = 5;
	}
}

function goRight(k) {
	if (ghostArray[k].y < board[0].length && board[ghostArray[k].x][ghostArray[k].y + 1] != 4) { //right
		ghostArray[k].y++;
		//	board[ghostArray[k].x][ghostArray[k].y] = 5;
	}
}

window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);