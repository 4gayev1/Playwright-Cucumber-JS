const { addElements } = require("./elementController");

const fs =require("fs");

function pomCollector() {

  fs.readdir("src/tests/POMs", (err, files) => {
    files.forEach((file) => {
        fs.readFile(`src/tests/POMs/${file}`, "utf-8", (err, content) => {
          addElements(JSON.parse(content));
        });
    });
  });
}


module.exports={pomCollector}


