var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loaderWrapper").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}