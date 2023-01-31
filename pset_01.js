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

function findLeapYear(year) {
    
    for (let i = 0; i < year.length; i++) {
        
        if (year[i] % 4 === 0) {
            console.log(year[i], 'this is leap year')
        }
        else {
            console.log(year[i], 'this is not leap year')
        }
    }
}
let leapYear = [2023, 2024, 2025, 2028, 2030];
let knowLeapYear = findLeapYear(leapYear);
console.log(knowLeapYear);

