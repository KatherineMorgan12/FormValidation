window.onload = function() {
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void{
    isTextPresent("first-name", "First name is required.");
    isTextPresent("last-name", "Last name is required.")
}
/**
 * Returns true if the text box with given id has text within
 * @param id the id of the ,input type ="text"> to validate
 * @param errMessage The message to display in sibling span of said textbox
 * @returns 
 */
function isTextPresent(id:string, errMessage:string):boolean {
    let textBox = <HTMLInputElement>document.getElementById(id);
    let textBoxValue = textBox.value;
    if (textBoxValue == "") {
        let errSpan = <HTMLElement>textBox.nextElementSibling;
        errSpan.innerHTML = errMessage;
        return false;
    }
    return true;
}
