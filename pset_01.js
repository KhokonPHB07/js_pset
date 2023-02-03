/****
 * pp-01
 * Write a function that will take hour as the input parameter and will
convert it into minutes and will return the result in minutes.
 */

// function hour2Minutes(numbers) {

//     return numbers * 60 * 60;
// }

// let hourCount = 1200;
// let minutes = hour2Minutes(hourCount);
// // console.log(minutes);

/****
 * pp-02
 * Write a function findLeapYear() that will take the array
[2023,2024,2025,2028,2030] as the input parameter and will check if
each year is a leap year. If a year is a leap year insert that year in a
new array, return the new array and print the result.
 */

// function findLeapYear(year) {
    
//     for (let i = 0; i < year.length; i++) {
//         let lYear=[];
//         if (year[i] % 4 === 0) {
//             console.log(year[i], 'this is leap year');
//             lYear.push(year[i]);
//         }
//         else {
//             console.log(year[i], 'this is not leap year')
//         }
//     }
//     return lYear;
// }



// let leapYear = [2023, 2024, 2025, 2028, 2030];
// let knowLeapYear = findLeapYear(leapYear);
// console.log(knowLeapYear);
// console.log(lYear)

// for(let i=13;i<=13;i++){
//     for(let j=1;j<=10;j++){
//         console.log(i,'X',j,'=',i*j);
//     }
// }
// pp-01>>>order the number from lower to higher
// let x=[1,2,5,4,3,9,8,7,6];
//pp-02>>>>delete all duplicate number
// let y=[1,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
//pp-03>>>>> find out the largest name
// let z=["rahim","karim","bangladesh","india","china","indonesia","Australia"];

//find the biggest number

function bigNumber(numbers){
    let big=numbers[0];
    for(let i=0;i<numbers.length;i++){
        let index=i;
        let element=numbers[index];
        if(element>big){
          big=element;
        }
    }
    return big;
}

let numbers=[999,965,265];
let findBiggest=bigNumber(numbers);
console.log(findBiggest);


//H.W>find the lowest number

