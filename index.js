let deeksha="love";
console.log(typeof(deeksha));
console.log(10>5);
//strict equality-->value and data type must be same
let x=10;
let b="deeksha";
console.log(x===b);
let age=50;
let status1=(age>30)?'I can vote':'I can not vote';
console.log(status1);
let work=100;
if(work>89)
{
    console.log("Your work has done");
}
else{
    console.log("Please do your work");
}
for(let i=1; i<=10; i++){
    console.log("I Love Deeksha")
}

let number=[1,2,3,7,8,-6,-4,];
let positiveNumber=number.filter(function(number){
    return number>0;
});
console.log(positiveNumber)

let product=[
    {
        id:1,
        name:"productA",
        price:50
    },
    {
        id:2,
        name:"productB",
        price:90
    },
    {
        id:3,
        name:"productC",
        price:100
    }
];
let priceCheck=product.filter((product)=>product.price>90);
console.log(priceCheck);

let name1=(names)=>{
    console.log(names);
    return `"Hello", name1`;
};
name1("Deeksha")
// let Age;
// let fun=function Age(){

// if(Age>40&&Age<60);
//     console.log("Adult")

// elseif(Age<40);
//     console.log("Below")

// elseif(Age>60 && Age<90);
//     console.log("Aged")

// else(){
//     console.log(Not verified)
// 
let age1=39;
if(age1>90){
    console.log("Aged");
}
else if(age1<40 && age1>30){
    console.log("Adult");
}
function name3(){
    console.log("I'm Deeksha")
}
name3();
function counting(){
    for(let i=1; i<=9; i++)
        console.log(i)
    
}
counting()
function number1(num){
    console.log("print:",num);
}
number1(12);
function sum(a,b,c){
    let getsum=a+b+c;
    return getsum;
}
let sum1=sum(1,6,8);
console.log(sum1);

function sub(a,b,c){
    return a+b-c;
}
let subt=(sub(1,10,6));
console.log(subt)

for(let i=1; i<=7; i++){
    console.log("Loop:",i)
}
let a=1;
while(a<=10){
    console.log("Number:",a)
    a++
}
// array=[1,4,5,3,6,7];
// array.forEach (function(num,index){
//     console.log(`Element at ${index}:${num}`)
// })
// array1=[1,4,5,3,6,7];
// let sum=0;
// array1.forEach(function(num){
    
//     sum+=num;
    
// }) 
// console.log(sum);

console.log(marks);
var marks=100;
class human{
    //properties
age=13;//public
height=80;//public
#weight=6;//private

    //behavior
    walking(){
        console.log("I'm walking")
    }
    runnning(){
        console.log("I'm running")
    }
}
let obj=new human();
console.log(obj.age);
console.log(obj.height);

obj.walking()

let fruit=['Banana','Apple','Mango','Grapes','Orange'];
fruit.forEach(function(index,fruits){
    console.log("I Love :", index,fruits)
})

let numbers0 = [1, 2, 3, 4, 5, 6, 7];
let sum_1 = 0;
for(let value of numbers0){
    sum_1 += value;
}
console.log(sum_1);
function name_3(yourname="Sajal"){
    console.log(yourname)
}
name_3();//name not define
name_3("deeksha");

function about(naam,last=naam.touppercase){
    console.log(naam,last)
}
about("deeksha");
console.log(Math.max(10,12,23,24,30));

let current=console.log(new Date);

let birth=new Date(2001,9,3,7);
console.log(birth);

console.log(birth.getDay());
let src={
    age_1:20,
    weight:30,
    height:4
};
console.log(src)
let dst={...src};
console.log(dst)
dst.len=2;
console.log(dst)
console.log(src)
//assign method
let src_1={
food:"Street",
hobby:"badminton",
reading:"novel"
};
let dst_1=Object.assign({},src_1);
console.log(dst_1)
console.log(src_1)


let key={
    food:"Street",
hobby:"badminton",
reading:"novel"
};
for(let key_1 in key){
    console.log(key_1)
}






