// তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো। 


function reverseOrder(name1,name2){

    let firstName=name1.length;
    let secondName=name2.length;

    if(firstName>secondName)
    {
        return name1.split("").reverse().join("");
    }
    else{
        return name2.split("").reverse().join("");;
    }
}

let nameConvention=reverseOrder("Nokia","Applewatch");
console.log(nameConvention);
