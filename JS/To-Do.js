let inputs = document.getElementById("taskInput");
let text = document.querySelector(".text");

function add() {
    if (inputs.value == "") {
        alert("Please Enter Task");
    } else {
        let newElement = document.createElement("ul");
        newElement.innerHTML = `${inputs.value} 
            <i class="fa-solid fa-edit icon edit"></i>
            <i class="fa-solid fa-trash delete"></i>`;
        text.appendChild(newElement);
        inputs.value = "";
        newElement.querySelector(".delete").addEventListener("click", remove);
        function remove() {
            newElement.remove();
        }
        newElement.querySelector(".edit").addEventListener("click", edit);
        function edit() {
            let updatedText = prompt("Edit your task:", newElement.firstChild.textContent.trim());
            if (updatedText !== null && updatedText !== "") {
                newElement.firstChild.textContent = updatedText;
            }
        }
    }
}
