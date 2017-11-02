var counter = 0;
var rows = 6;
var cols = 7;
var circleSize = 50;
var mainBoardArray = [
    [0, 0, 0, 0, 0, 0, 0],
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
    gameBoardContainer.addEventListener("click", redshooting, true);
   
}

function redshooting(e)
{
    if (e.target !== e.currentTarget)
    {

        //get postion in the array using the id of the element
        var row = e.target.id.substring(1, 2);
        var col = e.target.id.substring(2, 3);

        if (mainBoardArray[row][col] == 0 )
        {
            if(counter % 2 == 0)
            {
            counter++;
            e.target.style.background = 'red';
            mainBoardArray[row][col] = 1;  
             }else{
                 
            counter++;
            e.target.style.background = 'yellow';
            mainBoardArray[row][col] = 2; 
              }
            
            
        } 
    }
    e.stopPropagation();
}
