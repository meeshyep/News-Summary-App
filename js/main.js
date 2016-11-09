var btn = document.getElementById("btn");
var articleDiv = document.getElementById("article");
var fullArticleDiv = document.getElementById("full_article");

btn.addEventListener("click", function(){


  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'http://content.guardianapis.com/uk?show-editors-picks=true&api-key=7f27a7f6-e698-405c-ab24-ae75371e4e93');
  ourRequest.send();
  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
});

function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i< data.response.editorsPicks.length; i++) {
    htmlString += "<a style='text-decoration: none' href=" +"'javascript:getFullArticle(\"" + data.response.editorsPicks[i].id + "\")'> " + data.response.editorsPicks[i].webTitle + " </a><br><br>";
  }
  articleDiv.insertAdjacentHTML('beforeend', htmlString);
}

function getFullArticle(apiId){
  var fullArticle = new XMLHttpRequest();
  fullArticle.open('GET', "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/" + apiId + "?show-fields=body");
  fullArticle.send();
  fullArticle.onload = function() {

    var fullData = JSON.parse(fullArticle.responseText);
    renderFullArticle(fullData);
  };
}

function renderFullArticle(data){
  var articleBody = data.response.content.fields.body;
  fullArticleDiv.innerHTML = articleBody;

}
