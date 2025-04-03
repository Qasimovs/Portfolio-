// // // Task 2
for (let i = 1; i <= 10; i++) {
    let row = "";
    // Sətir nömrəsi
    if (i < 10) {
        row += " " + i + " |";
    } else {
        row += i + " |";
    }
    
    // Vurma nəticələri
    for (let j = 1; j <= 10; j++) {
        let result = i * j;
        // Nəticəni formatla
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
    { name: "Əli", age: 25 },
    { name: "Ayşə", age: 32 },
    { name: "Mehdi", age: 28 },
    { name: "Fatma", age: 35 },
    { name: "Nərmin", age: 22 },
    { name: "Rəşad", age: 40 }
];


const youngUsers = [];  // 30-dan kiçik olanlar
const oldUsers = [];    // 30-dan böyük olanlar


for (let i = 0; i < users.length; i++) {
    if (users[i].age < 30) {
        youngUsers.push(users[i]);
    } else if (users[i].age > 30) {
        oldUsers.push(users[i]);
    }
  
}


console.log("Yaşı 30-dan kiçik olan istifadəçilər:");
console.log(youngUsers);

console.log("\nYaşı 30-dan böyük olan istifadəçilər:");
console.log(oldUsers);




// // Task 5

let bolunen = Number(prompt("Bölünən ədədi daxil edin:"));
let bolen =Number(prompt("Bölən ədədi daxil edin:"));


if (bolen === 0) {
    console.log("Xəta: Sıfıra bölmək olmaz!");
} else {
    // Qalığı tapmaq üçün for döngüsü
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


console.log("Massivdəki ən böyük ədəd: " + enBoyuk);

