///array declare
//let arr=[]'
//let array=[1,2,3,4,5];
//console.log(array);
// console.log(array.length);
// let i=0;
// while (i<array.length){
//     console.log("element at index",i,"is",array[i]);
//     i++;
// }

//push,unshift
//pop
//shift

//slice function
//starting index .ending indx
//let partofarray=array.slice(1,3);
//copy elemnts from star to end-1 indx
//console.log(partofarray);
//console.log(array);

//slice
// array.splice(2,3);
// console.log(array);

//strings
let singleQuotes = '      single quotes ka string    ' ;
let doubleQuotes = "double quotes ka string";
let char = singleQuotes.charAt(3);
//charAt shows the the char at the index value of the string 
let ascii=singleQuotes.charCodeAt(4);
//charCodeAt shows the ascii code of the character
let subStr = singleQuotes.substring(2,8);
//substring copy a part of the string on start and end indx value without changing the string



// console.log(singleQuotes);
// console.log(char);
// console.log(ascii);
// console.log(subStr);

singleQuotes=singleQuotes.trim();
//trims the white space in the string.
let arrStr = singleQuotes.split("");
//splits the string based on the  qoutes
console.log(arrStr);
let str= arrStr.join("+");
//joins the string based on the  qoutes
console.log(str);


