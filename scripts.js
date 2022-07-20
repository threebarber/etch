

const container = document.getElementById("container");
makeRows(16, 16);

/*window.addEventListener('DOMContentLoaded', function () {
    /*alert("It's loaded!");
    const container = document.getElementById("container");
    makeRows(16, 16);
  })*/


function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    /*cell.innerText = (c + 1);*/
    container.appendChild(cell).className = "grid-item";
  };
};



function colorCell(target){
    target.style.backgroundColor = 'black';
}


container.addEventListener('mouseover', function (e){
    target = e.target;
    if(target.matches("div.grid-item")){
        colorCell(target)
    }
})

