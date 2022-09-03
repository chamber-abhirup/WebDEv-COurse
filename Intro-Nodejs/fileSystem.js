//-----fielSystem
//files--create,read,update,delete
//create---  open -w
//read --  readFileSync
//update-- appendfileSync
//delete-- unlinkSync

//------------sync only-------------//
let fs = require("fs");

//-------read
//let buffer=fs.readFileSync("abc.js");
//buffer is in binary form

//console.log("bin data",buffer);
//output
//bin data <Buffer 63 6f 6e 73 74 20 61 3d 32 30 3b 0d 0a 63 6f 6e 73 6f 6c 65 2e 6c 6f 67 28 22 61 62 63 20 67 69 76 65 73 20 75 20 22 2c 61 29 3b>
//console.log("bin data "+buffer);//concatenate the strings
//output
//bin data const a=20;
//console.log("abc gives u ",a);

 //------create
// fs.openSync("abc.txt", "w");//creates and open file in writing mode

// fs.writeFileSync("abc.txt", "Hum aaj khush hai");
//if no file-->creates;if file exists->content replace
//create /write

// fs.appendFileSync("abc.txt", "Bhai khush nahi ha?");
 //update //if no file-->creates;

//fs.mkdirSync("meriDirectory");
//create directory(folder)

//create        read            delete
//mkdirSync    readdirSync    rmdirSync    

//fs.writeFileSync("meriDirectory/merifile.txt","Mera content"); 
// let content=fs.readdirSync("meriDirectory"); 
// console.log(content);
// for (let i = 0; i < content.length; i++) {
//     console.log("file ",content[i],"is removed.");
//     fs.unlinkSync("meriDirectory/"+content[i]);
//     removes file
// }
//output//
// [ 'abc.txt', 'abc2.txt', 'merifile.txt' ]
// file  abc.txt is removed.
// file  abc2.txt is removed.
// file  merifile.txt is removed.

//fs.rmdirSync("meriDirectory");//-->remove folder

//fs.exitSync-->if a file exists at a path ->returns true/false
// let doesPathExist= fs.existsSync("abc.txt");
// console.log(doesPathExist); //checks the file.
// doesPathExist = fs.existsSync("abcd.txt");
// console.log(doesPathExist);

//fs.lstatSync-->
// let detailObj= fs.lstatSync(__dirname+"\\fileSystem.js");
// let ans = detailObj.isFile();
// console.log(ans);
// ans=detailObj.isDirectory();
//console.log(ans);
///output///
//true
//false


// C:\Users\abhir\Documents\javascrpit

// for (let i = 1; i <= 10; i++) {
//     let dirPathToMake = `Lecture-${i}`;//anything under${}is treated as variable
//     fs.mkdirSync(dirPathToMake);
//     fs.writeFileSync(dirPathToMake + "\\"+"readme.md",` # readme for ${dirPathToMake}`);
// }
//----output
//creates 10 files each containing read.md file










