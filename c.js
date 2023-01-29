// var number=93;
// if(number%2==0){
//     console.log('the number is ever');
// }
// else{
//     console.log('the number is odd');
// }

// write a programme where all disorder number must become orderly like 1,2,3,4,5,6,7,8,9

var numberOrder=[1,3,2,4,6,5,7,9,8];


// find leap year

// var year=1993;
// if(year%4==0){
//     console.log(year+' is a leap year');
// }
// else{
//     console.log('this is not a leap year');
// }

// find all divisible number between 1-50 by 3 and 5

var divisible=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var divisibleBy3=[];
var divisibleBy5=[];
for(var i=0;i<divisible.length;i++)
    {
        if(divisible[i]%3==0)
            {
                divisibleBy3.push(divisible[i]);
            }
        else if(divisible[i]%5==0)
            {
                divisibleBy5.push(divisible[i]);
            }    

        }
console.log(divisibleBy3,divisibleBy5);        