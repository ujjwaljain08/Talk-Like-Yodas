const apiUrl = "https://api.funtranslations.com/translate/yoda.json";

var txtinput = document.querySelector("#txtInput");
var txtoutput = document.querySelector("#txtOutput");
var btnTranslate = document.querySelector("#btnTranslate");

btnTranslate.addEventListener("click", clickHandler);

function getFinalApi(text) {
    return apiUrl + "?" + "text=" + text;
}

function errorHandler(err) {
    console.log("Theres an Error" + err);
    alert("Something Wrong with the Server ! Please Try Again");
}

function clickHandler() {
    var inputValue = txtinput.value;
    

    fetch(getFinalApi(inputValue))
        .then((response) => response.json())
        .then((json) => {
            var yodasText = json.contents.translated;
            console.log(yodasText);
            txtoutput.innerText = yodasText;
        })
        .catch(errorHandler);
}