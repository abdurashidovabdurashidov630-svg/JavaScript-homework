// for (let i = 1; i <= 20; i++) {
//     if (i % 5 === 0) continue;
//     console.log(i);
// }
// let i = 1;
// while (i <= 20) {
//     if (i % 5 === 0) { i++; continue; }
//     console.log(i);
//     i++;
// }
// i = 1;
// do {
//     if (i % 5 === 0) { i++; continue; }
//     console.log(i);
//     i++;
// } while (i <= 20);

// for (let i2 = 1; i2 <= 30; i2++) {
//     if (i2 % 2 !== 0) continue;
//     console.log(i2);
// }
// let i2 = 1;
// while (i2 <= 30) {
//     if (i2 % 2 !== 0) { i2++; continue; }
//     console.log(i2);
//     i2++;
// }
// i2 = 1;
// do {
//     if (i2 % 2 !== 0) { i2++; continue; }
//     console.log(i2);
//     i2++;
// } while (i2 <= 30);

// let j = 0;
// for (let i = 1; i <= 50; i++) {
//     if (i >= 10 && i <= 20) continue;
//     j += i;
// }
// console.log(j);

// i = 1; j = 0;
// while (i <= 50) {
//     if (i >= 10 && i <= 20) { i++; continue; }
//     j += i;
//     i++;
// }
// console.log(j);

// i = 1; j = 0;
// do {
//     if (i >= 10 && i <= 20) { i++; continue; }
//     j += i;
//     i++;
// } while (i <= 50);
// console.log(j);

// for (let i = 1; i <= 100; i++) {
//   let j = 0;
//   let k = i;
//   while (k > 0) {
//     j += k % 10;
//     k = (k - (k % 10)) / 10;
//   }
//   if (j === 5) continue;
//   console.log(i);
// }

// i = 1;
// while (i <= 100) {
//     let j = 0, k = i;
//     while (k > 0) {
//         j += k % 10;
//         k = (k - k % 10) / 10;
//     }
//     if (j === 5) { i++; continue; }
//     console.log(i);
//     i++;
// }
// i = 1;
// do {
//     let j = 0, k = i;
//     while (k > 0) {
//         j += k % 10;
//         k = (k - k % 10) / 10;
//     }
//     if (j === 5) { i++; continue; }
//     console.log(i);
//     i++;
// } while (i <= 100);

// j = 1;
// for (let i = 1; i <= 40; i++) {
//     if (i % 3 === 0 && i % 7 === 0) continue;
//     j *= i;
// }
// console.log(j);

// i = 1; j = 1;
// while (i <= 40) {
//     if (i % 3 === 0 && i % 7 === 0) { i++; continue; }
//     j *= i;
//     i++;
// }
// console.log(j);

// i = 1; j = 1;
// do {
//     if (i % 3 === 0 && i % 7 === 0) { i++; continue; }
//     j *= i;
//     i++;
// } while (i <= 40);
// console.log(j);

// for (let i = 2; i <= 100; i++) {
//     let j = 0;
//     for (let i2 = 2; i2 < i; i2++) {
//         if (i % i2 === 0) { j = 1; break; }
//     }
//     if (j === 1) continue;
//     console.log(i);
// }

// i = 2;
// while (i <= 100) {
//     let j = 0, i2 = 2;
//     while (i2 < i) {
//         if (i % i2 === 0) { j = 1; break; }
//         i2++;
//     }
//     if (j === 1) { i++; continue; }
//     console.log(i);
//     i++;
// }

// i = 2;
// do {
//     let j = 0, i2 = 2;
//     while (i2 < i) {
//         if (i % i2 === 0) { j = 1; break; }
//         i2++;
//     }
//     if (j === 1) { i++; continue; }
//     console.log(i);
//     i++;
// } while (i <= 100);

