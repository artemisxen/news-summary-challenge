(function(exports) {
  var id = 0;
  function Article(webTitle, webUrl) {
    this.webTitle = webTitle;
    this.webUrl = webUrl;
    this.id = id++;
  }

  Article.prototype = {
    getId: function(){
      return this.id;
    },
    getWebTitle: function(){
      return this.webTitle;
    },
    getWebUrl: function(){
      return this.webUrl;
    }
};
  exports.Article = Article;
})(this);
