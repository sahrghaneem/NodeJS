// const fs =require('fs')

// fs.writeFileSync('notes.txt','Game Over')
//const testFolder='./Ex2.js'
const fs = require('fs');

// File destination.txt will be created or overwritten by default.
//fs.copyFileSync('notes.txt', 'destination.txt')

//fs.renameSync('destination.txt', 'NewName.txt')
// fs.readdirSync(testFolder).forEach(file => {
//     console.log(file);
//   });

fs.appendFileSync('notes.txt',' Try Again' )