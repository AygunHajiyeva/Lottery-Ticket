var numbers = [];

while (numbers.length<6) {
var x = Math.floor(Math.random()*100);
  numbers.push(x);
}

console.log(numbers);


function Loto() {
  for (let x = 0; x < 3; x++) {
  for (let i = 0; i < 3; i++){
var row = document.getElementById("row1");
var cell = row.insertCell(i);
cell.innerHTML = numbers[x];
    break
  }
  }

   for (let x = 3; x < 6; x++) {
  for (let i = 0; i < 3; i++){
var row = document.getElementById("row2");
var cell = row.insertCell(i);
cell.innerHTML = numbers[x];
    break
  }
  }
}


Loto ();
