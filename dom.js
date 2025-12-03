console.log("Learning DOM");
// OLD WAY
let paraHead = document.getElementsByClassName("head");
paraHead[0].innerHTML = "WEB DEV 7";
console.log(paraHead);

// let buttonSelect = document.getElementById("small");
// buttonSelect.innerHTML = "Add here"
// console.log(buttonSelect);


//new way
let buttonElect = document.querySelectorAll(".para");
buttonElect[0].innerHTML = "Add here";
console.log(buttonElect);