//Hidden Infomation
function handleSubmit() {
  const emailValue = document.getElementById("email").value.toLocaleUpperCase();
  const errorEmail = document.getElementById("error-email");
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const check = emailValue.match(regex);
  const sectionContent = document.querySelector("#info .section-content");
  const submitContrlol = document.querySelector(".submit-email");
  if (check) {
    sectionContent.style.display = "block";
    submitContrlol.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Email không hợp lệ !";
  }
}

//Hidden project
//Mouseover & MouseOut
function mouseOver(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.style.display = "block";
}
function mouseOut(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.style.display = "none";
}
//View More & View Less
const viewBtn = document.querySelectorAll(".view-more");
const contentMore = document.querySelectorAll(".more");

for (let i = 0; i < viewBtn.length; i++) {
  viewBtn[i].addEventListener("click", function () {
    if (contentMore[i].style.display != "block") {
      contentMore[i].style.display = "block";
      viewBtn[i].innerHTML = "View Less";
    } else {
      contentMore[i].style.display = "none";
      viewBtn[i].innerHTML = "View More";
    }
  });
}
