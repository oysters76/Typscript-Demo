function performAction(event) {
    var _a;
    var val = document.getElementById("textbox").value;
    var liTag = document.createElement("li");
    liTag.innerHTML = val;
    (_a = document.querySelector(".list")) === null || _a === void 0 ? void 0 : _a.appendChild(liTag);
}
