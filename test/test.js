var should = require("should");
var index = require("../index");
var stream = require('stream');

describe.skip("image callback", function() {
  it("should log the data", function(done) {
    index.imageCallback.should.be.a.Function();
    index.imageCallback(function(data) {
      console.log("callback says", data);
      done();
    });
  });
});

describe("image stream", function() {
  it("should stream the response", function(done) {
    index.imageStream.should.be.a.Function();

    var writeable = new stream.Writable();

    writeable._write = function (chunk, enc, next) {
      console.log(chunk);
      next();
    };

    writeable.on("finish", function() {
      done();
    });

    index.imageStream(writeable);

  });
});
