console.log("Hello world!");

//const tagHello = document.getElementById("ciao");

const tagHello = document.querySelector("#ciao");
tagHello.innerHTML = "Hello World";


//const tagYear = document.getElementsByClassName("anno")[0]
//const tagYear = document.querySelectorAll("p.anno")[0];
const tagYear = document.querySelector("p.anno");
tagYear.innerText = "2021";