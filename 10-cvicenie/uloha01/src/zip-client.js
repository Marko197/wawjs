const http = require("http");
const fs = require("fs");
 
  let url = "http://localhost:9999";
  let output = fs.createWriteStream("subor.zip");
  let request = http.request(url,{
    method: "POST"
  })
  .on("response", (res) => {
    res.pipe(output);
  });
  let input = fs.createReadStream("test.txt");
  input.pipe(request);