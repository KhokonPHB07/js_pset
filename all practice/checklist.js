// checklist 01--Ans>YES

// var str="bangladesh";
// var number=785;
// var bool=true;
// console.log(typeof bool);

// checklist 02 .......Ans>YES

// let age=52;
// age=65;

// console.log(age);

// const name=89;
// name=79;
// console.log(name);

// checklist 03 .......Ans>yes

// let numberOne=136;
// let numberTwo=3369;

// let sum=numberOne+numberTwo;
// console.log(sum);

// let numberOne=136;
// let numberTwo=3369;

// let multiplication=numberOne*numberTwo;
// console.log(multiplication);

// let numberOne=136;
// let numberTwo=3369;

// let divided=numberOne/numberTwo;
// console.log(divided);

// let numberOne=136;
// let numberTwo=33;

// let modulus=numberOne%numberTwo;
// console.log(modulus);

// <, >, ==, !=, <=, >=.....comparison in two variable........ans>Yes

// let numberOne=456;
// let numberTwo=365;

// if(numberOne>numberTwo){
//     console.log('Number one is all time big');
// }
// else{
//     console.log('i said number two is big!!!!!!!!!!');
// }

// if(numberOne<numberTwo){
//     console.log('Number one is all time big');
// }
// else{
//     console.log('i said number two is big!!!!!!!!!!');
// }

// let numberOne=456;
// let numberTwo=365;
// if(numberOne==numberTwo){
//     console.log('both number are friends');
// }
// else{
//     console.log('i said number two is enemy!!!!!!!!!!');
// }

// let numberOne=456;
// let numberTwo=365;
// if(numberOne!=numberTwo){
//     console.log('So you owe me');
// }
// else{
//     console.log("sorry! i can't lend you any money");
// }

// let numberOne=456;
// let numberTwo=365;
// if(numberOne<=numberTwo){
//     console.log('becareful from number..otherwise it will destroy you');
// }
// else{
//     console.log("sorry! i can't lend you any money");
// }

// let numberOne=456;
// let numberTwo=365;
// if(numberOne>=numberTwo){
//     console.log('Do you know what is integer?');
// }
// else{
//     console.log("sorry! i can't lend you any money");
// }


// && and || usages ..ans >Yes

// let str1=25;
// let str2=39;

// let str3=15;
// let str4=45;

// if(str1>=str2 && str3<=str4){
//     console.log("dhaka is the capital of Bangladesh");
// }

// else{
//     console.log("New York was previous capital of USA");
// }

// if(str1>=str2 || str3<=str4){
//     console.log("dhaka is the capital of Bangladesh");
// }

// else{
//     console.log("New York was previous capital of USA");
// }


//  if-else usages..............Ans>Yes

// let a=99;
// let b=136

// if(a<=b)
// {
//     console.log("i will do my all homework today anyhow")
// }

// else if(a>=b)
// {
//     console.log("one day i will go Nederlands");
// }
// else
// {
//     console.log("i must go Nepal");
// }



// write down a code all odd number from 7-19.........Ans>Yes

// let a=7;
// while(a<=19)
// {
//     let b=a%2;
//     if(b!=0)
//     {
//         console.log(a," is an odd number");
//     }
//     else{
//         console.log(a,"this number is even!!");
//     }
//     a++;
// }


// ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। ...........ans>Yes


// let jamal=[3,6,9,8,7,9,65]
// jamal.unshift(1,2);
// console.log(jamal);

// // jamal[3]=999;
// // let sum=jamal[0]+jamal[1];
// // console.log(sum);

// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। .......ans>yes


// let x=["bangladesh","dhaka","chottogram","cumilla","bagura"];

// for(let i=0;i<x.length;i++)
// {
//     console.log(i,"=", x[i]);
// }


// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো --------Ans>YES


// let x=[36,45,25,36,45,26,89,36,24];

// let y=80;
// let z=[];
// let a=[];
// for(let i=0;i<=x.length;i++)
// {
//     let bigNumbers=x[i];
//     if(bigNumbers>y)
//     {
//         // console.log(bigNumbers,"this number is larger then 80");
//         z.push(bigNumbers);
//     }
//     else
//     {
//         // console.log(bigNumbers,"this number is smaller then 80");
//         a.push(bigNumbers);
//     }
// }

// console.log("this is list of all larger then 80",z);
// console.log("this is list of all smaller then 80",a);


// ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। -----Ans>Yes


// function multiplication(numberOne,numberTwo,numberThree)
// {
//     let multiplicationResult= numberOne*numberTwo*numberThree;
//     return multiplicationResult;
// }



// let result=multiplication(1,2,3);
// console.log(result);



// ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। --Ans>Yes






// let mobilePhone={
//     brandName:"nokia",
//     price:25000,
//     camera:25,

// }

// console.log(mobilePhone);

// mobilePhone.brandName="apple";
// mobilePhone.price=180000;
// mobilePhone.camera=36;

// console.log(mobilePhone);




