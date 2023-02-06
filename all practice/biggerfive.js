/***
 * এমন একটা ফাংশন বানাও যেটা একটি অ্যারে নিবে ইনপুট হিসেবে। তারপর সেই অ্যারের সকল উপাদান এর মধ্যে ৫ এর চেয়ে বড় যে সকল সংখ্যা আছে তাদের কাউন্ট নির্ণয় করবে। ইনপুটঃ [-1,2,-3,4,5,6,-7,8,-9,10]

 */

let n = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10];
function biggerFive(numbers) {
    let counter = 0;
    for (let i = 0; i <= numbers.length; i++) {
        if(numbers[i]<5) 
        {
            counter++;
        }
        
    }
    return counter;
}

let a=biggerFive(n);
console.log(a);