// for (let i = 1; i <= 50; i++) {
//     if (i >= 10 && i % 11 === 0) continue;
//     console.log(i);
// }
// i = 1;
// while (i <= 50) {
//     if (i >= 10 && i % 11 === 0) { i++; continue; }
//     console.log(i);
//     i++;
// }
// i = 1;
// do {
//     if (i >= 10 && i % 11 === 0) { i++; continue; }
//     console.log(i);
//     i++;
// } while (i <= 50);

// j = 0;
// for (let i = 1; i <= 100; i++) {
//     let k = 0;
//     for (let i2 = 1; i2 < i; i2++) {
//         if (i % i2 === 0) k += i2;
//     }
//     if (k !== i) continue;
//     j++;
// }
// console.log(j);

// i = 1; j = 0;
// while (i <= 100) {
//     let k = 0, i2 = 1;
//     while (i2 < i) {
//         if (i % i2 === 0) k += i2;
//         i2++;
//     }
//     if (k !== i) { i++; continue; }
//     j++;
//     i++;
// }
// console.log(j);

// i = 1; j = 0;
// do {
//     let k = 0, i2 = 1;
//     while (i2 < i) {
//         if (i % i2 === 0) k += i2;
//         i2++;
//     }
//     if (k !== i) { i++; continue; }
//     j++;
//     i++;
// } while (i <= 100);
// console.log(j);

// for (let i = 1; i <= 1000; i++) {
//     let j = i, k = 0;
//     while (j > 0) {
//         k = k * 10 + (j % 10);
//         j = (j - j % 10) / 10;
//     }
//     if (k !== i) continue;
//     console.log(i);
// }

// i = 1;
// while (i <= 1000) {
//     let j = i, k = 0;
//     while (j > 0) {
//         k = k * 10 + (j % 10);
//         j = (j - j % 10) / 10;
//     }
//     if (k !== i) { i++; continue; }
//     console.log(i);
//     i++;
// }

// i = 1;
// do {
//     let j = i, k = 0;
//     while (j > 0) {
//         k = k * 10 + (j % 10);
//         j = (j - j % 10) / 10;
//     }
//     if (k !== i) { i++; continue; }
//     console.log(i);
//     i++;
// } while (i <= 1000);

// j = 0;
// for (let i = 0; i < 10; i++) {
//     let k = Number(prompt());
//     if (k < 0) continue;
//     j += k;
// }
// console.log(j);

// i = 0; j = 0;
// while (i < 10) {
//     let k = Number(prompt());
//     if (k < 0) { i++; continue; }
//     j += k;
//     i++;
// }
// console.log(j);

// i = 0; j = 0;
// do {
//     let k = Number(prompt());
//     if (k < 0) { i++; continue; }
//     j += k;
//     i++;
// } while (i < 10);
// console.log(j);

// for (let i = 1; ; i++) {
//     if (i % 7 === 0) break;
//     console.log(i);
// }
// i = 1;
// while (true) {
//     if (i % 7 === 0) break;
//     console.log(i);
//     i++;
// }
// i = 1;
// do {
//     if (i % 7 === 0) break;
//     console.log(i);
//     i++;
// } while (true);

// i = 1; j = 0; k = 0;
// while (true) {
//     j += i;
//     k++;
//     if (j > 100) break;
//     i++;
// }
// console.log(j, k);

// i = 1; j = 0; k = 0;
// do {
//     j += i;
//     k++;
//     if (j > 100) break;
//     i++;
// } while (true);
// console.log(j, k);

// for (let i = 2; ; i++) {
//     let j = 0;
//     for (let i2 = 2; i2 < i; i2++) {
//         if (i % i2 === 0) { j = 1; break; }
//     }
//     if (i > 50 && j === 0) {
//         console.log(i);
//         break;
//     }
// }

// i = 2;
// while (true) {
//     let j = 0, i2 = 2;
//     while (i2 < i) {
//         if (i % i2 === 0) { j = 1; break; }
//         i2++;
//     }
//     if (i > 50 && j === 0) {
//         console.log(i);
//         break;
//     }
//     i++;
// }

