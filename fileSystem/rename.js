const fs = require('fs');


fs.rename('rename.txt', '../rename.txt', (err, data)=>{
    if(err){
        console.log('Failed to rename the file', err);
    }else{
        console.log('File renamed successfully');
    }
})
