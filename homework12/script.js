function mashq1() {
  let i = 5;
  while (i <= 15) {
    console.log(i);
    i++;
  }

  let j = 5;
  do {
    console.log(j);
    j++;
  } while (j <= 15);
}

function mashq2() {
  let i = 1, yigindi = 0;
  while (i <= 200) {
    yigindi += i;
    i++;
  }
  console.log(yigindi);

  let j = 1, yigindi2 = 0;
  do {
    yigindi2 += j;
    j++;
  } while (j <= 200);
  console.log(yigindi2);
}

function mashq3() {
  let i = 1;
  while (i <= 60) {
    if (i % 2 === 0) console.log(i);
    i++;
  }

  let j = 1;
  do {
    if (j % 2 === 0) console.log(j);
    j++;
  } while (j <= 60);
}

function mashq4() {
  let i = 1;
  while (i <= 60) {
    if (i % 2 !== 0) console.log(i);
    i++;
  }

  let j = 1;
  do {
    if (j % 2 !== 0) console.log(j);
    j++;
  } while (j <= 60);
}

function mashq5() {
  let n = +prompt("N ni kiriting:");
  let i = 1;

  while (i <= n) {
    console.log(i ** 3);
    i++;
  }

  let j = 1;
  do {
    console.log(j ** 3);
    j++;
  } while (j <= n);
}

function mashq6() {
  let n = +prompt("N:");
  let i = 1;

  while (i <= n) {
    if (i % 4 === 0) console.log(i);
    i++;
  }

  let j = 1;
  do {
    if (j % 4 === 0) console.log(j);
    j++;
  } while (j <= n);
}

function mashq7() {
  let n = +prompt("N:");
  let i = 1, yigindi = 0;

  while (i <= n) {
    yigindi += i;
    i++;
  }
  console.log(yigindi);

  let j = 1, yigindi2 = 0;
  do {
    yigindi2 += j;
    j++;
  } while (j <= n);
  console.log(yigindi2);
}

function mashq8() {
  let i = 1;
  while (i <= 150) {
    if (i % 3 === 0 && i % 5 === 0) console.log(i);
    i++;
  }

  let j = 1;
  do {
    if (j % 3 === 0 && j % 5 === 0) console.log(j);
    j++;
  } while (j <= 150);
}

function mashq9() {
  let i = 20;
  while (i >= 1) {
    console.log(i);
    i--;
  }

  let j = 20;
  do {
    console.log(j);
    j--;
  } while (j >= 1);
}

function mashq10() {
  let n = +prompt("N:");
  let i = 1, yigindi = 0;

  while (i <= n) {
    if (i % 2 === 0) yigindi += i;
    i++;
  }
  console.log(yigindi);

  let j = 1, yigindi2 = 0;
  do {
    if (j % 2 === 0) yigindi2 += j;
    j++;
  } while (j <= n);
  console.log(yigindi2);
}


const mashq11 = function() {
  let i = 5;
  while (i <= 15) {
    console.log(i);
    i++;
  }

  let j = 5;
  do {
    console.log(j);
    j++;
  } while (j <= 15);
};

const mashq12 = function() {
  let i = 1, yigindi = 0;
  while (i <= 200) {
    yigindi += i;
    i++;
  }
  console.log(yigindi);

  let j = 1, yigindi2 = 0;
  do {
    yigindi2 += j;
    j++;
  } while (j <= 200);
  console.log(yigindi2);
};

const mashq13 = function() {
  let i = 1;
  while (i <= 60) {
    if (i % 2 === 0) console.log(i);
    i++;
  }

  let j = 1;
  do {
    if (j % 2 === 0) console.log(j);
    j++;
  } while (j <= 60);
};

const mashq14 = function() {
  let i = 1;
  while (i <= 60) {
    if (i % 2 !== 0) console.log(i);
    i++;
  }

  let j = 1;
  do {
    if (j % 2 !== 0) console.log(j);
    j++;
  } while (j <= 60);
};

const mashq15 = function() {
  let n = +prompt("N ni kiriting:");
  let i = 1;

  while (i <= n) {
    console.log(i ** 3);
    i++;
  }

  let j = 1;
  do {
    console.log(j ** 3);
    j++;
  } while (j <= n);
};

const mashq16 = function() {
  let n = +prompt("N:");
  let i = 1;

  while (i <= n) {
    if (i % 4 === 0) console.log(i);
    i++;
  }

  let j = 1;
  do {
    if (j % 4 === 0) console.log(j);
    j++;
  } while (j <= n);
};

