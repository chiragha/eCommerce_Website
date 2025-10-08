

// user registration form validation

document.getElementById('submit').addEventListener("click", function(event){
    event.preventDefault();
  


    // Get values inside event listener
  let user_name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let password = document.getElementById('password').value.trim();
  

    let valid = true;
    
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    
    
  if (user_name === "") {
    document.getElementById("nameError").textContent = "user name is required.";
    valid = false;
  }

   if (email === "") {
    document.getElementById("emailError").textContent = "email is required.";
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  if (valid) {

     // ✅ Remove <p> tag content
    const paragraph = document.querySelector(".form-box p");
    paragraph.textContent = ""; 

   const successMsg = document.createElement("div");
    successMsg.textContent = "Form submitted successfully! Redirecting to login...";
    successMsg.style.color = "green";
    successMsg.style.textAlign = "center";
    document.querySelector(".form-box").appendChild(successMsg);

    setTimeout(() => {successMsg.remove();
        window.location.href = "../main/login.html";
        }, 2000);
  }

});
