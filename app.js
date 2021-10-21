// console.log("This is file created using NPM")

const operatingSystem = require('os'); //inbuilt module
const fs = require('fs'); //inbuilt module
const path = require('path'); //inbuilt module
const http = require('http'); //inbuilt module
const url = require('url'); //inbuilt module
const util = require('util'); //inbuilt module
const sum = require('./sum'); //user defined module
const date = require('./date'); //user defined module
const express = require('express'); //npm module
const chalk = require('chalk');

//create OS
console.log("Architecture : " + operatingSystem.arch());
console.log("Realse : " + operatingSystem.release());
console.log("Platform : " + operatingSystem.platform());

//import fs file
fs.writeFileSync("test.txt", "This is test file");

//import path module
const location = 'C:\Users\anilm\Desktop\Nodejs project\Day 1 class \Node start guide.txt'
console.log("Directory: " + path.dirname(location));
console.log("Extension: " + path.extname(location));
console.log("Base: " + path.basename(location));


//import buffer modules
const buf1 = Buffer.from([1,2,3,4,5,6]);
const buf2 = Buffer.from(['a', 'b', 'c']);

console.log("To String: ", buf1.toString());
console.log("Compare: ", Buffer.compare(buf1, buf2));
console.log("Wether equal: ", buf1.equals(buf2));


//import http module

// http.createServer((req, res) => {
// 	res.writeHead(200);
// 	res.write("Hi from server");
// 	res.end();
// }).listen(3000);


//import http module with login

// http.createServer((request, response) => {
// 	const url = request.url;
// 	response.writeHead(200);
// 	if (url == '/login'){
// 		response.write("Welcome to the Nodejs")
// 	}
// 	if (url == '/products'){
// 		response.write("Here is the list of products : Apple, Samsung, Huawei")
// 	}
// 	if (url == '/logout'){
// 		response.write("You are logged out")
// 	}
// 	if (!url == '/'){
// 		response.write("Please send a valid request")
// 	}
// 	response.end();
// }).listen(3000);


//import URL module

const address = 'https://www.adobe.com/sg/creativecloud.html?sdid=Z2G1G1DN&mv=search&ef_id=CjwKCAjw2bmLBhBREiwAZ6ugo6fGqU9E4Qm7CLVNFATvaU-R0d_RJQ2L4B6I0qoU2jeNBGb9MMqbvRoC5eIQAvD_BwE:G:s&s_kwcid=AL!3085!3!425195016476!e!!g!!adobe!183927044!12769102124&gclid=CjwKCAjw2bmLBhBREiwAZ6ugo6fGqU9E4Qm7CLVNFATvaU-R0d_RJQ2L4B6I0qoU2jeNBGb9MMqbvRoC5eIQAvD_BwE'
const q = url.parse(address, true);
console.log("Host : " + q.host);
console.log("Path : " +q.pathname);
console.log("Query : " +q.search);
console.log("Protocol : " +q.protocol);

//import util module

const txt = 'Congratulate %s on his %dth birthday!';
const result = util.format(txt, 'John', 12)
console.log(result);

//import own modules
console.log("Sum of 10 and 20 is : " + sum(10, 20));

console.log("Today date and time is : " + date());

//install express server

const app = express();
app.listen(3400, () => {
	console.log("Express Server is up and running on port 3400");
} );


//install chalk module
console.log(chalk.green("I am green line"));