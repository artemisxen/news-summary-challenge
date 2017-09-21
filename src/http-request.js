(function() {
  makeRequestToGuardianApi();
  var httpRequest;

  function makeRequestToGuardianApi() //api controller
  {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = handleResponseFromGuardianApi;
    httpRequest.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?', true);
    httpRequest.send();
  }

  function handleResponseFromGuardianApi()
  {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        console.log(httpRequest.responseText);
        controller.displayHeadlines(httpRequest.responseText);
      } else {
        console.log('There was a problem with the request.');
      }
    }
  }

function makeRequestToAylienApi(webUrl) // controller
{
  httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = handleResponseFromAylienApi;
  httpRequest.open('GET', 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + webUrl, true);
  httpRequest.send();
}

function handleResponseFromAylienApi()
{
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
      displaySummaryForId(httpRequest.responseText);
    } else {
      console.log('There was a problem with the request.');
    }
  }
}

(function makeUrlChangeDisplaySummary() {
  window.addEventListener("hashchange", getWebUrlFromId);
})();

function getArticleIdFromUrl (location) {
  id = this.location.hash.split("/")[1];
  console.log(id);
  return Number(id);
}

function getWebUrlFromId() {
  article = controller.headlinesView.list.getArticleFromId(getArticleIdFromUrl());
  console.log(article);
  makeRequestToAylienApi(article.webUrl);
}

function displaySummaryForId(data) {
  var jsonObject = JSON.parse(data);
  text = jsonObject.sentences;
  summary = controller.headlinesView.displaySummaryForId(getArticleIdFromUrl(), text);
  controller.displaySummary(summary);
}
})();
