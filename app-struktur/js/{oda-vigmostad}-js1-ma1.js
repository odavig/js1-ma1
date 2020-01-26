// 1
function meow() {
  console.log("Meow")
}

var cat = {
  complain: meow(),
}

cat.complain;

//2
var heading = document.querySelector("H3");

//3
heading.style.fontSize = "2em";

//4
heading.className = "subheading"

//5
var paragraphs = document.getElementsByTagName("p");

//6
var resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p>New paragraph</p>`

//7 & 8
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];
var demo = document.getElementById("demo");

function catFunction (catArray) {
  var catsHTML = ""
  for (var i = 0; i < catArray.length; i++) {
    catsHTML = `<h5> ${catArray[i].name} </h5>`;
  }
  return catsHTML
}
demo.innerHTML = catFunction(cats);

//It only printed out the last name, and I honestly don't know why it didnt. I'll submit it like this, but I'll try to
//figure out why it wouldn't print the first two names.

//
