const bom = require("../../src/bom");

const assert = require("assert");
const fs = require("fs");

describe("Remove BOM", function() {


  const bomBuffer = Buffer.from([0xEF, 0xBB, 0xBF])

  it("Remove BOM - it should remove BOM from empty file with BOM", function(done) {

    let chunks = [];
    let file = `${__dirname}/data/with-bom-empty.txt`;
    fs.createReadStream(file, {highWaterMark: 2})
      .pipe(bom.remove())
      .on("error", done)
      .on("data", (chunk) => chunks.push(chunk))
      .on("finish", () => {
        let chunk = Buffer.concat(chunks);
        assert.equal(chunk.indexOf(bomBuffer),-1);
        assert.equal(chunk.length,0);
        done();
      });
  });
});