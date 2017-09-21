(function(exports) {
  function Article(id, webTitle, webUrl) {
    this.webTitle = webTitle;
    this.webUrl = webUrl;
    this.id = id;
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
    },
    setSummary: function(text) {
      this.summary = text;
    },
    getSummary: function() {
      return this.summary;
    }
};
  exports.Article = Article;
})(this);
