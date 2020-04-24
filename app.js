var context;
var shape = new Object();
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var angle = new Object();
var interval;
var board;
var  ghostArray = []
var arrayPos = [];


var TIME = 10;
var BALLS_NUMBER = 150;
var GHOUST_NUMBER = 4;
var pacman_remain = 5;

var UP = 37;
var LEFT = 38
var DOWN = 39;
var RIGHT = 40


$(document).ready(function() {
	context = canvas.getContext("2d");
	Start();
});

function Start() { 
	board = [
		[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
		[4,1,1,1,4,1,1,1,1,1,4,1,1,1,4,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,1,4],
		[4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,4,4,4,4,1,4,1,4,1,4,4,4,4,1,4],
		[4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,1,1,1,1,4,1,4,1,4,1,1,1,1,1,1,4],
		[4,1,4,1,4,1,4,1,4,1,1,1,4,1,4,4,4,4,4,1,4,1,4,1,4,1,4,4,4,1,4,4],
		[4,1,4,1,1,1,1,1,4,1,4,1,1,1,1,1,1,1,4,1,1,1,4,1,4,1,1,1,1,1,1,4],
		[4,1,4,1,4,1,4,4,4,1,4,4,4,4,4,4,4,1,4,4,4,1,4,1,4,1,4,1,4,4,1,4],
		[4,1,4,1,4,1,4,1,1,1,1,1,1,1,1,1,4,1,1,1,4,1,1,1,4,1,4,1,4,4,1,4],
		[4,1,4,1,4,1,4,1,4,1,4,4,4,1,4,1,4,4,4,1,4,1,4,1,1,1,1,1,4,1,1,4],
		[4,1,4,1,1,1,4,1,4,1,4,1,1,1,4,1,1,1,4,1,4,1,4,1,4,4,4,1,4,1,4,4],
		[4,1,1,1,4,1,1,1,4,1,4,1,4,4,4,1,4,1,4,1,4,1,4,1,1,1,4,1,4,1,1,4],
		[4,4,4,1,4,1,4,4,4,1,4,1,1,1,4,1,4,1,4,1,1,1,4,1,4,1,4,1,4,4,1,4],
		[4,1,1,1,4,1,4,1,1,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,1,4],
		[4,1,4,1,4,1,4,1,4,1,1,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,4],
		[4,1,4,1,4,1,4,1,4,4,4,1,4,1,4,1,1,1,1,1,4,1,1,1,1,1,4,1,4,1,1,4],
		[4,1,4,1,1,1,1,1,1,1,4,1,4,1,4,4,4,1,4,4,4,4,1,4,4,4,4,1,4,4,1,4],
		[4,1,4,4,4,4,4,4,4,1,4,1,4,1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,4,1,1,4],
		[4,1,1,1,1,1,1,1,4,1,4,1,4,4,4,4,1,4,1,4,4,4,4,4,1,4,1,4,4,1,4,4],
		[4,1,4,4,4,1,4,1,4,1,4,1,1,1,1,4,1,4,1,4,1,1,1,1,1,4,1,1,1,1,1,4],
		[4,1,1,1,1,1,4,1,4,1,4,1,4,4,1,4,1,4,1,4,1,4,1,4,1,4,4,4,1,4,1,4],
		[4,1,4,4,4,1,4,1,1,1,4,1,1,4,1,4,1,4,1,4,1,4,1,4,1,1,1,4,1,4,1,4],
		[4,1,4,1,1,1,4,1,4,1,4,4,1,4,1,4,1,4,1,4,1,4,1,4,4,4,1,4,1,4,1,4],
		[4,1,1,1,4,1,1,1,4,1,1,1,1,4,1,1,1,4,1,1,1,4,1,1,1,1,1,4,1,1,1,4],
		[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
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
			if (board[i][j]==4 ||board[i][j]==0 || board[i][j]==2  ||board[i][j]==5  )
			 {
				continue;
			} else {
				board[i][j] = 0;
			 }
		}
	}
	let blackBalls = (Math.floor) (food_remain * 0.6 );
	let redBalls = (Math.floor) (food_remain * 0.3);
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
	
	for(let i = 0; i < GHOUST_NUMBER ; i++){
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
		function(e) {
			keysDown[e.keyCode] = true;
		},
		false
	);
	addEventListener(
		"keyup",
		function(e) {
			keysDown[e.keyCode] = false;
		},
		false
	);
	interval = setInterval(UpdatePosition, 150);
}

function findRandomEmptyCell(board) {
	var i = (Math.floor(Math.random() * 1000 ))%24;
	var j = (Math.floor(Math.random() * 1000 ))%32;
	while (board[i][j] != 0) {
		i = (Math.floor(Math.random() * 1000 ))%24;
		j = (Math.floor(Math.random() * 1000 ))%32;
	}
	return [i, j];
}

function findRandomEmptyCellOnBorder(board) {
	var i = (Math.floor(Math.random() * 1000 ))%2;
	if ( i == 0)
	 i = 30;
	var j = (Math.floor(Math.random() * 1000 ))%32;
	while (board[i][j] != 0) {
		i = (Math.floor(Math.random() * 1000 ))%24;
		if ( i == 0)
		i = 30;
		j = (Math.floor(Math.random() * 1000 ))%32;
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

function Draw() {
	canvas.width = canvas.width; //clean board
	lblScore.value = score;
	lblTime.value = time_elapsed;
	lbllives.value = pacman_remain;
	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j <board[i].length; j++) {
			var center = new Object();
			center.x = j * 20 + 10;
			center.y = i * 20 + 10;
			if (board[i][j] == 2) { //2
				context.beginPath();
				context.arc(center.x, center.y, 10, angle.x * Math.PI, angle.y * Math.PI); // half circle
				context.lineTo(center.x, center.y);
				context.fillStyle = pac_color; //color
				context.fill();
				context.beginPath();
				context.arc(center.x + 5, center.y - 5, 2, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();
			} else if (board[i][j] == 11) { //1
				context.beginPath();
				context.arc(center.x, center.y, 5, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
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
			else if (board[i][j] == 4) { // 4
				context.beginPath();
				context.rect(center.x - 10, center.y - 10, 20, 20);
				context.fillStyle = "grey"; //color
				context.fill();
			} else if(board[i][j] == 5){
				context.beginPath();
				context.arc(
					(center.x - 10) + 10,
					(center.y - 10) + 10,
					10,
					0, Math.PI, true
				);
				context.fillStyle = "Coral"; //color
				context.lineTo((center.x-10) , (center.y - 10)+20*(3/4));
				for (let i = 1; i <= 4; ++i)
				{
					context.bezierCurveTo(
						(center.x-10) + 20*(i * 2 - 1)/ (4 * 2), (center.y - 10)+20,
						(center.x-10) + 20*(i * 2 - 1)/ (4 * 2), (center.y - 10)+20 ,
						(center.x-10) + 20*i/4, (center.y - 10)+20*(3/4)
					);
				}
				context.lineTo((center.x-10) + 20 , (center.y - 10) + 10  );
				context.closePath();
				context.stroke();
				context.fill();
			}
		}
	}
}

function UpdatePosition() {
	board[shape.i][shape.j] = 0;
	for(let k = 0 ; k < GHOUST_NUMBER ; k++){
	var left = Math.abs((ghostArray[k].x)-shape.i) + Math.abs((ghostArray[k].y-1)-shape.j)
	var right = Math.abs((ghostArray[k].x)-shape.i) + Math.abs((ghostArray[k].y+1)-shape.j)
	var up = Math.abs((ghostArray[k].x-1)-shape.i) + Math.abs((ghostArray[k].y)-shape.j)
	var down = Math.abs((ghostArray[k].x+1)-shape.i) + Math.abs((ghostArray[k].y)-shape.j)
	let isChanges = false;
	let option=5;
	let min = 100000;

	if(ghostArray[k].y > 0 && board[ghostArray[k].x][ghostArray[k].y-1 ] != 4 && left < min && ghostArray[k].prevMove != "right" && board[ghostArray[k].x][ghostArray[k].y-1 ] != 5 ){ // left
		option = 0
		min = left
		isChanges = true;
	}
	if(ghostArray[k].y < board[0].length && board[ghostArray[k].x][ghostArray[k].y+1 ] != 4 && right < min  && ghostArray[k].prevMove != "left" && board[ghostArray[k].x][ghostArray[k].y+1 ] != 5 ){ // right
		option = 1
		min = right
		isChanges = true
	}
	if(ghostArray[k].x > 0 && board[ghostArray[k].x-1][ghostArray[k].y ] != 4 && up < min && ghostArray[k].prevMove != "down" && board[ghostArray[k].x-1][ghostArray[k].y ] != 5 ){ // up
		option = 2
		min = up
		isChanges = true
	}
	if(ghostArray[k].x < board.length && board[ghostArray[k].x+1][ghostArray[k].y ] != 4 && down < min && ghostArray[k].prevMove != "up" && board[ghostArray[k].x+1][ghostArray[k].y ] != 5){ // down
		option = 3
		min = down
		isChanges = true;
	}
	if(!isChanges){
		ghostArray[k].prevMove = "n"
	}
	board[ghostArray[k].x][ghostArray[k].y] = ghostArray[k].prevItem
	switch(option){
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
		default :
		break;
	}
	if(!( board[ghostArray[k].x][ghostArray[k].y]==5)){
	ghostArray[k].prevItem = board[ghostArray[k].x][ghostArray[k].y];
	}
	board[ghostArray[k].x][ghostArray[k].y] = 5;
}
	var x = GetKeyPressed();
	if (x == 1) {
		if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
			shape.j--;
			angle.x = 1.1;
			angle.y = 2.9;
		}
	}
	if (x == 2) {
		if (shape.j < board[0].length && board[shape.i][shape.j + 1] != 4) {
			shape.j++;
			angle.x = 0.15;
			angle.y = 1.85;
		}
	}
	if (x == 3) {
		if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
			shape.i--;
			angle.x = 1.6;
			angle.y = 3.35;
		}
	}
	if (x == 4) {
		if (shape.i < board.length && board[shape.i + 1][shape.j] != 4) {
			shape.i++;
			angle.x = 0.7;
			angle.y = 2.3;
		}
	}
	if(board[shape.i][shape.j]==11){
		score = score+5
	}
	if(board[shape.i][shape.j]==12){
		score = score+15
	}
	if(board[shape.i][shape.j]==13){
		score = score+25
	}
	if(board[shape.i][shape.j]==5){
		score = score - 10
		pacman_remain = pacman_remain - 1
		for(let i = 0; i < GHOUST_NUMBER ; i++){
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
	else{
	board[shape.i][shape.j] = 2;
	}
	var currentTime = new Date();
	time_elapsed = (currentTime - start_time) / 1000;
	if (score >= 20 && time_elapsed <= 10) {
		pac_color = "green";
	}
	if(time_elapsed>TIME && score < 100 ){
		window.clearInterval(interval);
		window.alert("You are better than "+score+" points!");
	}
	if(time_elapsed>TIME && score >= 100 ){
		window.clearInterval(interval);
		window.alert("Winner!!!");
	}
	if(pacman_remain==0){
		window.clearInterval(interval);
		window.alert("Loser!");
	}
	else {
		Draw();
	}
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function goDown(k){
	if(ghostArray[k].x < board.length && board[ghostArray[k].x+1][ghostArray[k].y ] != 4){ //down
		ghostArray[k].x++;
		//board[ghostArray[k].x][ghostArray[k].y] = 5;
	}
}
function goUp(k){
	if(ghostArray[k].x > 0 && board[ghostArray[k].x-1][ghostArray[k].y ] != 4){ //up
		ghostArray[k].x--;
		//board[ghostArray[k].x][ghostArray[k].y] = 5;
	}
}
function goLeft(k){
	if(ghostArray[k].y > 0 && board[ghostArray[k].x][ghostArray[k].y-1 ] != 4){ //left
		ghostArray[k].y--;
	//	board[ghostArray[k].x][ghostArray[k].y] = 5;
	}
}
function goRight( k){
	if(ghostArray[k].y < board[0].length && board[ghostArray[k].x][ghostArray[k].y+1 ] != 4){ //right
		ghostArray[k].y++;
	//	board[ghostArray[k].x][ghostArray[k].y] = 5;
	}
}

