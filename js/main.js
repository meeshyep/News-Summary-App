
// var pageCounter = 1;
// var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");
var btn1 = document.getElementById("btn1");
var articleDiv = document.getElementById("article")
var summaryDiv = document.getElementById("summary")

btn.addEventListener("click", function(){


  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'http://content.guardianapis.com/uk?show-editors-picks=true&api-key=7f27a7f6-e698-405c-ab24-ae75371e4e93');

  // ourRequest.setRequestHeader('7f27a7f6-e698-405c-ab24-ae75371e4e93', 'JSON');
  console.log(ourRequest);
  ourRequest.send();
  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
    console.log(ourData);

  };
});

function renderHTML(data) {


  var htmlString = "";

    for (i = 0; i< data.response.editorsPicks.length; i++) {
    htmlString += "<a style='text-decoration: none' href=" +"'javascript:getFullArticle(\"" + data.response.editorsPicks[i].apiUrl + "\")'> " + data.response.editorsPicks[i].webTitle + " </a><br><br>";
  }
    articleDiv.insertAdjacentHTML('beforeend', htmlString);
  }

function getFullArticle(apiId){
  console.log(apiId)
  var fullArticle = new XMLHttpRequest();
    // fullArticle.open('GET', apiId);

  fullArticle.send();
  fullArticle.onload = function() {
    var fullData = JSON.parse(fullArticle.responseText);
    // renderHTML(fullData);
    console.log(fullData);

  };
}

btn1.addEventListener("click", function(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html", false);
  xhr.send();

  var ourData = JSON.parse(xhr.responseText);
  showHTML(ourData);
});


function showHTML(data) {
  var htmlString = " "
    for (i=0; i< 3; i++){
      htmlString+= data.sentences[i] + " ";
    }
    summaryDiv.innerHTML = htmlString;
};