const mashq17 = function() {
  let n = +prompt("N:");
  let i = 1, yigindi = 0;

  while (i <= n) {
    yigindi += i;
    i++;
  }
  console.log(yigindi);

  let j = 1, yigindi2 = 0;
  do {
    yigindi2 += j;
    j++;
  } while (j <= n);
  console.log(yigindi2);
};

const mashq18 = function() {
  let i = 1;
  while (i <= 150) {
    if (i % 3 === 0 && i % 5 === 0) console.log(i);
    i++;
  }

  let j = 1;
  do {
    if (j % 3 === 0 && j % 5 === 0) console.log(j);
    j++;
  } while (j <= 150);
};

const mashq19 = function() {
  let i = 20;
  while (i >= 1) {
    console.log(i);
    i--;
  }

  let j = 20;
  do {
    console.log(j);
    j--;
  } while (j >= 1);
};

const mashq20 = function() {
  let n = +prompt("N:");
  let i = 1, yigindi = 0;

  while (i <= n) {
    if (i % 2 === 0) yigindi += i;
    i++;
  }
  console.log(yigindi);

  let j = 1, yigindi2 = 0;
  do {
    if (j % 2 === 0) yigindi2 += j;
    j++;
  } while (j <= n);
  console.log(yigindi2);
};


const mashq21 = () => {
  let i = 5;
  while (i <= 15) {
    console.log(i);
    i++;
  }

  let j = 5;
  do {
    console.log(j);
    j++;
  } while (j <= 15);
};

const mashq22 = () => {
  let i = 1, yigindi = 0;
  while (i <= 200) {
    yigindi += i;
    i++;
  }
  console.log(yigindi);

  let j = 1, yigindi2 = 0;
  do {
    yigindi2 += j;
    j++;
  } while (j <= 200);
  console.log(yigindi2);
};

const mashq23 = () => {
  let i = 1;
  while (i <= 60) {
    if (i % 2 === 0) console.log(i);
    i++;
  }

  let j = 1;
  do {
    if (j % 2 === 0) console.log(j);
    j++;
  } while (j <= 60);
};

const mashq24 = () => {
  let i = 1;
  while (i <= 60) {
    if (i % 2 !== 0) console.log(i);
    i++;
  }

  let j = 1;
  do {
    if (j % 2 !== 0) console.log(j);
    j++;
  } while (j <= 60);
};

const mashq25 = () => {
  let n = +prompt("N ni kiriting:");
  let i = 1;

  while (i <= n) {
    console.log(i ** 3);
    i++;
  }

  let j = 1;
  do {
    console.log(j ** 3);
    j++;
  } while (j <= n);
};

const mashq26 = () => {
  let n = +prompt("N:");
  let i = 1;

  while (i <= n) {
    if (i % 4 === 0) console.log(i);
    i++;
  }

  let j = 1;
  do {
    if (j % 4 === 0) console.log(j);
    j++;
  } while (j <= n);
};

const mashq27 = () => {
  let n = +prompt("N:");
  let i = 1, yigindi = 0;

  while (i <= n) {
    yigindi += i;
    i++;
  }
  console.log(yigindi);

  let j = 1, yigindi2 = 0;
  do {
    yigindi2 += j;
    j++;
  } while (j <= n);
  console.log(yigindi2);
};

const mashq28 = () => {
  let i = 1;
  while (i <= 150) {
    if (i % 3 === 0 && i % 5 === 0) console.log(i);
    i++;
  }

  let j = 1;
  do {
    if (j % 3 === 0 && j % 5 === 0) console.log(j);
    j++;
  } while (j <= 150);
};

const mashq29 = () => {
  let i = 20;
  while (i >= 1) {
    console.log(i);
    i--;
  }

  let j = 20;
  do {
    console.log(j);
    j--;
  } while (j >= 1);
};

const mashq30 = () => {
  let n = +prompt("N:");
  let i = 1, yigindi = 0;

  while (i <= n) {
    if (i % 2 === 0) yigindi += i;
    i++;
  }
  console.log(yigindi);

  let j = 1, yigindi2 = 0;
  do {
    if (j % 2 === 0) yigindi2 += j;
    j++;
  } while (j <= n);
  console.log(yigindi2);
};

mashq1();
mashq2();
mashq3();
mashq4();
mashq5();
mashq6();
mashq7();
mashq8();
mashq9();
mashq10();
mashq11();
mashq12();
mashq13();
mashq14();
mashq15();
mashq16();
mashq17();
mashq18();
mashq19();
mashq20();
mashq21();
mashq22();
mashq23();
mashq24();
mashq25();
mashq26();
mashq27();
mashq28();
mashq29();
mashq30();