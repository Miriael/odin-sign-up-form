let password = document.querySelector("#user_password");
let retyped_password = document.querySelector("#user_retyped-password");
let error = document.querySelector("#error");

function check() {
  if (password.value == retyped_password.value) {
    password.classList.remove("error");
    retyped_password.classList.remove("error");
    error.style.display = "none";
    password.setCustomValidity("");
    retyped_password.setCustomValidity("");
  } else {
    password.setCustomValidity("The passwords aren't matching.");
    retyped_password.setCustomValidity("The passwords aren't matching.");
    if (!(password.classList.contains("error"))) {
      password.classList.add("error");
      retyped_password.classList.add("error");
      error.style.display = "inline"; 
    };
  };   
};

password.addEventListener('input', () => check());

retyped_password.addEventListener('input', () => check());