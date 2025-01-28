function begin1() {
    let a = prompt("To'g'ri to'rtburchakning birinchi tomoni a ni kiriting:");
    let b = prompt("To'g'ri to'rtburchakning ikkinchi tomoni b ni kiriting:");
  
    let S = a * b;
    let P = 2 * (a + b);
  
    window.alert("To'g'ri to'rtburchakning maydoni: " + S);
    window.alert("To'g'ri to'rtburchakning perimetri: " + P);
  }
  
  // begin2
  
  function begin2() {
    let d = prompt("Aylananing diametri d ni kiriting:");
    let pi = 3.14;
  
    let L = pi * d;
    let r = d / 2;
    let S = pi * r * r;
  
    window.alert("Aylananing uzunligi: " + L);
    window.alert("Aylananing yuzasi: " + S);
  }
  
  // begin3
  
  function begin3() {
    let a = prompt("Kubning yon tomoni a ni kiriting:");
  
    let V = a * a * a;
    let S = 6 * a * a;
  
    window.alert("Kubning hajmi: " + V);
    window.alert("Kubning to'la sirti: " + S);
  }
  
  // begin4
  
  function begin4() {
    let a = prompt("Paralelepepidning tomoni a ni kiriting:");
    let b = prompt("Paralelepepidning tomoni b ni kiriting:");
    let c = prompt("Paralelepepidning tomoni c ni kiriting:");
  
    let V = a * b * c;
    let S = 2 * (a * b + b * c + a * c);
  
    window.alert("Paralelepepidning hajmi: " + V);
    window.alert("Paralelepepidning to'la sirti: " + S);
  }
  
  // begin5
  
  function begin5() {
    let a = prompt("Birinchi son a ni kiriting:");
    let b = prompt("Ikkinchi son b ni kiriting:");
  
    let M = (a + b) / 2;
  
    window.alert("O'rta arifmetik: " + M);
  }
  
  // begin6
  
  function begin6() {
    let a = prompt("To'g'ri uchburchakning birinchi kateti a ni kiriting:");
    let b = prompt("To'g'ri uchburchakning ikkinchi kateti b ni kiriting:");
  
    let c = Math.sqrt(a * a + b * b);
    let P = parseFloat(a) + parseFloat(b) + parseFloat(c);
  
    window.alert("Gipotenuza: " + c);
    window.alert("Perimetri: " + P);
  }
  
  // begin7
  
  function begin7() {
    let r1 = prompt("Ikkita aylananing katta radiusi r1 ni kiriting:");
    let r2 = prompt("Ikkita aylananing kichik radiusi r2 ni kiriting:");
  
    let S1 = pi * r1 * r1;
    let S2 = pi * r2 * r2;
    let S = S1 - S2;
  
    window.alert("Katta aylananing yuzasi: " + S1);
    window.alert("Kichik aylananing yuzasi: " + S2);
    window.alert("Yuzalar ayirmasi: " + S);
  }
  
  // begin8
  
  function begin8() {
    let L = prompt("Aylananing uzunligi L ni kiriting:");
    let pi = 3.14;
  
    let R = L / (2 * pi);
    let S = pi * R * R;
  
    window.alert("Aylananing radiusi: " + R);
    window.alert("Aylananing yuzasi: " + S);
  }
  
  //begin9
  
  function begin9() {
    let x1 = prompt("Birinchi nuqta x1 ni kiriting:");
    let y1 = prompt("Birinchi nuqta y1 ni kiriting:");
    let x2 = prompt("Ikkinchi nuqta x2 ni kiriting:");
    let y2 = prompt("Ikkinchi nuqta y2 ni kiriting:");
  
    let L = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)); // Masofa
  
    window.alert("Ikki nuqta orasidagi masofa: " + L);
  }
  
  //begin10
  
  function begin10() {
    let A = prompt("A ni kiriting:");
    let B = prompt("B ni kiriting:");
    let C = prompt("C ni kiriting:");
  
    let temp = A;
    A = B;
    B = C;
    C = temp;
  
    window.alert("Yangi A: " + A);
    window.alert("Yangi B: " + B);
    window.alert("Yangi C: " + C);
  }
  
  //begin11
  
  function begin11() {
    let x = prompt("x ning qiymatini kiriting:");
  
    let y = 4 * Math.pow(x - 3, 6) - 7 * Math.pow(x - 3, 3) + 2;
  
    window.alert("y ning qiymati: " + y);
  }
  
  //begin12
  
  function begin12() {
    let A = prompt("A ning qiymatini kiriting:");
  
    let A3 = A * A * A;
    let A6 = A3 * A3;
    let A9 = A6 * A3;
    let A15 = A9 * A6;
  
    window.alert("A^3: " + A3);
    window.alert("A^6: " + A6);
    window.alert("A^9: " + A9);
    window.alert("A^15: " + A15);
  }
  
  //begin13
  
  function begin13() {
    let Tf = prompt("Temperatura Tf ni kiriting (Farengeyt):");
  
    let Tc = ((Tf - 32) * 5) / 9;
  
    window.alert("Temperatura Tc (Selsiy): " + Tc);
  }
  
  //begin14
  
  function begin14() {
    let X = prompt("Shokoladning miqdori (kg) X ni kiriting:");
    let A = prompt("Shokolad narxi A ni kiriting:");
    let Y = prompt("Konfetning miqdori (kg) Y ni kiriting:");
    let B = prompt("Konfet narxi B ni kiriting:");
  
    let diff = A / X - B / Y;
  
    window.alert("Shokolad 1 kg konfetdan qancha qimmat: " + diff);
  }
  
  //begin15
  
  function begin15() {
    let X = prompt("Abdulaziz X kg olma sotib oldi, miqdorini kiriting:");
    let A = prompt("X kg olma narxi A ni kiriting:");
    let Y = prompt("Y kg olma narxi B ni kiriting:");
    let B = prompt("B narxi kiriting:");
  
    let total = X * A + Y * B;
  
    window.alert("Abdulaziz jami qancha savdo qilgan: " + total);
  }

  // INTEGER MASALALAR

  function integer1() {
    let number = prompt("Uch xonali sonni kiriting:");
    number = parseInt(number);
    let birliklar = number % 10;
    let onliklar = Math.floor((number / 10) % 10);
    alert("Birliklar xonasi: " + birliklar + ", O'nliklar xonasi: " + onliklar);
  }

  // integer2
  
  function integer2() {
    let number = prompt("Uch xonali sonni kiriting:");
    number = parseInt(number);
    let sum = Math.floor(number / 100) + Math.floor((number / 10) % 10) + (number % 10);
    alert("Raqamlar yig'indisi: " + sum);
  }

  // integer3
  
  function integer3() {
    let number = prompt("Uch xonali sonni kiriting:");
    number = parseInt(number);
    let yuzliklar = Math.floor(number / 100);
    let onliklar = Math.floor((number / 10) % 10);
    let birliklar = number % 10;
    let reversed = birliklar * 100 + onliklar * 10 + yuzliklar;
    alert("Teskari tartibda yozilgan son: " + reversed);
  }

  // integer4
  
  function integer4() {
    let number = prompt("Uch xonali sonni kiriting:");
    number = parseInt(number);
    let yuzliklar = Math.floor(number / 100);
    let onliklar = Math.floor((number / 10) % 10);
    let birliklar = number % 10;
    let swapped = onliklar * 100 + yuzliklar * 10 + birliklar;
    alert("O'nliklar va yuzliklar xonasini almashtirganda: " + swapped);
  }

  // integer5
  
  function integer5() {
    let number = prompt("Uch xonali sonni kiriting:");
    number = parseInt(number);
    let yuzliklar = Math.floor(number / 100);
    let onliklar = Math.floor((number / 10) % 10);
    let birliklar = number % 10;
    let swapped = birliklar * 100 + onliklar * 10 + yuzliklar;
    alert("Birliklar va o'nliklar xonasini almashtirganda: " + swapped);
  }

  // integer6
  
  function integer6() {
    let number = prompt("999 dan katta sonni kiriting:");
    number = parseInt(number);
    let thousands = Math.floor(number / 1000);
    alert("Mingliklar xonasi: " + thousands);
  }

  // integer7
  
  function integer7() {
    let seconds = prompt("Kun boshidan boshlab o'tgan sekundlarni kiriting:");
    seconds = parseInt(seconds);
    let minutes = Math.floor(seconds / 60);
    alert("Kun boshidan boshlab to'la o'tgan minutlar: " + minutes);
  }

  // integer8
  
  function integer8() {
    let seconds = prompt("Kun boshidan boshlab o'tgan sekundlarni kiriting:");
    seconds = parseInt(seconds);
    let hours = Math.floor(seconds / 3600);
    alert("Kun boshidan boshlab to'la o'tgan soatlar: " + hours);
  }

  // integer9
  
  function integer9() {
    let seconds = prompt("Kun boshidan boshlab o'tgan sekundlarni kiriting:");
    seconds = parseInt(seconds);
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    alert("Kun boshidan boshlab o'tgan: " + minutes + " minut va " + remainingSeconds + " sekund");
  }

  // integer10
  
  function integer10() {
    let seconds = prompt("Kun boshidan boshlab o'tgan sekundlarni kiriting:");
    seconds = parseInt(seconds);
    let hours = Math.floor(seconds / 3600);
    let remainingSeconds = seconds % 3600;
    alert("Kun boshidan boshlab o'tgan: " + hours + " soat va " + remainingSeconds + " sekund");
  }  