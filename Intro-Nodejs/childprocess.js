let cp =require("child_process");
console.log("trying to open");
//cp.execSync("code");
//cp.execSync("start firefox https:\\www.google.com");
let output =cp.execSync("node abc.js");
//console.log("output ",output);
//let output: Buffer this happens
//output
//trying to open
//output <Buffer 61 62 63 20 67 69 76 65 73 20 75 20 20 32 30 0a>
//output in form of buffer

//console.log("output"+output);
//trying to open
//outputabc gives u  20
//by adding the string with object we get this

//console.log(typeof ("output"+output));//string
//console.log(typeof ("output",output));//object