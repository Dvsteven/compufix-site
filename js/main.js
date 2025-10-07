document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-contacto");
  const respuesta = document.getElementById("respuesta");
  const loader = document.getElementById("loader");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    loader.style.display = "block";
    respuesta.textContent = "";

    emailjs.sendForm("TU_SERVICE_ID", "TU_TEMPLATE_ID", form)
      .then(() => {
        loader.style.display = "none";
        respuesta.textContent = "✅ Mensaje enviado correctamente.";
        respuesta.style.color = "#00c0d4";
        form.reset();
      })
      .catch((error) => {
        loader.style.display = "none";
        respuesta.textContent = "❌ Hubo un error al enviar el mensaje.";
        respuesta.style.color = "red";
        console.error("Error al enviar:", error);
      });
  });
});
//Este proyecto es de uso personal y educativo. Puedes tomar inspiración, pero no copiarlo tal cual sin permiso.
//© 2025 Steven Henao – Todos los derechos reservados.