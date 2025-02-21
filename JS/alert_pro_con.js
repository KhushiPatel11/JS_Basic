alert("Enter the value of a");
let a = prompt("Enter here: ");
a = Number.parseInt(a);
alert("You Enterd a number type: " + (typeof a));
let write  = confirm("Do you Want to write to the page");
if(write){
    document.write(a);
}
else{
    document.write("Please allow me to write");
}