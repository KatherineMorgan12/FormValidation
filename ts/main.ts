window.onload = function() {
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void{
    resetErrorMessages();
    isTextPresent("first-name", "First name is required.");
    isTextPresent("last-name", "Last name is required.");
    
    // Validate date
    let dobBox = <HTMLInputElement>document.getElementById("dob");
    let dob = dobBox.value;
    if (!isDateValid(dob)){
        dobBox.nextElementSibling.innerHTML = "Format should be mm/dd/yyyy."
    }
    
}

function isDateValid(input:string):boolean{
    // Validating MM/DD/YYYY and M/D/YYYY
    // \d{1,2}/\d{1,2}/\d{4}
    let pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g;
    return pattern.test(input);
}



/**
 * Resets all spans back to default text.
 */
function resetErrorMessages():void{
    let allSpans = document.querySelectorAll("form span");
    for (let i = 0; i < allSpans.length; i++){
        let currSpan = <HTMLElement>allSpans[i];
        if (currSpan.hasAttribute("data-required")){
            currSpan.innerText = "*";
        }
        else{
            currSpan.innerText = "";
        }
    }
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
