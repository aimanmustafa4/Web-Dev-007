console.log("Learning DOM");
// OLD WAY
// let paraHead = document.getElementsByClassName("head");
// paraHead[0].innerHTML = "WEB DEV 7";
// console.log(paraHead);

// let buttonSelect = document.getElementById("small");
// buttonSelect.innerHTML = "Add here"
// console.log(buttonSelect);


//new way
// let buttonElect = document.querySelectorAll(".para");
// buttonElect[0].innerHTML = "Add here";
// console.log(buttonElect);

let buttonSelect = document.querySelector("#btn");
// buttonSelect.onmouseover = (e) =>{
//     console.log (e);
//     console.log (e.type);
//     console.log (e.target);
//     console.log (e);
//     alert("heloo");

// }
//  node.addeventlistner (event , function){}
buttonSelect.addEventListener("click", ()=>{
    console.log("button is submitted");
    
})

let paraHead = document.querySelector(".head");
paraHead.onclick = (evt) =>{
    console.log (evt);
    console.log (evt.type);
    console.log (evt.target);
    console.log ("this is a head");
}


