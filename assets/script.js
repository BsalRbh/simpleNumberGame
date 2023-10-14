const arrayOfName = [
  "Ram",
  "Hari",
  "Dinesh",
  "Suresh",
  "Sita",
  "Dinesh",
  "Gautam",
  "Parlad",
  "Tina",
  "Rabina",
  "Nita",
];

// Generate a random index within the array's bounds
const randomIndex = Math.floor(Math.random() * arrayOfName.length);

// Get the random name from the array
const randomName = arrayOfName[randomIndex];


function random() {
  let a = Math.floor(Math.random() * 100);
  return a % 2 === 0 ? a : a + 1;
}
let a = random();
console.log(a);

let answer = a / 2;
console.log(answer);

const texts = [
  "Think a Number.",
  `Lets suppose your friend ${randomName} gave you same amount.Add it.`,
  `Now, Take ${a} from me. Add it.`,
  "Divide the total by 2.",
  `Subtract the amount ${randomName} gave you.`,
  `The result is ${answer}.Did I get it right?`,
];
const textElement = document.getElementById("textElement");
const next = document.getElementById("next");
const result = document.getElementById("result")
console.log(result)
// currentTextIndex to keep track of the current text index
var currentTextIndex = 0;
// Adding a click event listener to the button
next.addEventListener("click", function () {
  // Update the text and increment the index
  textElement.textContent = texts[currentTextIndex];
  currentTextIndex++;
  if (currentTextIndex == texts.length) {
    next.textContent = "Restart"
    result.textContent = texts[5]
    textElement.textContent=''
  }
  // If we reach the end of the array, reset the index
  if (currentTextIndex > texts.length) {
    location.reload();
  }
});
