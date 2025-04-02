// // // Task 2
for (let i = 1; i <= 10; i++) {
    let row = "";
    if (i < 10) {
        row += " " + i + " |";
    } else {
        row += i + " |";
    }
    
    for (let j = 1; j <= 10; j++) {
        let result = i * j;
        if (result < 10) {
            row += " " + result + " ";
        } else if (result < 100) {
            row += " " + result;
        } else {
            row += result;
        }
    }
    console.log(row);
}


// // Task 3
const users = [
    { name: "Madat", age: 25 },
    { name: "Ferid", age: 32 },
    { name: "Ferhat", age: 28 },
    { name: "Sahib", age: 35 },
    { name: "Eli", age: 22 },
    { name: "Sefer", age: 40 }
];


const youngUsers = [];  
const oldUsers = [];    


for (let i = 0; i < users.length; i++) {
    if (users[i].age < 30) {
        youngUsers.push(users[i]);
    } else if (users[i].age > 30) {
        oldUsers.push(users[i]);
    }
  
}


console.log("Yaşi 30-dan kiçik olan istifadeçiler:");
console.log(youngUsers);

console.log("\nYaşi 30-dan böyük olan istifadeçiler:");
console.log(oldUsers);




// // Task 5

let bolunen = Number(prompt("Bölünen ededi daxil edin:"));
let bolen =Number(prompt("Bölen ededi daxil edin:"));


if (bolen === 0) {
    console.log("Xeta: Sifira bölmek olmaz!");
} else {
    let qaliq = bolunen;
    
    for (; qaliq >= bolen; ) {
        qaliq = qaliq - bolen;
    }
    
    console.log(`${bolunen} % ${bolen} = ${qaliq}`);
}




// // Task 6
let arr = [203, 19, 2, 13, 196, 86, 35, 77];


let enBoyuk = arr[0]; 


for (let i = 1; i < arr.length; i++) {
    
    if (arr[i] > enBoyuk) {
        enBoyuk = arr[i];
    }
}


console.log("Massivdeki en böyük eded: " + enBoyuk);



