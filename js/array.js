console.log("hello world");

let array = [76,56,89,74,23];

console.log(array);

for(let use of array){
    console.log(use);
    
}
array[1]= 23;
console.log(array);

let names = ["ali", "moiz","ayaz"];

for(let first of names){
    console.log(first.toLowerCase());
    
}

let empty =[];
empty.name="ali";
empty['age']=23;
empty['religion']="muslim";
console.log(empty.name);

let marks = [23,45,65,76,98];
let sum=0;
for(let val of marks){
    sum+=val;
    console.log(sum);
}

let avg = sum/marks.length;
console.log(`avg of this class =${avg}`);

  
    
    

