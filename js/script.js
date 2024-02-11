// console.log(document)
/*

    ===============================================
        This is dom js elements selector.
    ===============================================

*/
// tag name selector

let find = document.getElementsByTagName("li");
// console.log(find)

// find element by id
let idFind = document.getElementById("finds")
// console.log(idFind)

// find by class name
let classFind = document.getElementsByClassName("items");
// console.log(classFind)

// css selectors

let findOne = document.querySelector(".items");
// console.log(findOne)

let findAll = document.querySelectorAll(".items");
// console.log(findAll) // give node list



/*

    ========================================================
        GetAttribute, SetAttribute, InnerText, InnerHTML
    ========================================================

*/

// attributes get set find
let attrFind = document.getElementById("finds");
let getId = attrFind.classList.add("nine")
attrFind.classList.remove("items")
// console.log(attrFind)

// show inner html and inner text

let findText = document.getElementById("tegRight");
console.log(findText.innerText);