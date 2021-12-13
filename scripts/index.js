const MIN_VALUE = 1;
const MAX_VALUE = 100;
const AMOUNT = 20;

function generateNumbers() {
  clearTable();
  const oddNumbers = [];
  const evenNumbers = [];
  for (let i = 0; i < AMOUNT; i++) {
    const generatedNumber = Math.floor(Math.random() * MAX_VALUE) + 1;
    generatedNumber % 2 == 0
      ? evenNumbers.push(generatedNumber)
      : oddNumbers.push(generatedNumber);
  }
  evenNumbers.sort((x, y) => {return x - y;});
  oddNumbers.sort((x, y) => {return x - y;});
  return generateTable(evenNumbers, oddNumbers)
}

function generateTable(evenNumbers, oddNumbers) {
  const rowsToGenerate = Math.max(evenNumbers.length, oddNumbers.length);
  const table = document.querySelector("#table-results");
 
  for (let i = 0; i < rowsToGenerate; i++) {
    const newRow = document.createElement("tr");
    const newRowCol1 = document.createElement("td");
    if (evenNumbers[i]) newRowCol1.innerHTML = evenNumbers[i];
    const newRowCol2 = document.createElement("td");
    if (oddNumbers[i]) newRowCol2.innerHTML = oddNumbers[i];
    newRow.appendChild(newRowCol1);
    newRow.appendChild(newRowCol2);
    table.appendChild(newRow);
  }
}

function clearTable(){
    const tableRows = document.querySelector("#table-results");
    tableRows.innerHTML="";
}