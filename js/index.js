const btn = document.getElementById("ham-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const messageInput = document.getElementById("message");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("send-msg");
const errorMsg = document.querySelectorAll(".error-msg");
const errorMsgMessage = document.getElementById("error-msg-m");
const navLink = document.querySelectorAll("nav a");
const form = document.getElementById("contact-form");
const emailError = document.getElementById("email-err");

console.log(errorMsgMessage);
console.log(emailError);

//vars

const activePage = window.location.pathname;
let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

// mobile menu toggle
btn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// nav links active class

navLink.forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("link-style");
  }
});

// form validation
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nameInput.value === "") {
    nameInput.style.border = "1px solid #F43030";
    errorMsgMessage.classList.add("active");
  } else {
    nameInput.style.border = "1px solid #5FB4A2";
    errorMsgMessage.classList.remove("active");
  }

  if (emailInput.value === "") {
    emailInput.style.border = "1px solid #F43030";
    errorMsgMessage.classList.add("active");
  } else {
    emailInput.style.border = "1px solid #5FB4A2";
    errorMsgMessage.classList.remove("active");
  }

  if (messageInput.value === "") {
    messageInput.style.border = "1px solid #F43030";
    errorMsgMessage.classList.add("active");
  } else {
    messageInput.style.border = "1px solid #5FB4A2";
    errorMsgMessage.classList.remove("active");
  }
});

//show error msg
function showError() {
  form.addEventListener("submit", () => {
    errorMsg.forEach((box) => {
      if (nameInput.value === "") {
        box.classList.add("active");
      } else {
        box.classList.remove("active");
      }
    });
  });
}

showError();

// email validation function

function emailValidation() {
  form.addEventListener("submit", () => {
    if (emailInput.value.match(regex)) {
      emailError.classList.remove("active");
    } else {
      emailError.classList.add("active");
    }
  });
}

emailValidation();
