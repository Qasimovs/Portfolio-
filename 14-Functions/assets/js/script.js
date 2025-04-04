// Task 1
function topla(a, b) {
    return a + b;
}
function cix(a, b) {
    return a - b;
}
function vur(a, b) {
    return a * b;
}
function bol(a, b) {
   
    return a / b;
}
console.log(topla(5, 3));   
console.log(cix(5, 3));      
console.log(vur(5, 3));      
console.log(bol(6, 3)); 

// Task 2
function tekCutleriTap(...numbers) {
    let tekler = [];
    let cutler = [];
    
    for (let num of numbers) {
        if (num % 2 === 0) {
            cutler.push(num);
        } else {
            tekler.push(num);
        }
    }
    
    console.log("Cut ededler:", cutler);
    console.log("Tek ededler:", tekler);
    
    return {
        tekler: tekler,
        cutler: cutler
    };
}

tekCutleriTap(14, 20, 35, 40, 57, 60, 100);

// Task 3
function hemDordhemBes(arr) {
    var cem = 0;
    
    for (var i = 0; i < arr.length; i++) {
        
        if (arr[i] % 4 === 0 && arr[i] % 5 === 0) {
            cem += arr[i]; 
        }
    }
    
    return cem;
}
var ededler = [14, 20, 35, 40, 57, 60, 100];
var netice = hemDordhemBes(ededler);

console.log("4-e və 5-e bolunen ededlerin cemi: " + netice);

// Task 5
function ededAbundantDeficient(number) {
    if (number <= 0) return "Musbet eded daxil edin!";
    
    var bolenlerinCemi = 0;
    
  
    for (var i = 1; i <= number/2; i++) {
        if (number % i === 0) {
            bolenlerinCemi += i;
        }
    }
    
    
    if (bolenlerinCemi > number) {
        return number + " - Abundant ededdir";
    } else if (bolenlerinCemi < number) {
        return number + " - Deficient ededdir";
    } else {
        return number + " - Mukemmel ededdir";
    }
}
console.log(ededAbundantDeficient(12));  
console.log(ededAbundantDeficient(13));  
console.log(ededAbundantDeficient(6));   
console.log(ededAbundantDeficient(18));  
console.log(ededAbundantDeficient(9));  