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

// console.log(fruits.indexOf('orange'))
// fruits[2]='watermelon';
// console.log(fruits)


/***
 * You and your friends Tom, Jane, Peter and John got their final exam results. Your total
score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
and John’s total score is 40. The grading chart is
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade

Write a program to find your and your friends’ grades using if-else.
 * 
 * 
 * 
 */

// var score=[41];

// if((score[0]>=80 && score[0]<=100)||(score[0]>=80 && score[0]<=100)||(score[0]>=80 && score[0]<=100)||(score[0]>=80 && score[0]<=100)||(score[0]>=80 && score[0]<=100)){
//     console.log('Wow, congrats and grade is A')
// }

// else{
//     console.log('Oops sorry you failed, try hard and good luck next time')
// }




/*****
 * 1. You are given three numbers 13, 79, and 45. Write a program that will print the
largest number using if-else.
2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
triangle is Isosceles or not using if-else.

Isosceles => two sides are equal
 * 
 * 
 * 
 */

var a=13;
var b=79;
var c=45;

if(a>b && a>c){
    console.log(a)
}
else if(c>b && c>a){
    console.log(c)
}
else if(b>a && b>c){
    console.log(b)
}


var a=9;
var b=9;
var c=8;

if(a==b && a!=c){
    console.log(a+'triangle is Isosceles')
}
else if(c==b && c!=a){
    console.log(c+'This triangle is Isosceles')
}

var a=[1,2,3,4,5,6,7,8,9];
var b=['apple','mango','banana','jackfruit'];
var merged=a.concat(b);
console.log(merged.length)


var c=['a','b','c','d','e','e']

