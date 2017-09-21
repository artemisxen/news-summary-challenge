(function(exports) {
  function HeadlinesList() {
    this.headlines = [];
  }

  HeadlinesList.prototype = {

    addArticle: function(article) {
      this.headlines.push(article);
    },

    returnHeadlines: function() {
      return this.headlines;
    },

    getArticleFromId: function(id) {
      headlines = this.returnHeadlines();
      var articleToReturn;
      headlines.forEach(function(article){
        if(article.getId() === id) {
          articleToReturn = article;
        }
      });
      return articleToReturn;
    }
  };

  exports.HeadlinesList = HeadlinesList;
})(this);
