
function Article (id, title, url) {
  this.id = id;
  this.title = title;
  this.webUrl = url;
}

Article.prototype.full = function(article){
  var fullArticle = new XMLHttpRequest();
  fullArticle.open('GET', "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/" + this.id + "?show-fields=body");
  fullArticle.send();
  fullArticle.onload = function() {
    var data = JSON.parse(fullArticle.responseText);
    var articleBody = data.response.content.fields.body;
    document.getElementById(article).insertAdjacentHTML("beforeend", articleBody)
  };
};

Article.prototype.summary = function(url, id, article) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + url, true);
  xhr.send();
  console.log(id);
  xhr.onload = function() {
    var data = JSON.parse(xhr.responseText);
    var htmlString = " ";
    for (i=0; i< 3; i++){
      htmlString+= data.sentences[i] + " ";
    }
    summary = "<br><a style='text-decoration: none' href=" + "'javascript:articleList[i].full(\"" + article+ "\")'>" + htmlString + " </a><br><br>";
    document.getElementById(article).insertAdjacentHTML("beforeend", summary)
  };
};
