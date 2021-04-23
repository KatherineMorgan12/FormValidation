window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    resetErrorMessages();
    isTextPresent("first-name", "First name is required.");
    isTextPresent("last-name", "Last name is required.");
    var dobBox = document.getElementById("dob");
    var dob = dobBox.value;
    if (!isDateValid(dob)) {
        dobBox.nextElementSibling.innerHTML = "Format should be mm/dd/yyyy.";
    }
}
function isDateValid(input) {
    var pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g;
    return pattern.test(input);
}
function resetErrorMessages() {
    var allSpans = document.querySelectorAll("form span");
    for (var i = 0; i < allSpans.length; i++) {
        var currSpan = allSpans[i];
        if (currSpan.hasAttribute("data-required")) {
            currSpan.innerText = "*";
        }
        else {
            currSpan.innerText = "";
        }
    }
}
function isTextPresent(id, errMessage) {
    var textBox = document.getElementById(id);
    var textBoxValue = textBox.value;
    if (textBoxValue == "") {
        var errSpan = textBox.nextElementSibling;
        errSpan.innerHTML = errMessage;
        return false;
    }
    return true;
}
