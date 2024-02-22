const fs = require("fs");

fs.writeFile('text.txt', 'This is a new content', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('File Written successfully');
    }
});