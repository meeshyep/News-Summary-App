function Article (id, title) {
  this.id = id;
  this.title = title;
}

function full (id){
  var fullArticle = new XMLHttpRequest();
  fullArticle.open('GET', "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/" + id + "?show-fields=body");
  fullArticle.send();
  fullArticle.onload = function() {
    return JSON.parse(fullArticle.responseText);
  };
}

Article.prototype.summary = function(id) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://content.guardianapis.com/" + id + "/note.html");
  xhr.send();

  var data = JSON.parse(xhr.responseText);
  var htmlString = " ";
  for (i=0; i< 3; i++){
    htmlString+= data.sentences[i] + " ";
  }
  summaryDiv.innerHTML = htmlString;

  console.log(id);
  xhr.onload = function() {
    var data = JSON.parse(xhr.responseText);
    var htmlString = " ";
    for (i=0; i< 3; i++){
      htmlString+= data.sentences[i] + " ";
      summaryDiv.innerHTML = "<a style='text-decoration: none' href=" + "'javascript:articleList[i].full(\"" + id + "\")'>" + htmlString + " </a><br><br>";
    }
  };
};
