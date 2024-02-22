const fs = require('fs');
const content = '\nNew Data';

fs.appendFile('new.txt',  content, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Appended successfully");
    }
})