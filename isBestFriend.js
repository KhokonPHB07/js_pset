/****
 * 
তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি  প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি  বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।

Sample Data:
Input
Output
{ name: "abul", friend: "babul" },
{ name: "babul", friend: "abul" }

{ name: "abul", friend: "kabul" },
{ name: "kabul", friend: "sabul" }

{ name: "doe", friend: "alex" },
{ name: "john", friend: "doe" }


true



false


false


 */

let friend=[
{ name: "abul", friend: "babul" },
{ name: "babul", friend: "abul" }];

function findOutBest(object1,object2){
    if(object1.name==object2.friend && object2.friend==object1.name){
        return true;
    }
    else{
        return false;
    }
}