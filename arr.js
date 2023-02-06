//miles to kilometer

// function milesTokilometer(number){
//     let oneMile=1.60934;
//     const mileconvert=number*oneMile;
//     return  mileconvert.toFixed(2);

// }

// let kilo=milesTokilometer(25);
// console.log(kilo);


// let oddNumber=[3,6,9,8,7,9,65,98,45,36];
// let sum=0,count=0;
// for(let i=0;i<oddNumber.length;i++){
//     if(oddNumber[i]%2==0){
//         sum=sum+oddNumber[i];
//         count++;
//     }
// }
// console.log(count,sum);


//summation of factorial number

// function factorial(inputNumber){
//     let sum=1;
//     for(let i=inputNumber;i>=1;i--){
//         sum=sum*i;
//     }
//     return sum;
// }

// let add=factorial(5);
// console.log(add);

// function foo(){
//     console.log('foo');
// }

// function bar(){
//     console.log('bar');
//     foo();
// }

// bar();

// case conversion

// let user="blackPinK";
// console.log(user.toUpperCase());
// let input="blackPINK";

// if(user===input){
//     console.log("valid user");
// }
// else {
//     console.log("invlid user");
// }

// let fileName=["khok.pdf","abc.jpg","tumi.png","sagor.js","index.html","tomuk.pdf","jani.psd","sob.xls","omu.pdf"];
//     count=0;
// for(let i=0;i<fileName.length;i++){
//     let file=fileName[i].endsWith('.pdf');
//     if(file===true){
//         count=count+1;
//     }
// }
// console.log(count);

// let amar="apple banana orange mango grape watermelon jackfruit gree";
// console.log(amar.split(""));
// let count=0;
// for(let i=0;i<amar.length;i++){
//     if (amar[i]==' '){
//         count++;
//     }
// }
// console.log(count)



// let lombu=amar.length;
// console.log(lombu);

// let tomar=amar.split(" ");
// let letSum=0;
// for(let i=0;i<tomar.length;i++){
//     letSum=letSum+tomar[i].length;

// }
// console.log(letSum);



// console.log(Math.pow(10,3));
// console.log(Math.round(10,3));
// console.log(Math.abs(10,3));
// console.log(Math.ceil(10,3));
// console.log(Math.floor(10,3));

// function maxNumber(num1, num2, num3) {
//     let boroNumber = Math.max(num1, num2, num3);
//     let chotoNumber = Math.min(num1, num2, num3);
//     return (boroNumber,chotoNumber);
// }
// let findMax = maxNumber(96, 93, 0);
// console.log(findMax);

// let string="My name is khokon";
// let wordDivide=string.split(" ");


// function reverse(inputext){

//     let textCon="";
//     for(let i=inputext.length-1;i>=0;i--){
//         textCon=textCon+inputext[i];
//         console.log(textCon);

//     }

// }

// let rev=reverse(wordDivide)

// let text=["My","name","is","khokon"];

// let joralaglo=text.join(" ");

// console.log(joralaglo);

// let fibo=[0,1,1,2,3,5,8,13,21,43,64,107]

// let fibo=[0,1]
// for(let i=2;i<10;i++){
//     fibo[i]=fibo[i-1]+fibo[i-2];
// }
// console.log(fibo);

// let obj=[ {brand:'xiomi',camera:12,color:'purple',storage:36,price:35000},
//     {brand:'samsung', camera:12, color:'white', storage:36,price:25000},
//     {brand:'walton', camera:15, color:'silver', storage:25,price:15000},
//     {brand:'apple', camera:25, color:'spacegrey', storage:72,price:125000},
//     {brand:'nokia', camera:15, color:'orange', storage:36,price:2000},
//     {brand:'oppo', camera:12, color:'navyblue', storage:36,price:5000},
// ]

// let cheapesstPhone=obj[0];
// for(let i=0;i<obj.length;i++){
//     let element=obj[i];
//     if(element.price<cheapesstPhone.price){
//         cheapesstPhone=element;
//     }

// }
// console.log(cheapesstPhone);



// Complete the function called count_zero() which will take a binary string (Binary string is a string which consists of only 0 and 1) as a parameter and count how many 0’s are there in that string.

// Sample Input:10101
// Sample output:2

// let a="10101";
// let b=a.split("");
// console.log(b[0]);


// function countZeros(binary_num) {
//     let binary = binary_num.split("");
//     let count = 0;
//     for (let i = 0; i < binary.length; i++) {
//         let element = binary[i];
//         if (element === '0') {
//             count++;
//         }
//     }

//     return count;
// }

// let binary_num = countZeros('101010101010101010101010101010101000010001110001101010101');
// console.log(binary_num);

/***
 * You will be given an array as input containing 5 integer numbers. Your task is very simple. You have to find out the second largest element from the numbers.
Sample Input:[10,33,5,99,6]
Sample output:33
 */

// let serial=[10,33,5,99,6];
// let big=serial.sort();
// console.log(big);

// function biratNumber(number){
//     let biggest=Math.max();
// }   return biggest;


// let khuja=biratNumber(serial);
// console.log(khuja);



// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//           [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         }
//       }
//     }
//     return arr;
//   }

    // let a=[9,6,3,6,8,7];
    // let b=[0];
    // let c=[];
    // for(let i=0;i<a.length;i++){
    //     let element=a[i];
    //     if(element>b){
    //       c.push([a[i],a[i+1]]=[a[i+1],a[i]]); 
    //     }
    // }
    
    // console.log(c);
  

    function findSecondLargestElem(arr){
        let first = -1;
        let second = -1;
    
        for(let i = 0; i <arr.length; i++){
            if(arr[i] > first){
                second = first;
                first = arr[i];
            }
            else if( arr[i] > second && arr[i] != first){
                second = arr[i];
            }
        }
        console.log(second);
    }
    let arr = [10,33,5,99,6,36]
    findSecondLargestElem(arr);

 
