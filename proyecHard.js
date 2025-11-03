document.addEventListener('DOMContentLoaded', () => {

  // --- Animación wave (por si la usás en el inicio) ---
  const waveText = document.querySelector('.wave-text');
  if (waveText) {
    const textContent = waveText.textContent;
    waveText.textContent = '';
    textContent.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.animationDelay = `${index * 0.1}s`;
      waveText.appendChild(span);
    });
  }

  // --- Alerta del formulario ---
  const EnviarInfo = document.getElementById("enviar");
  if (EnviarInfo) {
    EnviarInfo.addEventListener('click', function() {
      alert("🚀 ¡Su pedido ya fue encargado! 📬");
    });
  }

  // --- Acordeón interactivo ---
  const botones = document.querySelectorAll(".boton-acordeon");
  botones.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("activo");
      const panel = btn.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });

  // --- Animación suave para las tarjetas ---
  const tarjetas = document.querySelectorAll(".tarjeta");
  tarjetas.forEach(t => {
    t.addEventListener("mouseenter", () => {
      t.style.transform = "scale(1.05)";
      t.style.transition = "transform 0.3s ease";
    });
    t.addEventListener("mouseleave", () => {
      t.style.transform = "scale(1)";
    });
  });

});


