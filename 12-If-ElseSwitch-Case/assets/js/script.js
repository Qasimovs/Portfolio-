// // let fuel = prompt("Yanacaği seçi:");
// let amount = prompt("Yanacağın qiymətlərini müəyyənləşdirin:");
// let qiymet = {
//     "dizel": 0.9, 
//     "benzin": 1.0, 
//     "premium": 1.5}

// if (Dizel){
//     console.log(Dizel);
//      alert ("90 AZN ");
// }
// else if(Benzin){
//     alert("1 Azn");
// }


// Task 1.1
// const qiymetler = {
//     "dizel": 0.9,
//     "benzin": 1.0,
//     "premium": 1.5
// };

// const yanacaqQiymetleri = {
//     "dizel": 0.9,
//     "benzin": 1.0,
//     "premium": 1.5
// };

// let fuel = prompt("Yanacaqlardan birini seçin:").toLowerCase();
// let litr = parseFloat(prompt("Litrn qeyd edin"));


// if (yanacaqQiymetleri[fuel] && litr > 0) {
//     let mebleg = yanacaqQiymetleri[nov] * litr;
//     alert(`${litr} litr ${nov} yanacağın qiyməti: ${mebleg.toFixed(2)} AZN`);
// } else {
//     alert("Yanlış məlumat daxil etdiniz!");
// }



// Tak 1.2
// const yanacaqQiymetleri = {
//     1: { ad: "Dizel", qiymet: 0.9 },
//     2: { ad: "Benzin", qiymet: 1.0 },
//     3: { ad: "Premium", qiymet: 1.5 }
// };


// let secim = prompt(`
// Yanacaq növünü seçin:
// 1. Dizel (0.90 AZN/litr)
// 2. Benzin (1.00 AZN/litr)
// 3. Premium (1.50 AZN/litr)
// Seçim nömrəsini daxil edin (1-3):`);

// // Seçimi yoxlama
// if (yanacaqQiymetleri[secim]) {
//     let litr = parseFloat(prompt(`Neçə litr ${yanacaqQiymetleri[secim].ad} yanacaq almaq istəyirsiniz?`));
    
//     if (litr > 0) {
//         let mebleg = yanacaqQiymetleri[secim].qiymet * litr;
//         alert(`${litr} litr ${yanacaqQiymetleri[secim].ad} yanacağın qiyməti: ${mebleg.toFixed(2)} AZN`);
//     } else {
//         alert("Xəta: Litr miqdarı sıfırdan böyük olmalıdır!");
//     }
// } else {
//     alert("Yanacq düzgün deyil");
// }





//  Task 2
let fesil = prompt("Mövsüm daxil edin:")

switch (fesil) {
    case "yaz":
        console.log("Yaz ayları: Mart, Aprel, May");
        alert("Yaz ayları: Mart, Aprel, May");
        break;
    case "yay":
        console.log("Yay ayları: İyun, İyul, Avqust");
        alert("Yay ayları: İyun, İyul, Avqust");
        break;
    case "payız":
        console.log("Payız ayları: Sentyabr, Oktyabr, Noyabr");
        alert("Payız ayları: Sentyabr, Oktyabr, Noyabr");
        break;
    case "qış":
        console.log("Qış ayları: Dekabr, Yanvar, Fevral");
        alert("Qış ayları: Dekabr, Yanvar, Fevral");
        break;
    default:
        console.log("Bele bir mövsüm yoxdur");
        alert("Bele bir mövsüm yoxdur");
}