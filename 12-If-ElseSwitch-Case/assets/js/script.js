// Task №1
const dizel = 0.9;  // Dizel qiyməti (AZN)
const benzin = 1;   // Adi benzin qiyməti (AZN)
const premium = 1.5; // Premium benzin qiyməti (AZN)


let yanacaqNovu = prompt("Yanacaq növünü seçin: \n1. Dizel\n2. Adi Benzin\n3. Premium Benzin\nSeçiminiz (1-3):");
let miqdar =Number(prompt("Almaq istədiyiniz yanacağın miqdarını litrlə daxil edin:"));
let balans =Number(prompt("Balansınızı AZN ilə daxil edin:"));


let qiymet;
if (yanacaqNovu == "1") {
    qiymet = dizel;
} else if (yanacaqNovu == "2") {
    qiymet = benzin;
} else if (yanacaqNovu == "3") {
    qiymet = premium;
} else {
    alert("Lütfən, düzgün Yanacaq Tipi daxil edin.");
}


let umumiDeyer = miqdar * qiymet;


if (umumiDeyer <= balans) {
    let qalanBalans = balans - umumiDeyer;
    alert("Yanacaq alışı uğurla tamamlandı! Qalan balansınız: " + qalanBalans.toFixed(2) + " AZN.");
} else {
    let itkinMebleg = umumiDeyer - balans;
    alert("Ümumi dəyər: "  + " AZN.\nCari balansınız: " +  " AZN.\nİtkin məbləğ: " +  " AZN.");
}



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