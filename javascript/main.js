//Getting user input
var input = document.querySelector(".js-userinput");
var button = document.querySelector(".js-go");
var container = document.querySelector(".js-container");

//When user clicks Go button, we will initialize search query
button.addEventListener('click', function(){
    //input = document.querySelector("input").value;
    container.innerHTML = "";
    search();
});

//When user presses enter button on keyboard, we will initialize search query
input.addEventListener('keyup', function(e){
    
    var key = e.which;
    
    //Enter has keycode 13, if enter is pressed then we run the following
    if (key === 13) {
        
        container.innerHTML = "";
        search();
        //insertInDom(input.value);
    }
});

//2. Interacting with Giphy API
function search(){
var urlQuery = input.value.split(" ");
var urlString ="";
urlQuery.forEach(function(word){
    urlString += word + "+";
});
var url = "http://api.giphy.com/v1/gifs/search?q="+ urlString +"&api_key=dc6zaTOxFJmzC";
    console.log(url);
    
//Ajax request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open('GET', url);
GiphyAJAXCall.send();

//(e) stands for our event
GiphyAJAXCall.addEventListener('load', function(e){
   
    var data = e.target.response;
    
    insertInDom(data);
});
}


function insertInDom(input) {
    
    //Parsing data to make it more readable
    var response = JSON.parse(input);
    
    var imageUrls = response.data;
    
    imageUrls.forEach(function(image){
        
        var src = image.images.fixed_height.url;
        
        var container = document.querySelector(".js-container");
        
        container.innerHTML += "<img src=\"" + src + "\" class='container-image'>";
    });
    
}

//var userInput = document.querySelector("")