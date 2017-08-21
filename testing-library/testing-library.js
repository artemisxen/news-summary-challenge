(function(exports) {

  var describe = function(description, testBlock) {
    console.log(description);
    document.getElementById("test").innerHTML += "<h3>" + description + "</h3>";
    testBlock();
    return description;
  };

  var it = function(description, test) {
    console.log(" " + description);
    document.getElementById("test").innerHTML += "<h4>" + description + "</h4>";
    test();
    return description;
  };

  var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        document.getElementById("test").innerHTML +=  "❗️ Test failed!</br>";
      } else {
        document.getElementById("test").innerHTML += "✅ Test passed!</br>";
      }
    }
  };

  exports.assert = assert;
  exports.it = it;
  exports.describe = describe;

})(this);
