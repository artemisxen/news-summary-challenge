(function(exports) {
  function NewsModel(text) {
    this.text = text;
  }

  NewsModel.prototype.getText = function () {
    return this.text;
  };

  exports.NewsModel = NewsModel;
})(this);
