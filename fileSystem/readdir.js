const fs = require('fs');


fs.readdir('../node_modules', (err, data)=>{
    if(err){
        console.log(err);
    }else{
        console.log('File readdir: ' + data);
    }
})