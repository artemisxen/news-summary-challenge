(function() {
  makeRequestToGuardianApi();
  var httpRequest;

  function makeRequestToGuardianApi()
  {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = handleResponse;
    httpRequest.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/news', true);
    httpRequest.send();
  }

  function handleResponse()
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
})();

// 
//
//
// function makeRequestToAylienApi()
// {
//   var link = results[this.id].webUrl;
//   httpRequest = new XMLHttpRequest();
//   httpRequest.onreadystatechange = handleResponse2;
//   httpRequest.open('GET', 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + link, true);
//   httpRequest.send();
// }
//
// function handleResponseToAylienApi()
// {
//   if (httpRequest.readyState === XMLHttpRequest.DONE) {
//     if (httpRequest.status === 200) {
//       console.log(httpRequest.responseText);
//       displaySummary(httpRequest.responseText);
//     } else {
//       console.log('There was a problem with the request.');
//     }
//   }
// }
//
//
//
//
//   (function makeUrlChangeToDisplaySummary() {
//     window.addEventListener("hashchange", showSummaryForCurrentPage);
//   })();
//
//   function showSummaryForCurrentPage() {
//     controller.displayNoteTextForId(getArticleIdFromUrl());
//   }
//
//   function getArticleIdFromUrl (location) {
//     id = this.location.hash.split("/")[1];
//     return Number(this.location.hash.split("/")[1]);
//   }
