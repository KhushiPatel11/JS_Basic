class RailwayForm{
    submit(){
        alert("Form Submitted")
    }
    cancel(){
        alert("This Form is cancelled")
    }
}

let a = new RailwayForm();
let b = new RailwayForm();

a.submit();
b.submit();
b.cancel();