function validateForm() {
  var form = document.getElementById("base-form");
  var email = document.getElementById("email");

  if (!validateEmail(email.value)) {
    form.classList.add("error");
  } else {
    form.classList.remove("error");
  }
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
}
