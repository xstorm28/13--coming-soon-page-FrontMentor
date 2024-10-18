document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".container_content_form");
    const emailInput = document.querySelector(".container_content_form_email");
    const errorMsg = document.querySelector(".container_content_form_email--error");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Evitar el envío del formulario
  
      const emailValue = emailInput.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!emailPattern.test(emailValue)) {
        // Si el correo no es válido, muestra el error
        errorMsg.textContent = "Please provide a valid email";
        emailInput.classList.add("error");  // Agrega la clase de error al input
      } else {
        // Si el correo es válido, limpia el mensaje de error y resetea el campo
        errorMsg.textContent = "";
        emailInput.classList.remove("error"); // Remueve la clase de error
        emailInput.value = ""; // Restablece el campo de email
      }
    });
  });