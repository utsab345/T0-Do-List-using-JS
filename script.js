const btn = document.querySelector(".inputBox button");
const inputBox = document.querySelector(".inputBox input");
const list = document.querySelector(".list");

btn.addEventListener("click", () => {
  addTask();
});
function addTask() {
  if (inputBox.value === "") {
    alert("You must enter something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    list.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = `<i class="fas fa-times"></i>`;
    li.appendChild(span);
    span.querySelector("i").addEventListener("click", () => {
      li.remove();
    });
  }
  inputBox.value = "";
}
list.addEventListener("click", function (event) {
  if (event.target.tagName == "LI") {
    event.target.classList.toggle("checked");
  }
});
