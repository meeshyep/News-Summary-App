
// var pageCounter = 1;
// var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");
var articleDiv = document.getElementById("article")

btn.addEventListener("click", function(){
//   $.ajax({
//     url: 'http://content.guardianapis.com/search?q=debates&api-key=7f27a7f6-e698-405c-ab24-ae75371e4e93', // The URL to the API. You can get this in the API page of the API you intend to consume
//     type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
//     data: {}, // Additional parameters here
//     dataType: 'json',
//     success: function(data) { console.dir((data.source)); },
//     error: function(err) { alert(err); },
//     beforeSend: function(xhr) {
//     xhr.setRequestHeader('7f27a7f6-e698-405c-ab24-ae75371e4e93'); // Enter here your Mashape key
//     }
// });

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


//   pageCounter++;
//   if (pageCounter >3 ) {
//     btn.classList.add("hide-me");
//   }
// });
//
function renderHTML(data) {
  // htmlString = (data.response.editorsPicks[0].webTitle, data.response.editorsPicks[1].webTitle);
  // htmlString = data


  var htmlString = "";

    for (i = 0; i< data.response.editorsPicks.length; i++) {
    htmlString += "<a style='text-decoration: none' href='" + data.response.editorsPicks[i].webUrl + "'>" + data.response.editorsPicks[i].webTitle + "</a><br><br>";
  }
    articleDiv.insertAdjacentHTML('beforeend', htmlString);
  }


  //   for (ii = 0; ii < data[i].foods.likes.length; ii++) {
  //     if(ii=== 0) {
  //   htmlString += data[i].foods.likes[ii];
  //     }
  //     else {
  //       htmlString += " and  " + data[i].foods.likes[ii];
  //     }
  //     htmlString+= ' and dislikes ';
  //     for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
  //       if(ii=== 0) {
  //     htmlString += data[i].foods.dislikes[ii];
  //       }
  //       else {
  //         htmlString += " and  " + data[i].foods.dislikes[ii];
  //       }
  //   htmlString+= '</p>';
  // }
// }
//   animalContainer.insertAdjacentHTML('beforeend', htmlString);
// }
// }