// i = 2;
// do {
//     let j = 0, i2 = 2;
//     while (i2 < i) {
//         if (i % i2 === 0) { j = 1; break; }
//         i2++;
//     }
//     if (i > 50 && j === 0) {
//         console.log(i);
//         break;
//     }
//     i++;
// } while (true);

// j = 0; k = 0;
// for (let i = 0; i < 10; i++) {
//     let i2 = Number(prompt());
//     if (i2 === 0) break;
//     j += i2;
//     k++;
// }
// console.log(k === 0 ? 0 : j / k);

// j = 0; k = 0; i = 0;
// while (i < 10) {
//     let i2 = Number(prompt());
//     if (i2 === 0) break;
//     j += i2;
//     k++;
//     i++;
// }
// console.log(k === 0 ? 0 : j / k);

// j = 0; k = 0; i = 0;
// do {
//     if (i >= 10) break;
//     let i2 = Number(prompt());
//     if (i2 === 0) break;
//     j += i2;
//     k++;
//     i++;
// } while (true);
// console.log(k === 0 ? 0 : j / k);

// for (let i = 1; ; i++) {
//     if (i * i > 1000) break;
// }
// console.log(i);

// i = 1;
// while (true) {
//     if (i * i > 1000) break;
//     i++;
// }
// console.log(i);

// i = 1;
// do {
//     if (i * i > 1000) break;
//     i++;
// } while (true);
// console.log(i);

// let k2 = Number(prompt());
// let j2 = 0;
// for (let i = 1; i <= k2; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i);
//         j2 = 1;
//         break;
//     }
// }
// if (j2 === 0) console.log("Topilmadi");

// k2 = Number(prompt());
// j2 = 0; i = 1;
// while (i <= k2) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i);
//         j2 = 1;
//         break;
//     }
//     i++;
// }
// if (j2 === 0) console.log("Topilmadi");

// k2 = Number(prompt());
// j2 = 0; i = 1;
// do {
//     if (i > k2) break;
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i);
//         j2 = 1;
//         break;
//     }
//     i++;
// } while (true);
// if (j2 === 0) console.log("Topilmadi");

// for (let i = 100; i >= 1; i--) {
//     if (i % 17 === 0) break;
//     console.log(i);
// }
// i = 100;
// while (i >= 1) {
//     if (i % 17 === 0) break;
//     console.log(i);
//     i--;
// }
// i = 100;
// do {
//     if (i % 17 === 0) break;
//     console.log(i);
//     i--;
// } while (i >= 1);

// j = 1;
// for (let i = 1; ; i++) {
//     j *= i;
//     if (j > 5000) break;
// }
// console.log(j);

// i = 1; j = 1;
// while (true) {
//     j *= i;
//     if (j > 5000) break;
//     i++;
// }
// console.log(j);

// i = 1; j = 1;
// do {
//     j *= i;
//     if (j > 5000) break;
//     i++;
// } while (true);
// console.log(j);

// let i3 = 1, i4 = 1, k = 0;
// while (true) {
//     console.log(i3);
//     let j = i3 + i4;
//     i3 = i4;
//     i4 = j;
//     k++;
//     if (i3 > 200) break;
// }
// console.log(k);

// i3 = 1; i4 = 1; k = 0;
// do {
//     console.log(i3);
//     let j = i3 + i4;
//     i3 = i4;
//     i4 = j;
//     k++;
//     if (i3 > 200) break;
// } while (true);
// console.log(k);

// let k2n = Number(prompt());
// while (k2n > 0) {
//     let j = k2n % 10;
//     console.log(j);
//     if (j === 5) break;
//     k2n = (k2n - j) / 10;
// }

// k2n = Number(prompt());
// do {
//     if (k2n <= 0) break;
//     let j = k2n % 10;
//     console.log(j);
//     if (j === 5) break;
//     k2n = (k2n - j) / 10;
// } while (true);