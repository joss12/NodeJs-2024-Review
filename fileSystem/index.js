const fs = require('fs');



fs.rmdir('./filledDir',{recursive:true},(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Removed");
    }
});

// fs.rmdir('./newFolder', (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Removed");
//     }
// });


// fs.mkdir('./newFolder', (err)=>{
//     if(err){
//         if(err.errno === -17){
//             console.log("Folder already exists");
//         }else{
//             console.log(err);
//         }
//         console.log(err);
//     }else{
//         console.log('Successfully created');
//     }
// });



// const path = process.argv[2];
// let content = fs.readdirSync(path);
// fs.readdir(path, (err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         content = data;
//     }
// });
// console.log(content);


// const dirPath = process.argv[2];
// console.log(dirPath);

// fs.readdir(dirPath, (err, data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File/Folder Count : " + data.length);
//     }
// })



// const source = process.argv[2];
// const destination = process.argv[3];

// fs.copyFile(source, destination, (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('file Copied');
//     }
// });



// fs.stat('../node_modules', (err, data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });

