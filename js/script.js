function check() {
  const password = document.getElementById('pwd');
  const confirm = document.getElementById('cpwd');
  const span = document.getElementById('matched');

  if (document.getElementById('pwd').value == document.getElementById('cpwd').value) {
    password.style.border = "2px solid green";
    confirm.style.border = "2px solid green";
    span.innerText = "";
  } else {
    password.style.border = "2px solid #b91c1c";
    confirm.style.border = "2px solid #b91c1c";
    span.innerText = "* Passwords do not match";
    span.style.color = "#b91c1c";
    span.style.fontSize = "12px";
    span.style.marginTop = "2px";
  }
}