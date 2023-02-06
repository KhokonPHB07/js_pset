/***
 *  
একটা ফাংশন বানাবে যেটি একটি অ্যারে অফ অবজেক্ট রিসিভ করে প্যারামিটার হিসেবে।প্রতিটি অবজেক্টে একটি মানুষের নাম  এবং বয়স থাকবে। এখন তোমার কাজ হচ্ছে এই অ্যারে থেকে সবচেয়ে ছোট যে person কে খুঁজে বের করা। 
      অব্জজেক্টটি/Input দেখতে এমনঃ
[
    {name:'sakib', age:30},
    {name:'samiul', age:20},
    {name:'sahid', age:50},
    {name:'samin', age:10}
] 

 */



function smallGuy(number){
    let smallest=small[0];
    for(let i=0;i<number.length;i++){
        let great=number[i];
        if(great.age>smallest.age){
            smallest=great;
            
        }

    }
    return smallest;
}

let small = 
[{ name: 'sakib', age: 30 },
{ name: 'samiul', age: 20 },
{ name: 'sahid', age: 50 },
{ name: 'samin', age: 10 }];

let saimu=smallGuy(small);
console.log(saimu);

