//document.querySelectorAll("input")[0];
//document.querySelector("input");
//document.querySelector("input:first-child");
//document.querySelector("input:nth-child(1)");
//document.querySelector("input:first-of-type");

const tagDiv = document.querySelector("div");

document
    .querySelector("input[value='Testo uppercase']")
    .addEventListener("click", function(){
        let testo = tagDiv.innerHTML;
        testo = testo.toUpperCase();
        tagDiv.innerHTML = testo;
    });

document
    .querySelector("input[value='Testo lowercase']")
    .addEventListener("click", function(){
        let testo = tagDiv.innerHTML;
        testo = testo.toLowerCase();
        tagDiv.innerHTML = testo;
    });

document
    .querySelector("input[value='Testo substring']")
    .addEventListener("click", function(){
        let testo = tagDiv.innerHTML;
        testo = testo.substring(5, testo.length) + testo.substring(0, 5);
        tagDiv.innerHTML = testo;
    });