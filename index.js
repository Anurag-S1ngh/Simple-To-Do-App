const todoInput = document.querySelector(".todoInput");
const btn = document.querySelector(".btn");
const todoContainer = document.querySelector(".todo_container");

btn.addEventListener("click", () => {
    if (todoInput.value.trim() != '') {
        Render(todoInput.value)
    }
    todoInput.value = '';
})

todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        if (todoInput.value.trim() != '') {
            Render(todoInput.value)
        }
    }
    todoInput.value = '';
})

function Render(txt) {
    console.log('hi');
    const todoDiv = document.createElement("div");
    const checkboxDiv = document.createElement("div");
    const checkboxInput = document.createElement("input");
    const txtInput = document.createElement("input");
    const deleteDiv = document.createElement("div");
    todoDiv.classList.add('todo');
    checkboxDiv.classList.add('checkbox_container');
    checkboxInput.classList.add('checkbox');
    txtInput.classList.add('txt');
    deleteDiv.classList.add('delete');
    txtInput.value = txt;
    deleteDiv.innerHTML = `<i class="ri-delete-bin-6-fill"></i>`;
    checkboxInput.setAttribute('type', "checkbox");
    checkboxDiv.appendChild(checkboxInput);
    todoDiv.appendChild(checkboxDiv);
    todoDiv.appendChild(txtInput);
    todoDiv.appendChild(deleteDiv);
    todoContainer.appendChild(todoDiv);
}

function DeleteTodo() {

}