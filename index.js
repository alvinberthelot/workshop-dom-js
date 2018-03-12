var firstnames = ["Julie", "Marc", "John", "Jane", "Bob"];

var generateHtml = firstname => {
  return `
    <button onclick="sayHello('${firstname}')">
    ${firstname}
    </button>`;
};

var container = document.getElementById("container");

for (let index = 0; index < firstnames.length; index++) {
  const person = firstnames[index];
  if (person.charAt(0) === "J") {
    container.innerHTML += generateHtml(person);
  }
}

var sayHello = firstname => {
  console.log(`HELLO ${firstname}, ça va aujourd'hui ?`);
};
