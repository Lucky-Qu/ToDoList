const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

function addTodo() {
    const text = todoInput.value.trim();
    if (!text) return;

    // 创建元素
    const item = document.createElement("div");
    item.className = "todo-item";

    const span = document.createElement("span");
    span.textContent = text;

    const btn = document.createElement("button");
    btn.className = "delete-btn";
    btn.textContent = "✕";
    btn.onclick = () => item.remove();

    item.appendChild(span);
    item.appendChild(btn);
    todoList.appendChild(item);

    todoInput.value = "";
}

// 支持按回车添加
todoInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTodo();
    }
});