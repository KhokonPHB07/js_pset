/****Problem:2   isJavaScriptFile 
ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে । 

Sample Data
Input
Output
'app.js'
'js.png'
'image.js.png'
'image.jpg.js'


true
false
false
true

 */

function isJavaScriptFile(ostir) {
    return ostir.endsWith(".js");
    
}
let fileoho="khokon.js"
let result = isJavaScriptFile(fileoho);
console.log(result);


// function isJavaScriptFile(fileName) {
//     return fileName.endsWith('.js');
//   }
  
//   let str = 'image.jpg.js.pdf';
//   let result = isJavaScriptFile(str);
//   console.log(result); 
  
  /**
   * 'app.js'
'js.png'
'image.js.png'
'image.jpg.js'

   */