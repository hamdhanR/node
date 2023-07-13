const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-Type","text/html");
    console.log(req);
    res.end("<h1>Learning Node Js</h1>");
})
server.listen(3000,()=>{
    console.log("server running on http://localhost:3000");
})