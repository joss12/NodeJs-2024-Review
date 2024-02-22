const fs = require('fs');

let content = fs.readFileSync('../package.json');


fs.writeFile('text.txt', content, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Written successfully')
    }
})