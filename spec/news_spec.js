function testFetchNewsButton(){
  clickButton('btn');
  var article =  document.getElementById("article")

  article.addEventListener("DOMSubtreeModified", function(){
    var body = document.body.innerHTML
    assert.toContain("</a>", body);
  }, false);


}

function listenToButton(){
  var body = document.body.innerHTML
  assert.toContain("</a>", body);
};
