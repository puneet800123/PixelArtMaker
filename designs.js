//constants 
const canvas = $("#pixelCanvas");
const inputHeight = $("#inputHeight");
const inputWeight = $("#inputWeight");

//function (making grid)
function makeGrid() {
    canvas.empty();
    height = inputHeight.val();
    width = inputWeight.val();
    for (rows = 0; rows < height; rows++) {
        row = $("<tr></tr>");
        canvas.append(row);

        for (let columns = 0; columns < width; columns++) {
            row.append("<td></td>");
        }
    }
    $("td").on("click", function() {
        color = $("#colorPicker").val();
        $(this).css("background-color", color);
    });
}

//button function
$("#button").on("click", function(defaultsave) {
    defaultsave.preventDefault();
    makeGrid();
});