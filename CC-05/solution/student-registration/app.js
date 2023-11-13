const startInput = [
  "C1234 - John Doe, London, Full-Stack",
  "C2345 - Jane Doe, London, Data-Science",
  "C2346 - Mary Ann, Paris, AWS-Devops",
  "C2347 - Adam Smith, Texas, AWS-Devops",
  "C2444 - Michael Great, Arizona, Full-Stack",
  "C2555 - William Cash, Manchester, Data-Science",
  "C2455 - Patrick Jane, Madrid, Full-Stack",
];

const sampleInput = startInput.map((eleman) => [
  eleman.split(" ")[0],
  eleman.split(" ")[2],
  eleman.split(" ")[3].slice(0, -1),
  eleman.split(" ")[4].slice(0, -1),
  eleman.split(" ")[5],
]);

// const sampleInput = [
//   ['C1234', 'John', 'Doe', 'London', 'Full-Stack'],
//   ['C2345', 'Jane', 'Doe', 'London', 'Data-Science'],
//   ['C2346', 'Mary', 'Ann', 'Paris', 'AWS-Devops'],
//   ['C2347', 'Adam', 'Smith', 'Texas', 'AWS-Devops'],
//   ['C2444', 'Michael', 'Great', 'Arizona', 'Full-Stack'],
//   ['C2555', 'William', 'Cash', 'Manchester', 'Data-Science'],
//   ['C2455', 'Patrick', 'Jane', 'Madrid', 'Full-Stack'],
// ]

const table = document.querySelector(".table");

for (let i = 0; i < sampleInput.length; i++) {
  const tr = document.createElement("tr");
  table.appendChild(tr);

  for (let j = 0; j < sampleInput[i].length; j++) {
    const td = document.createElement("td");
    tr.appendChild(td);
    td.textContent = sampleInput[i][j];
  }
}
