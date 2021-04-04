let a = document.getElementById("geschlecht");

$("#submit").on("click", submit);

function submit() {
  let inputData = getInputs();
  output(inputData);
}

function getInputs() {
  let inputArray = [];

  inputArray.push($("#vorname").val());
  inputArray.push($("#nachname").val());
  inputArray.push($("#geb").val());

  if (a.value == 1) inputArray.push("männlich");
  else if (a.value == 2) inputArray.push("weiblich");
  else inputArray.push("Error");

  return inputArray;
}

function output(arr) {
  console.log(arr);
  let outString = "";

  if (arr.includes("")) {
    outString = "Fehlerhafte Eingabe";
  } else {
    outString +=
      arr[0] + "<br>" + arr[1] + "<br>" + arr[2] + "<br>" + arr[3] + "<br>";
  }
  $("#output").html(outString);
}
