var fs=require('fs');
console.log(process.cwd());
console.log(__dirname);
fs.readFile('text.txt','utf-8',function(err,data){
    if(err) throw err;
    console.log(data);
});

var data = "\n hello node";
 
fs.appendFile('text.txt',data, 'utf8',
    function(err) {     
        if (err) throw err;
        console.log("Data is appended to file successfully.")
});

fs.readFile('text.txt','utf-8',function(err,data){
    if(err) throw err;
    console.log(data);
});