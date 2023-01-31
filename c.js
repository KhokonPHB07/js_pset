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

// var divisible=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
// var divisibleBy3=[];
// var divisibleBy5=[];
// for(var i=0;i<divisible.length;i++)
//     {
//         if(divisible[i]%3==0)
//             {
//                 divisibleBy3.push(divisible[i]);
//             }
//         if(divisible[i]%5==0)
//             {
//                 divisibleBy5.push(divisible[i]);
//             }    

//         }
// console.log(divisibleBy3,divisibleBy5);  
// console.log(divisible.length, divisibleBy3.length, divisibleBy5.length); 

// find out largest name 

// var largestName=["MRKhan", "BILLclinton","Aishayriyarai","nohanimul"]
//     var elementSize=[];
    
//    for(var i=0;i<largestName.length;i++)
//         {
//             elementSize.push(largestName[i].length);
            
//         }
    
   
//     if(elementSize[0]>elementSize[1] && elementSize[0]>elementSize[2] && elementSize[0]>elementSize[3])
//         {
//             console.log('larger name of friends is ' + largestName[0]);
//         }   
    
    
//     else if(elementSize[1]>elementSize[0] && elementSize[1]>elementSize[2] && elementSize[1]>elementSize[3])
//         {
//             console.log('larger name of friends is ' + largestName[1]);
//         }   
    
    
        
//     else if(elementSize[2]>elementSize[0] && elementSize[2]>elementSize[1] && elementSize[2]>elementSize[3])
//         {
//             console.log('larger name of friends is ' + largestName[2]);
//         }   
       
        
//     else if(elementSize[3]>elementSize[0] && elementSize[3]>elementSize[1] && elementSize[3]>elementSize[2])
//         {
//             console.log('larger name of friends is ' + largestName[3]);
//         }   
       

/****
 * var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

৭. উবের  পরের  এরে  থেকে  ডুপ্লিকেট  নম্বর  গুলা  বাদ  দিয়ে  উনিক  নম্বর  গুলা বের  করতে    হবে 

8. উপরের  আরে  থেকে  সব  থেকে  বড়ো  নম্বর  কোনটা  বের  করো 

 */


var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9,9,10];


for(var i=0;i<numbers.length;i++)
    {
      
        if (numbers[i]==numbers[i+1])
        {
            numbers.splice(i+1)
        }
    }
    console.log(numbers);