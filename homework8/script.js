// 1. 5 dan 15 gacha bo‘lgan barcha sonlarni ketma-ket console ga chiqaring.
// let i = 5;
// while (i <= 15) {
//   console.log(i);
//   i++;
// }
// let i = 5;
// do {
//   console.log(i);
//   i++;
// // } while (i <= 15);
// 2. 1 dan 200 gacha bo‘lgan barcha sonlarni qo‘shib, umumiy yig‘indini console ga chiqaring.
// let i = 1
// yigindi = 0;
// while (i <= 200) {
//   yigindi += i;
//   i++;
// }
// console.log(yigindi);
// let i = 1, yigindi = 0;
// do {
//   yigindi += i;
//   i++;
// } while (i <= 200);
// console.log(yigindi);
// 3. 1 dan 60 gacha bo‘lgan juft sonlarni (2 ga bo‘linadigan) console ga chiqaring.
// // while
// let i = 1;
// while (i <= 60) {
//   if (i % 2 === 0) console.log(i);
//   i++;
// }

// // do while
// let j = 1;
// do {
//   if (j % 2 === 0) console.log(j);
//   j++;
// } while (j <= 60);
// 4. 1 dan 60 gacha bo‘lgan toq sonlarni (2 ga bo‘linmaydigan) console ga chiqaring.
// let i = 1;
// while (i <= 60) {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// }

// let j = 1;
// do {
//   if (j % 2 !== 0) console.log(j);
//   j++;
// } while (j <= 60);
// 5. Foydalanuvchi prompt orqali N sonini kiritadi. 1 dan N gacha bo‘lgan har bir sonning kubini (son * son * son) hisoblab console ga chiqaring.
// let n = +prompt("N ni kiriting:");
// let i = 1;

// while (i <= n) {
//   console.log(i ** 3);
//   i++;
// }

// let j = 1;
// do {
//   console.log(j ** 3);
//   j++;
// } while (j <= n);
// 6. Foydalanuvchi prompt orqali N sonini kiritadi. 1 dan N gacha bo‘lgan sonlar ichidan faqat 4 ga bo‘linadiganlarini console ga chiqaring.
// let n = +prompt("N:");
// let i = 1;

// while (i <= n) {
//   if (i % 4 === 0) console.log(i);
//   i++;
// }

// let j = 1;
// do {
//   if (j % 4 === 0) console.log(j);
//   j++;
// } while (j <= n);
// 7. Foydalanuvchi prompt orqali N sonini kiritadi. 1 dan N gacha bo‘lgan barcha sonlarni qo‘shib, yig‘indini toping va console ga chiqaring.
// let n = +prompt("N:");
// let i = 1, yigindi = 0;

// while (i <= n) {
//   yigindi += i;
//   i++;
// }
// console.log(yigindi);

// let j = 1, yigindi2 = 0;
// do {
//   sum2 += j;
//   j++;
// } while (j <= n);
// console.log(yigindi2);
// 8. 1 dan 150 gacha bo‘lgan sonlar ichidan 3 ga ham, 5 ga ham bo‘linadigan sonlarni console ga chiqaring.
// let i = 1;
// while (i <= 150) {
//   if (i % 3 === 0 && i % 5 === 0) console.log(i);
//   i++;
// }

// let j = 1;
// do {
//   if (j % 3 === 0 && j % 5 === 0) console.log(j);
//   j++;
// } while (j <= 150);
// 9. 20 dan 1 gacha bo‘lgan sonlarni kamayish tartibida (teskari) console ga chiqaring.
// let i = 20;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// let j = 20;
// do {
//   console.log(j);
//   j--;
// } while (j >= 1);
// 10. Foydalanuvchi prompt orqali N sonini kiritadi. 1 dan N gacha bo‘lgan faqat juft sonlarni qo‘shib, yig‘indini console ga chiqaring.
// let n = +prompt("N:");
// let i = 1, sum = 0;

// while (i <= n) {
//   if (i % 2 === 0) yigindi += i;
//   i++;
// }
// console.log(yigindi);

// let j = 1, yigindi2 = 0;
// do {
//   if (j % 2 === 0) yigindi2 += j;
//   j++;
// } while (j <= n);
// console.log(yigindi2);
// 11. Foydalanuvchi prompt orqali N sonini kiritadi. 1 dan N gacha bo‘lgan sonlar ichida nechta toq son borligini hisoblab console ga chiqaring.
// let n = +prompt("N:");
// let i = 1
// count = 0;

// while (i <= n) {
//   if (i % 2 !== 0) count++;
//   i++;
// }
// console.log(count);

