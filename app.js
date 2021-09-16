var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function getTranslationURL(input){
    var url = serverURL + "?" + "text=" + input;
    return (encodeURI(url));
}

function errorHandler(error){
    console.log("error occured" + error);
    alert("Some problem with server, Try again later")
}

function clickHandler(){
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(JSON => {
            var translatedText = JSON.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler);
}

btnTranslate.addEventListener("click",clickHandler);