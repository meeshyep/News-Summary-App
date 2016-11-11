var btn = document.getElementById("btn");
var hide = document.getElementById("hide");
var articleDiv = document.getElementById("articles");
var summaryDiv = document.getElementById("summary");
var fullArticleDiv = document.getElementById("full_article");
var articleList = [];

btn.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'http://content.guardianapis.com/uk?show-editors-picks=true&show-fields=thumbnail&api-key=7f27a7f6-e698-405c-ab24-ae75371e4e93');
  ourRequest.send();
  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    ourData.response.editorsPicks.forEach(function(object) {
      var article = new Article(object.id, object.webTitle, object.webUrl);
      articleList.push(article);
    });
    for (i=0; i < ourData.response.editorsPicks.length; i++){
      var object = ourData.response.editorsPicks[i];
      articleList.push(new Article(object.id, object.webTitle, object.webUrl,i, object.fields.thumbnail));
    }
    titles();
  };
});

function titles() {
  var htmlString = "";
  for (i = 0; i < articleList.length; i++) {
    htmlString += "<div id='article_"+i+"'><a style='text-decoration: none' href=" +"'javascript:articleList["+i+"].summary(\"" + articleList[i].webUrl + "\",\"" + articleList[i].id +  "\", \"article_" + i + "\")'> " + articleList[i].title + " </a></div><br><br>";
  }
  articleDiv.insertAdjacentHTML('beforeend', htmlString);
}

hide.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'http://content.guardianapis.com/uk?show-editors-picks=true&show-fields=thumbnail&api-key=7f27a7f6-e698-405c-ab24-ae75371e4e93');
  ourRequest.send();
  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    for (i=0; i < ourData.response.editorsPicks.length; i++){
      var object = ourData.response.editorsPicks[i];
      articleList.push(new Article(object.id, object.webTitle, object.webUrl,i, object.fields.thumbnail));
    }
    titles();
  };
});

function titles() {
  var htmlString = "";
  for (i = 0; i < articleList.length; i++) {
    htmlString += "<div id='article_"+i+"'><a style='text-decoration: none' href=" +"'javascript:articleList["+i+"].summary(\"" + articleList[i].webUrl + "\",\"" + articleList[i].id +  "\", \"article_" + i + "\")'> " + articleList[i].title + "</a><br><img src='" + articleList[i].thumbnail + "'></div><br><br>";
  }
  articleDiv.insertAdjacentHTML('beforeend', htmlString);
}

function clearDiv (div_id, index) {
    document.getElementById(div_id).innerHTML = "<a style='text-decoration: none' href=" +"'javascript:articleList["+index+"].summary(\"" + articleList[index].webUrl + "\",\"" + articleList[index].id +  "\", \"article_" + i + "\")'> " + articleList[index].title + " </a></div><br><br>";
}
