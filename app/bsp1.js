


document.addEventListener("DOMContentLoaded", function (event) {
    document.body.setAttribute("style", " height: " + window.innerHeight + "px");

});






document.getElementById("submit-form").addEventListener("click", submitForm);



function submitForm() {
    
    let data = {
        "firstname": document.getElementsByName("firstname")[0].value,
        "lastname": document.getElementsByName("lastname")[0].value,
        "birthYear": document.getElementsByName("birth-year")[0].value,
        "svNumber": document.getElementsByName("svnr")[0].value,
        "gender": document.querySelector('input[name="sex"]:checked').value,
        "symptoms": document.getElementsByName("symptoms[]")
    }

    let outputString = "Ausgabe: \n";
    for (let key in data) {

        if (key != "symptoms") {
            outputString += "\n- " + key + ": " + data[key];
        } else {
            outputString += "\n Symptome: " + getCheckedSymptoms(data[key]);
        }
    }

    alert(outputString);
}

function getCheckedSymptoms(inputFields) {
    let symptoms = "";
    for(let i in inputFields) {

        if(inputFields[i].checked == true) {

            symptoms += "\n  - " + inputFields[i].value;
        }

    }

    return symptoms;
}