// Task 1.1

// var btn = document.querySelector(".shopBtn").parentNode.previousSibling.firstElementChild; 
// var btn = document.querySelector(".shopBtn").parentNode.previousSibling.lastElementChild;
// var btn = document.querySelector(".shopBtn").parentNode.firstElementChild
// var btn = document.querySelector(".shopBtn").parentNode.firstElementChild.nextElementSibling
// var btn = document.querySelector(".shopBtn").previousSibling
// // let title = document.querySelector(".cardTitle");
// // let price = document.querySelector(".cardPrice");
// // let shop = document.querySelector(".shopBtn");

// var wishliste ={
//     heart,
//     img,    
//     title,
//     text,
//     price,
    
// }
// console.log(wishliste);



// Cloest usulu
let btn=document.querySelector(".shopBtn");
let card =btn.closest(".card");

let heart =document.querySelector(".heart").textContent;
let img =document.querySelector(".cardimg").src;
let title =document.querySelector(".cardTitle").textContent;
let text =document.querySelector(".cardText").textContent;
let price =document.querySelector(".cardPrice").textContent;


let wishliste ={
    heart,
    img,
    title,
    text,
    price,
    
}
console.log(wishliste);





