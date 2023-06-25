console.log("#1");

let str = "Привет";
console.log('str: ' + str + ' -> ' + 'это тип: '+ typeof str);

let sum = 123;
console.log('sum: ' + sum + ' -> ' + 'это тип: '+ typeof sum);

let num = 15.8;
console.log('num: ' + num + ' -> ' + 'это тип: '+ typeof num);

let flag = true;
console.log('flag: ' + flag + ' -> ' + 'это тип: '+ typeof flag);

let txt = "true";
console.log('txt: ' + txt + ' -> ' + 'это тип: '+ typeof txt);


console.log("#2");

let a1 = 5 % 3;
console.log('a1 = '+ a1 +' тип переменной ' + typeof a1);

let a2 = 3 % 5;
console.log('a2 = '+ a2 +' тип переменной  ' + typeof a2);


let a3 = 5 + '3';
console.log('a3 = '+ a3 +' тип переменной ' + typeof a3);


let a4 = '5'- 3;
console.log('a4 = '+ a4 +' тип переменной ' + typeof a4);


let a5 = 75 + 'кг';
console.log('a5 = '+ a5 +' тип переменной  ' + typeof a5);

let a6 = 785 * 653;
console.log('a6 = '+ a6 +' тип переменной ' + typeof a6);
// 
let a7 = 100 / 25;
console.log('a7 = '+ a7 +' тип переменной ' + typeof a7);

let a8 = 0 * 0;
console.log('a8 = '+ a8 +' тип переменной ' + typeof a8);

let a9 = 0 / 2;
console.log('a9 = '+ a9 +' тип переменной ' + typeof a9);

let a10 = 89 / 0;
console.log('a10 = '+ a10 +' тип переменной ' + typeof a10);

let a11 = 98 + 2;
console.log('a11 = '+ a11 +' тип переменной ' + typeof a11);

let a12 = 5- 98;
console.log('a12 = '+ a12 +' тип переменной ' + typeof a12);

let a13 = (8 + 56 * 4) / 5;
console.log('a13 = '+ a13 +' тип переменной ' + typeof a13);

let a14 = (9 - 12) * 7 / (5 + 2);
console.log('a14 = '+ a14 +' тип переменной ' + typeof a14);

let a15 = +"123";
console.log('a15 = '+ a15 +' тип переменной ' + typeof a15);

let a16 = 1 || 0;
console.log('a16 = '+ a16 +' тип переменной ' + typeof a16);

let a17 = false || true;
console.log('a17 = '+ a17 +' тип переменной ' + typeof a17);

let a18 = true > 0;
console.log('a18 = '+ a18 +' тип переменной ' + typeof a18);


console.log("#3");

let width = 10 ;
let height = 23;
let SPryam = width * height;
console.log("S прямоугольника = 23см*10см = " + SPryam+ 'см.')


console.log("№4");

// π·r²·h
let h= 10;
let VCilindra= Math.PI * (a7 / 2)^2 * h; 
console.log("S цилиндра= "+ VCilindra + "м^2");


console.log("№5");

let r= 5;
let SKruga= r^2;
console.log("S круга = "+ SKruga+ "см^2 ") 


console.log("№6");

let a06= 5;
let b06 = 7;
let ah= 10;
let STrap = ((a06 + b06) / 2) * ah
console.log("S трапеции= "+ STrap + "см^2")


console.log("№7");

let S= 2000000;
let p= 10;
let years= 5;
let procmounth = years/12;
let kolvoplateg = 12*years;
let first= procmounth*((1+procmounth)^kolvoplateg)/(((1+procmounth)^kolvoplateg)-1);
let Pereplata= S*first;

console.log(Pereplata);


console.log("№8");

let a08 =8;
let b08 =3;
let x1=((61 - a08)/2) + b08;
let x2= (a08 - (b08 * 15))/(b08 - 6);
let x3= 23780 / (1+2+a08+b08);




console.log("№9");

console.log("Бывало, спит у ног собака,\n костер занявшийся гудит,\n и женщина из полумрака\n глазами зыбкими глядит.\n \n Потом под пихтою приляжет\n на куртку рыжую мою\n и мне, задумчивая, скажет:\n \n 'А ну-ка, спой!..'- и я пою.");


console.log("№10");

let q= 'индо земля зашаталась под ногами-и вырос,';
let w= 'и заревел он голосом диким...';
let e= 'блеснула молния и ударил гром,';
let g= 'а так какое-то чудище, страшное и мохнатое,';
let t= 'как будто из-под земли, перед купцом:';
let y= 'Он подошёл и сорвал аленький цветочек.';
let u='зверь не зверь, человек не человек,';
let i= 'В ту же минуту, безо всяких туч,';

console.log(y+' '+i+' '+e+' '+q+' '+t+' '+u+' '+g+' '+w);