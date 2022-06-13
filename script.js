let accordion = document.getElementsByClassName("faq-question");

for (let i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
    let targetDiv = this.nextElementSibling;
    if (targetDiv.style.display === "block") {
        targetDiv.style.display = "none";
    } else {
        targetDiv.style.display = "block";
    }
  });
}
