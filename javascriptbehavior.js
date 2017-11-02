var counter = 0;
var rows = 6;
var cols = 7;
var circleSize = 50;
var circle = null;
var gameBoardContainer = document.getElementById("mainboard");
var mainBoardArray = [
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]];

function makingTheBoard()
{
    var circle = null;
    var gameBoardContainer = document.getElementById("mainboard");
    for (i = 0; i < cols; i++)
    {
        for (j = 0; j < rows; j++)
        {
            //Creating the circles
            
            circle = document.createElement("div");
            gameBoardContainer.appendChild(circle);
            circle.id = 'c' + j + i;

            //Postions of the boxes
            var topPosition = j * circleSize;
            var leftPosition = i * circleSize;
            circle.style.top = topPosition + 'px';
            circle.style.left = leftPosition + 'px';
        }
    }
}