// let j = 1, count2 = 0;
// do {
//   if (j % 2 !== 0) count2++;
//   j++;
// } while (j <= n);
// console.log(count2);
// 12. Foydalanuvchi prompt orqali N sonini kiritadi. 1 dan N gacha bo‘lgan sonlar ichidan eng kichik sonni (minimal qiymatni) for yordamida topib console ga chiqaring.
// let n = +prompt("N:");
// let i = 1, min = i;

// while (i <= n) {
//   if (i < min) min = i;
//   i++;
// }
// console.log(min);

// let j = 1, min2 = j;
// do {
//   if (j < min2) min2 = j;
//   j++;
// } while (j <= n);
// console.log(min2);
// 13. 1 dan 30 gacha bo‘lgan sonlar ichida 3 ga bo‘linadigan sonlar nechta ekanligini hisoblab console ga chiqaring.
// let i = 1, count = 0;

// while (i <= 30) {
//   if (i % 3 === 0) count++;
//   i++;
// }
// console.log(count);

// let j = 1, count2 = 0;
// do {
//   if (j % 3 === 0) count2++;
//   j++;
// } while (j <= 30);
// console.log(count2);
// 14. Foydalanuvchi prompt orqali N sonini kiritadi. 1 dan N gacha bo‘lgan sonlar ichidan faqat 20 dan kichik sonlarni console ga chiqaring.
// let n = +prompt("N:");
// let i = 1;

// while (i <= n) {
//   if (i < 20) console.log(i);
//   i++;
// }

// let j = 1;
// do {
//   if (j < 20) console.log(j);
//   j++;
// } while (j <= n);
// 15. Foydalanuvchi prompt orqali N sonini kiritadi. Shu son uchun qo‘shish jadvalini chiqaring (masalan: N+1, N+2, ..., N+10).
// let n = +prompt("N:");
// let i = 1;

// while (i <= 10) {
//   console.log(n + i);
//   i++;
// }

// let j = 1;
// do {
//   console.log(n + j);
//   j++;
// } while (j <= 10);
// 16. 1 dan 100 gacha bo‘lgan sonlar ichidan 9 ga bo‘linadigan sonlarni console ga chiqaring.
// let i = 1;
// while (i <= 100) {
//   if (i % 9 === 0) console.log(i);
//   i++;
// }

// let j = 1;
// do {
//   if (j % 9 === 0) console.log(j);
//   j++;
// } while (j <= 100);
// 17. Foydalanuvchi prompt orqali N sonini kiritadi. 1 dan N gacha bo‘lgan sonlar ichida eng katta toq sonni topib console ga chiqaring.
// let n = +prompt("N:");
// let i = 1, max = 0;

// while (i <= n) {
//   if (i % 2 !== 0) max = i;
//   i++;
// }
// console.log(max);

// let j = 1, max2 = 0;
// do {
//   if (j % 2 !== 0) max2 = j;
//   j++;
// } while (j <= n);
// console.log(max2);
// 18. 1 dan 40 gacha bo‘lgan sonlar ichidan 6 ga bo‘linmaydigan sonlarni console ga chiqaring.
// let i = 1;
// while (i <= 40) {
//   if (i % 6 !== 0) console.log(i);
//   i++;
// }

// let j = 1;
// do {
//   if (j % 6 !== 0) console.log(j);
//   j++;
// } while (j <= 40);
// 19. Foydalanuvchi prompt orqali N sonini kiritadi. 1 dan N gacha bo‘lgan sonlar ichida bir vaqtning o‘zida 2 ga ham, 3 ga ham bo‘linadigan sonlar nechta ekanligini hisoblang.
// let n = +prompt("N:");
// let i = 1, count = 0;

// while (i <= n) {
//   if (i % 2 === 0 && i % 3 === 0) count++;
//   i++;
// }
// console.log(count);

// let j = 1, count2 = 0;
// do {
//   if (j % 2 === 0 && j % 3 === 0) count2++;
//   j++;
// } while (j <= n);
// console.log(count2);
// 20. Foydalanuvchi prompt orqali N sonini kiritadi. 1 dan N gacha bo‘lgan sonlar ichidan 5 ga bo‘linadigan sonlarni qo‘shib, yig‘indini console ga chiqaring.
// let n = +prompt("N:");
// let i = 1, sum = 0;

// while (i <= n) {
//   if (i % 5 === 0) yigindi += i;
//   i++;
// }
// console.log(yigindi);

// let j = 1
// yigindi2 = 0;
// do {
//   if (j % 5 === 0) yigindi2 += j;
//   j++;
// } while (j <= n);
// console.log(yigindi2);
