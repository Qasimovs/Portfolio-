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
// let btn=document.querySelector(".shopBtn");
// let card =btn.closest(".card");

// let heart =document.querySelector(".heart").textContent;
// let img =document.querySelector(".cardimg").src;
// let title =document.querySelector(".cardTitle").textContent;
// let text =document.querySelector(".cardText").textContent;
// let price =document.querySelector(".cardPrice").textContent;


// let wishliste ={
//     heart,
//     img,
//     title,
//     text,
//     price,
    
// }
// console.log(wishliste);
// task2

document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh';

let card = document.createElement('div');
card.classList.add('card');

card.style.width = '300px';
card.style.backgroundColor = 'white';
card.style.borderRadius = '10px';
card.style.padding = '20px';


let imgDiv = document.createElement('div');
imgDiv.classList.add('img');
let img = document.createElement('img');
img.src = './assets/images/images.1.jpg';
imgDiv.appendChild(img);  
card.appendChild(imgDiv);

let detached = document.createElement('div');
detached.textContent = 'DETACHED HOUSE • 5Y OLD';
card.appendChild(detached);

let price = document.createElement('div');
price.classList.add('price');
let strongPrice = document.createElement('strong');
strongPrice.textContent = '$750,000';
price.appendChild(strongPrice);
card.appendChild(price);

price.style.fontSize = '24px';


let address = document.createElement('div');
address.classList.add('address');
address.textContent = '742 Evergreen Terrace';
card.appendChild(address);

address.style.marginBottom = '15px';
address.style.paddingBottom = '15px';
address.style.borderBottom = '1px solid #eee';



let details = document.createElement('div');
details.classList.add('details');

details.style.display = 'flex';
details.style.justifyContent = 'space-between';
details.style.marginBottom = '20px';

let bedrooms = document.createElement('div');
bedrooms.classList.add('detail');
let bedroomValue = document.createElement('div');
bedroomValue.textContent = '3';
let bedroomText = document.createElement('div');
bedroomText.textContent = 'Bedrooms';
bedrooms.appendChild(bedroomValue);
bedrooms.appendChild(bedroomText);
details.appendChild(bedrooms);

let bathrooms = document.createElement('div');
bathrooms.classList.add('detail');
let bathroomValue = document.createElement('div');
bathroomValue.textContent = '2';
let bathroomText = document.createElement('div');
bathroomText.textContent = 'Bathrooms';
bathrooms.appendChild(bathroomValue);
bathrooms.appendChild(bathroomText);
details.appendChild(bathrooms);

card.appendChild(details);

let realtor = document.createElement('div');
realtor.classList.add('realtor');

let realtorText = document.createElement('div');
realtorText.classList.add('realtor-text');
realtorText.textContent = 'REALTOR';
realtor.appendChild(realtorText);

realtor.style.marginTop = '20px';
realtor.style.paddingTop = '15px';
realtor.style.borderTop = '1px solid #eee';


realtorText.style.fontSize = '12px';

let realtorName = document.createElement('div');
realtorName.classList.add('realtor-name');
realtorName.textContent = 'Tiffany Heffner';
realtor.appendChild(realtorName);

realtorName.style.fontWeight = 'bold';
realtorName.style.color = '#333';



let realtorPhone = document.createElement('div');
realtorPhone.classList.add('realtor-phone');
realtorPhone.textContent = '(555) 555-4321';
realtor.appendChild(realtorPhone);

realtorPhone.style.color = '#444';
realtorPhone.style.fontSize = '14px';


card.appendChild(realtor);

document.body.appendChild(card);





