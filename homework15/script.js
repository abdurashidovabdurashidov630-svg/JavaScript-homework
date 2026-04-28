let banana = {
  name: "Banana",
  country: "Hindiston",
  price: 24900,
  count: 50,
};

let otherobj = {};
for (let key in banana) {
  if (key === "price") {
    otherobj[key] = banana[key] + 25100;
  } else if (key == "count") {
    otherobj[key] = 70;
  } else if (key == "country") {
    otherobj[key] = "Africa";
  } else if (key == "name") {
    otherobj[key] = "Pinapple";
  } else {
    otherobj[key] = banana[key];
  }
}
console.log(otherobj);


let potato = {
  name: "Potato",
  country: "Uzbekistan",
  price: 6500,
  kilogramm: "50 kilos",
};

let otherobj2 = {};
for (let key in potato) {
  if (key === "price") {
    otherobj2[key] = potato[key] + 11500;
  } else if (key == "kilogramm") {
    otherobj2[key] = "15 kilos";
  } else if (key == "country") {
    otherobj2[key] = "Almost every country";
  } else if (key == "name") {
    otherobj2[key] = "Tomato";
  } else {
    otherobj2[key] = potato[key];
  }
}
console.log(otherobj2);

let tomato = {
  name: "Tomato",
  country: "Uzbekistan",
  price: 18000,
  kilogramm: "30 kilos",
};

let otherobj3 = {};
for (let key in tomato) {
  if (key === "price") {
    otherobj3[key] = tomato[key] - 11500;
  } else if (key == "kilogramm") {
    otherobj3[key] = "25 kilos";
  } else if (key == "country") {
    otherobj3[key] = "Uzbekistan";
  } else if (key == "name") {
    otherobj3[key] = "Potato";
  } else {
    otherobj3[key] = tomato[key];
  }
}
console.log(otherobj3);

let carrot = {
  name: "Carrot",
  country: "Uzbekistan",
  price: 3500,
  kilogramm: "37 kilos",
};

let otherobj4 = {};
for (let key in carrot) {
  if (key === "price") {
    otherobj4[key] = carrot[key] - 2200;
  } else if (key == "kilogramm") {
    otherobj4[key] = "29 kilos";
  } else if (key == "country") {
    otherobj4[key] = "Uzbekistan";
  } else if (key == "name") {
    otherobj4[key] = "Onion";
  } else {
    otherobj4[key] = carrot[key];
  }
}
console.log(otherobj4);

let apple = {
  name: "Apple",
  country: "USA",
  price: 12000,
  count: 40,
};

let otherobj5 = {};
for (let key in apple) {
  if (key === "price") {
    otherobj5[key] = apple[key] + 3000;
  } else if (key == "count") {
    otherobj5[key] = 60;
  } else if (key == "country") {
    otherobj5[key] = "Canada";
  } else if (key == "name") {
    otherobj5[key] = "Pear";
  } else {
    otherobj5[key] = apple[key];
  }
}
console.log(otherobj5);


let orange = {
  name: "Orange",
  country: "Spain",
  price: 15000,
  kilogramm: "20 kilos",
};

let otherobj6 = {};
for (let key in orange) {
  if (key === "price") {
    otherobj6[key] = orange[key] - 2000;
  } else if (key == "kilogramm") {
    otherobj6[key] = "10 kilos";
  } else if (key == "country") {
    otherobj6[key] = "Brazil";
  } else if (key == "name") {
    otherobj6[key] = "Lemon";
  } else {
    otherobj6[key] = orange[key];
  }
}
console.log(otherobj6);


let grape = {
  name: "Grape",
  country: "Italy",
  price: 22000,
  count: 25,
};

let otherobj7 = {};
for (let key in grape) {
  if (key === "price") {
    otherobj7[key] = grape[key] + 5000;
  } else if (key == "count") {
    otherobj7[key] = 35;
  } else if (key == "country") {
    otherobj7[key] = "France";
  } else if (key == "name") {
    otherobj7[key] = "Cherry";
  } else {
    otherobj7[key] = grape[key];
  }
}
console.log(otherobj7);


let mango = {
  name: "Mango",
  country: "India",
  price: 30000,
  kilogramm: "18 kilos",
};

let otherobj8 = {};
for (let key in mango) {
  if (key === "price") {
    otherobj8[key] = mango[key] - 10000;
  } else if (key == "kilogramm") {
    otherobj8[key] = "12 kilos";
  } else if (key == "country") {
    otherobj8[key] = "Thailand";
  } else if (key == "name") {
    otherobj8[key] = "Papaya";
  } else {
    otherobj8[key] = mango[key];
  }
}
console.log(otherobj8);


let onion = {
  name: "Onion",
  country: "Kazakhstan",
  price: 4000,
  count: 80,
};

let otherobj9 = {};
for (let key in onion) {
  if (key === "price") {
    otherobj9[key] = onion[key] + 2000;
  } else if (key == "count") {
    otherobj9[key] = 100;
  } else if (key == "country") {
    otherobj9[key] = "Uzbekistan";
  } else if (key == "name") {
    otherobj9[key] = "Garlic";
  } else {
    otherobj9[key] = onion[key];
  }
}
console.log(otherobj9);


let cucumber = {
  name: "Cucumber",
  country: "Turkey",
  price: 7000,
  kilogramm: "22 kilos",
};

let otherobj10 = {};
for (let key in cucumber) {
  if (key === "price") {
    otherobj10[key] = cucumber[key] - 3000;
  } else if (key == "kilogramm") {
    otherobj10[key] = "15 kilos";
  } else if (key == "country") {
    otherobj10[key] = "Iran";
  } else if (key == "name") {
    otherobj10[key] = "Zucchini";
  } else {
    otherobj10[key] = cucumber[key];
  }
}
console.log(otherobj10);