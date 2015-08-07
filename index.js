var request = require("superagent");

var IMAGE_ADDRESS = "https://upload.wikimedia.org/wikipedia/commons/e/e9/Felis_silvestris_silvestris_small_gradual_decrease_of_quality.png";

exports.imageCallback = function(callback) {
  request.get(IMAGE_ADDRESS).end(function (err, res) {
    if (err) {
      console.log("err", err);
      return err;
    }

    console.log("about to call callback with res", res);
    callback(res);
  });
};

exports.imageStream = function(writeable) {
  request.get(IMAGE_ADDRESS).pipe(writeable);
};
