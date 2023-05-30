function calci() {
  document.getElementById("screen").value = "";
  alert("enter something!");
}
function show(input) {
  document.getElementById("screen").value += input;
}

function cal() {
  let result = eval(document.getElementById("screen").value);
  document.getElementById("screen").value = result;
}
