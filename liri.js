require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

// What is data structure of process.argv? array
// What is the element as index 0? node
// What is the element at index 1? file

let command = process.argv[2];
console.log(command); // concert-this


console.log(process.argv.slice(3));

/*
// loop through process.argv array
// starting at index 3 b/c ... index 3 is where the values of interest start
// First time through the loop...
// Create variable to store values
// process.argv[i]

process.argv = [ 
    'C:\\Program Files\\nodejs\\node.exe',
    'c:\\Users\\basem\\desktop\\liri-node-app\\app.js',
    'concert-this',
    'billie',
    'eilish; 
];


command = "concert-this"
artist = "billie eilish"

*/