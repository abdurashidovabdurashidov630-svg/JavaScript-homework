let kun = Number(prompt("Hafta kunini raqam bilan kiriting:"))
if(kun == 1){
    alert("Men bu kuni IT kursiga boraman."); 
}
else if(kun == 2){
    alert("Men bu kuni Ingiliz tili kursiga boraman."); 
}
else if(kun == 3){
    alert("Men bu kuni IT kursiga boraman."); 
}
else if(kun == 4){
    alert("Men bu kuni Ingiliz tili kursiga boraman."); 
}
else if(kun == 5){
    alert("Men bu kuni IT kursiga boraman."); 
}
else if(kun == 6){
    alert("Men bu kuni Ingiliz tili kursiga boraman."); 
}
else if(kun == 7){
    alert("Men bu kuni Ingiliz tili kursiga boraman."); 
}
else{
    alert("Siz hafta kunini xato kiritdingiz!");
}



let kursVaqti = Number(prompt("Kurs vaqtini bilish uchun hafta kunini raqam bilan kiriting:"))
if(kursVaqti == 1){
    alert("Bu kuni IT kursi 8:00da boshlanadi."); 
}
else if(kursVaqti == 2){
    alert("Bu kuni Ingiliz tili kursi 10:00da boshlanadi."); 
}
else if(kursVaqti == 3){
    alert("Bu kuni IT kursi 8:00da boshlanadi."); 
}
else if(kursVaqti == 4){
    alert("Bu kuni Ingiliz tili kursi 10:00da boshlanadi."); 
}
else if(kursVaqti == 5){
    alert("Bu kuni IT kursiga 8:00 boshlanadi."); 
}
else if(kursVaqti == 6){
    alert("Bu kuni Ingiliz tili kursi 8:00da boshlanadi."); 
}
else if(kursVaqti == 7){
    alert("Bu kuni Ingiliz tili kursi 16:00da boshlanadi."); 
}
else{
    alert("Siz hafta kunini xato kiritdingiz!");
}



let fasl = Number(prompt("Faslni raqam bilan, qish 1ga teng holda kiriting:"))
if(fasl == 1){
    alert("Kurtka kiying, aks holda shomollab qolishingiz mumkin!")
}
else if(fasl == 2 || fasl == 4){
    alert("O'zingiz bilan soyabon olib yuring, aks holda yomg'ir to'satdan yog'sa shalabbo bo'lishingiz mumkin!")
}
else if(fasl == 3){
    alert("Ko'chaga chiqmang, bu faslda magnit bo'roni ko'p bo'ladi, aks holda kasal bo'lib qolishingiz mumkin!")
}
else{
    alert("Siz faslni xato kiritdingiz!")
}



let baho = Number(prompt("Imtihondan olgan ball ingizni kiriting:"))

if(baho >= 70){
    alert("Siz imtihondan o'tdingiz!")
}
else{
    alert("Siz imtihondan yiqildingiz!")
}



let zaryad = Number(prompt("Telefon zaryadini kiriting:"));

if (zaryad < 0 || zaryad > 100) {
    alert("Xato qiymat kiritdingiz!");
}
else if (zaryad >= 80) {
    alert("Zaryad to‘liq");
}
else if (zaryad >= 50) {
    alert("Zaryad yetarli");
}
else if (zaryad >= 20) {
    alert("Zaryad kam");
}
else {
    alert("Zaryad juda kam, telefonni ulang!");
}