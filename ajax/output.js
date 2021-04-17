class Output {
  
   

  addTableRow(arr) {
    let table = document.getElementById("tbody");
    let newRow = document.createElement("tr");
    let newHeader = document.createElement("th");
    newHeader.innerText = arr[0];
    let newCell = document.createElement("td");
    newCell.innerText = arr[1];
    newHeader.scope = "row";

    newRow.appendChild(newHeader);
    newRow.appendChild(newCell);
    table.appendChild(newRow);
  }
}