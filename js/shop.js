
let sectionIndex = 1;
showSections(sectionIndex);

// Next/previous controls
function plusSections(n) {
  showSections(sectionIndex += n);
}

// Thumbnail image controls
function currentSection(n) {
  showSections(sectionIndex = n);
}

function showSections(n) {
  let i;
  let sections = document.getElementsByClassName("mySection");
  let links = document.getElementsByClassName("link");
  if (n > sections.length) {slideIndex = 1}
  if (n < 1) {sectionIndex = sections.length}
  for (i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }
  for (i = 0; i < links.length; i++) {
    links[i].className = links[i].className.replace(" active-link", "");
  }
  sections[sectionIndex-1].style.display = "flex";
  links[sectionIndex-1].className += " active-link";
} 




