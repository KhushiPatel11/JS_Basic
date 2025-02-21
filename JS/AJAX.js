console.log("Ajax")
let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)
function buttonClickHandler() {
    console.log("You have clicked on fetch button");

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'abc.txt', true)

    xhr.onprogress = function() {
        console.log("On progress");
    }
    xhr.onload = function(){
        console.log(this.responseText);
    }

    // Send the Request
    xhr.send();
}