// Onclick Event
function timeDate(){
    document.getElementById("demo").innerHTML = Date();
}

// Onchange Event
function myFunction(){
    let x = document.getElementById("mySelect").value;
    document.getElementById("demo1").innerHTML = "Fruits is :" + x;
}

// Onmouseover and Onmouseout Event
function bigImg(x){
    x.style.height =  "64px";
    x.style.width =  "64px";
}
function normalImg(x){
    x.style.height =  "32px";
    x.style.width =  "32px";
}

// OnKeydown Event
function myKeyFuntion(){
    document.getElementById("demo2").innerHTML = "You pressed a key inside the input field";
}

// Onload Event
function myLoadFunction(){
    alert("Page is Loaded");
}