var btn = document.getElementById("btn");
var btn1 = document.getElementById("btn1");
var articleDiv = document.getElementById("article");
var summaryDiv = document.getElementById("summary");
var fullArticleDiv = document.getElementById("full_article");
var articleList = [];

btn.addEventListener("click", function(){

  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'http://content.guardianapis.com/uk?show-editors-picks=true&api-key=7f27a7f6-e698-405c-ab24-ae75371e4e93');
  ourRequest.send();
  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    ourData.response.editorsPicks.forEach(function(object) {
      var id = object.id;
      var title = object.webTitle;
      var article = new Article(id, title);
      articleList.push(article);
    });
  };
  titles(articleList);
});

function titles(articleList) {
  var htmlString = "";
  for (i = 0; i < articleList.length; i++) {
    htmlString += "<a style='text-decoration: none' href=" +"'javascript:articleList[i].summary(\"" + articleList[i].id + "\")'> " + articleList[i].title + " </a><br><br>";
    articleDiv.insertAdjacentHTML('beforeend', htmlString);
  }
}

function renderFullArticle(data){
  var articleBody = data.response.content.fields.body;
  fullArticleDiv.innerHTML = articleBody;
}

function showSummary(data) {
  var htmlString = " ";
  for (i=0; i< 3; i++){
    htmlString+= data.sentences[i] + " ";
  }
  summaryDiv.innerHTML = htmlString;
}
