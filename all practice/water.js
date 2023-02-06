// এমন একটা ফাংশন বানাবে যেটিতে তুমি ইনপুট হিসেবে পানির volume ইন্সারট করবে মিলিলিটারে। এই মিলিলিটারকে লিটারে কনভার্ট করে  ফাংশন তোমাকে রিটার্ন করবে। 


function waterConverter(jol){
    const literBottle=jol/10000;
    return literBottle;

}

let pani=waterConverter(55310);
console.log(pani);