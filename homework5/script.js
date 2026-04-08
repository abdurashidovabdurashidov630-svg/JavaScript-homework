let a = prompt(
  "Bu noutbukni Aplle kompaniyasi yaratgan. Ushbu noutbukning nomi nima?",
);
switch (a) {
  case "Macbook":
    alert("To'g'ri javob");
    break;
  case "macbook":
    alert("To'g'ri javob");
    break;
  case "MACBOOK":
    alert("To'g'ri javob");
    break;
  default:
    alert("Noto'g'ri javob");
}

let b = prompt("Bu telefon Iphone ning raqobatchisidir. Bu qaysi telefon?");
switch (b) {
  case "Samsung":
    alert("To'g'ri javob");
    break;
  case "samsung":
    alert("To'g'ri javob");
    break;
  case "SAMSUNG":
    alert("To'g'ri javob");
    break;
  default:
    alert("Noto'g'ri javob");
}

let c = prompt("Bu ichimlik Pepsi ning raqobatchisidir. Bu qaysi ichimlik?");
switch (c) {
  case "Coca cola":
    alert("To'g'ri javob");
    break;
  case "coca cola":
    alert("To'g'ri javob");
    break;
  case "Coca Cola":
    alert("To'g'ri javob");
    break;
  case "COCA COLA":
    alert("To'g'ri javob");
    break;
  default:
    alert("Noto'g'ri javob");
}

let d = prompt("1 + 2 * 3 = ?");
switch (d) {
  case 7:
    alert("To'g'ri javob");
    break;
  default:
    alert("Noto'g'ri javob");
}

let e = prompt("-10 * -7 = ?");
switch (e) {
  case 70:
    alert(
      "To'g'ri javob, chunki manfiy songa manfiy son ko'paytirilsa musbat son!",
    );
    break;
  default:
    alert("Noto'g'ri javob");
}

// -----------------------------------------------------------------------------------------------------------------------------------------

let kun = Number(prompt("Hafta kunini raqam bilan kiriting:"));
kun == 1 || kun == 3 || kun == 5
  ? alert("Men bu kuni IT kursiga boraman.")
  : kun == 2 || kun == 4 || kun == 6 || kun == 7
    ? alert("Men bu kuni Ingiliz tili kursiga boraman.")
    : alert("Siz hafta kunini xato kiritdingiz!");

let kursVaqti = Number(
  prompt("Kurs vaqtini bilish uchun hafta kunini raqam bilan kiriting:"),
);
kursVaqti == 1 || kursVaqti == 3 || kursVaqti == 5
  ? alert("Bu kuni IT kursi 8:00da boshlanadi.")
  : kursVaqti == 2 || kursVaqti == 4
    ? alert("Bu kuni Ingiliz tili kursi 10:00da boshlanadi.")
    : kursVaqti == 6
      ? alert("Bu kuni Ingiliz tili kursi 8:00da boshlanadi.")
      : kursVaqti == 7
        ? alert("Bu kuni Ingiliz tili kursi 16:00da boshlanadi.")
        : alert("Siz hafta kunini xato kiritdingiz!");

let fasl = Number(prompt("Faslni raqam bilan, qish 1ga teng holda kiriting:"));
fasl == 1
  ? alert("Kurtka kiying, aks holda shomollab qolishingiz mumkin!")
  : fasl == 2 || fasl == 4
    ? alert(
        "O'zingiz bilan soyabon olib yuring, aks holda yomg'ir to'satdan yog'sa shalabbo bo'lishingiz mumkin!",
      )
    : fasl == 3
      ? alert(
          "Ko'chaga chiqmang, bu faslda magnit bo'roni ko'p bo'ladi, aks holda kasal bo'lib qolishingiz mumkin!",
        )
      : alert("Siz faslni xato kiritdingiz!");

let baho = Number(prompt("Imtihondan olgan ball ingizni kiriting:"));
baho >= 70
  ? alert("Siz imtihondan o'tdingiz!")
  : alert("Siz imtihondan yiqildingiz!");

let zaryad = Number(prompt("Telefon zaryadini kiriting:"));
zaryad < 0 || zaryad > 100
  ? alert("Xato qiymat kiritdingiz!")
  : zaryad >= 80
    ? alert("Zaryad to‘liq")
    : zaryad >= 50
      ? alert("Zaryad yetarli")
      : zaryad >= 20
        ? alert("Zaryad kam")
        : alert("Zaryad juda kam, telefonni ulang!");