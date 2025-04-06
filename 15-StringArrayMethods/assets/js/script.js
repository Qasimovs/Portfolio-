// // String mehhods

// Task 1
var str = "I am frontend DEVELOPER I LEARN Javascript";
const vowels = str.match(/[aeiouAEIOU]/g);

console.log(vowels); 

// Task 2
var str = "I am frontend DEVELOPER I LEARN Javascript";
const wordCount = str.split(" ").length;
console.log(wordCount); 

// Task 3
var str = "I am frontend DEVELOPER I LEARN Javascript";
const findLongestWord = (str) => {
    const words = str.split(" "); 
    let longestWord = "";
  
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word; 
      }
    }
  
    return longestWord;
  };
  
  console.log(findLongestWord(str)); 
  
//   Task 4
var str = "I am frontend DEVELOPER I LEARN Javascript";


var words = str.split(' ');


for (let i = 0; i < words.length; i++) {
  var currentWord = words[i];
  
 
  if (currentWord === currentWord.toUpperCase()) {
    console.log("Boyuk herfli soz:", currentWord);
    console.log("İndeksi:", i);
    break; 
  }
}

// Task 5
var str = "I am Frontend DEVELOPER I LEARN JavaScript with REACT";


var words = str.split(' ');


var result = words.filter(word => {
  var upperCaseLetters = word.match(/[A-Z]/g) || [];
  return upperCaseLetters.length > 2;
});


console.log("2-den cox boyuk herfi olan sozler:", result);

// Task 6
function getInitials(sentence) {

    const words = sentence.split(' ');
    
    
    let initials = '';
    for (const word of words) {
      if (word.length > 0) { 
        initials += word[0].toUpperCase(); 
      }
    }
    
    return initials;
  }
  

  console.log(getInitials("My name is Jhon")); 
  console.log(getInitials("Hello World"));     
  console.log(getInitials("javaScript is fun")); 
  
//   Task 7
function qisalt(cumle) {
    var sozler = cumle.split(' ');
    var netice = [];
    
    for (var i = 0; i < sozler.length; i++) {
      var soz = sozler[i];
      
      if (soz.length <= 4) {
        netice.push(soz);
      } else {
        var qisaldilmis = soz[0] + (soz.length - 2) + soz[soz.length - 1];
        netice.push(qisaldilmis);
      }
    }
    
    return netice.join(' ');
  }
  
 
  var cumle = "komputer stekan javascript";
  console.log(qisalt(cumle)); 

  // // Arrays methods
//   Task 1
function temizleVeSay(arr) {
    
    var temizArray = [];
    var tekrarlar = {};
    
    
    for (var i = 0; i < arr.length; i++) {
      var num = arr[i];
      
      
      if (temizArray.indexOf(num) === -1) {
        temizArray.push(num);
      }
      
      
      if (tekrarlar[num]) {
        tekrarlar[num]++;
      } else {
        tekrarlar[num] = 1;
      }
    }
    
  
    var tekrarEdenler = {};
    for (var key in tekrarlar) {
      if (tekrarlar[key] > 1) {
        tekrarEdenler[key] = tekrarlar[key];
      }
    }
    
    return {
      temizArray: temizArray,
      tekrarSayilari: tekrarEdenler
    };
  }
  
 
  var reqemler = [1, 2, 2, 3, 4, 4, 4, 5];
  var netice = temizleVeSay(reqemler);
  
  console.log("Təkrarsiz array:", netice.temizArray);
  console.log("Təkrarlanma saylari:", netice.tekrarSayilari);
  
//   Task 2
function isPolindrom(soz) {
    var temizSoz = soz.toLowerCase().replace(/\s/g, '');
    
   
    var tersSoz = temizSoz.split('').reverse().join('');
    
  
    return temizSoz === tersSoz;
  }
  
  console.log(isPolindrom("ana"));    
  console.log(isPolindrom("Ağa"));   
  console.log(isPolindrom("ey baba")); 
  console.log(isPolindrom("ey bey")); 

//  Task 3
function kicikElementlerinSayi(massiv, eded) {
    return massiv.filter(element => eded < element).length;
  }
console.log(kicikElementlerinSayi([1, 2, 3, 4, 5], 3));
console.log(kicikElementlerinSayi([10, 20, 30], 5));   
console.log(kicikElementlerinSayi([], 10));   

// Task 4
const customers = [
    {
      name: "Tyrone",
      personal: {
        age: 33,
        hobbies: ["Bicycling", "Camping"],
      },
    },
    {
      name: "Elizabeth",
      personal: {
        age: 25,
        hobbies: ["Guitar", "Reading", "Gardening"],
      },
    },
    {
      name: "Penny",
      personal: {
        age: 36,
        hobbies: ["Comics", "Chess", "Legos"],
      },
    },
  ];
  
  
  const allHobbies = customers.reduce(function(hasil, musteri) {
    return hasil.concat(musteri.personal.hobbies);
  }, []);
  
  console.log(allHobbies);

//   Task 5


var ededler = [];
for(var i = 0; i < 10; i++) {
  ededler.push(Math.floor(Math.random() * 100) + 1);
}
console.log("Random ededler:", ededler);


var enBoyuk = ededler[0];
var enKicik = ededler[0];
var toplam = 0;

for(var i = 0; i < ededler.length; i++) {
 
  if(ededler[i] > enBoyuk) {
    enBoyuk = ededler[i];
  }
  
  if(ededler[i] < enKicik) {
    enKicik = ededler[i];
  }
  
  toplam += ededler[i];
}


var ortalama = toplam / ededler.length;
var kvadratlar = [];
for(var i = 0; i < ededler.length; i++) {
  kvadratlar.push(ededler[i] * ededler[i]);
}


console.log("En boyuk:", enBoyuk);
console.log("En kiçik:", enKicik);
console.log("Ortalama:", ortalama);
console.log("Toplam:", toplam);
console.log("Kvadratlar:", kvadratlar);
  