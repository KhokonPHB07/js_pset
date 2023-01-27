/*---------------------------------------------------1st module practice problem--------------------*/

// practice problem-01
var totalTaka=1000;
var orangeApplePrice=700;
var changeMoney=totalTaka-orangeApplePrice;
// console.log(changeMoney);


// practice problem-02  
var math=75.25;
var bio=65;
var chem=80;
var phy=35.45;
var bang=99.50;

var avg=(math+bio+chem+phy+bang)/5;
avg=avg.toFixed(2);
// console.log(avg);

// practice problem-03
var flline='I am going to be';
var sline='an awesome web developer';

var fulline=flline+' '+sline;
// console.log(fulline);

//practice problem-04

var input=119;
var rem=input%5;
// console.log(rem);

// ------------------module 2nd------------------------------------------------------------

// ----------pset-01>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
You are given an array:

var fruits = ['Apple', 'Banana', 'Orange'];

a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’.
*/


var fruits=['apple','banana','orange'];

// console.log(fruits.indexOf('banana'))
// fruits[1]='mango';
// console.log(fruits)

console.log(fruits.indexOf('orange'))
fruits[2]='watermelon';
console.log(fruits)


