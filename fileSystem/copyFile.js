const fs = require('fs');

fs.copyFile('./text.txt', '../fileSystem/index.txt', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Success!');
    }
});