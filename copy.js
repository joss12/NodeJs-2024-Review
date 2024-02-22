const fs = require('fs');

const source = process.argv[2];
const destination = process.argv[3];

fs.copyFile(source, destination, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('file Copied');
    }
});



// fs.stat('../node_modules', (err, data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });

