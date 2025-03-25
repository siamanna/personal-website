document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    if (name && email) {
      sessionStorage.setItem("userName", name);
      sessionStorage.setItem("userEmail", email);
      window.location.href = "work.html";
    } else {
      alert("Please provide both your full name and email address.");
    }
  });