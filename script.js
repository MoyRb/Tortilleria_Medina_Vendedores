// Este script se carga al final del body, así que el DOM ya está listo

// Scroll suave al formulario desde el botón de arriba
const heroButton = document.getElementById("hero-button");
const vendedoresSection = document.getElementById("vendedores");

if (heroButton && vendedoresSection) {
  heroButton.addEventListener("click", (e) => {
    e.preventDefault();
    vendedoresSection.scrollIntoView({ behavior: "smooth" });
  });
}

// Envío del formulario por WhatsApp
const enviarBtn = document.getElementById("enviar-btn");
if (enviarBtn) {
  enviarBtn.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const localidad = document.getElementById("localidad").value.trim();
    const comentarios = document.getElementById("comentarios").value.trim();

    const paqueteRadio = document.querySelector('input[name="paquete"]:checked');
    const paquete = paqueteRadio ? paqueteRadio.value : "";

    if (!nombre || !telefono || !localidad || !paquete) {
      alert("Por favor llena todos los campos obligatorios.");
      return;
    }

    const mensaje = `
Hola, me interesa ser vendedor de Tortillas de Harina Medina en Chilchota.

Nombre: ${nombre}
Teléfono (WhatsApp): ${telefono}
Localidad: ${localidad}
Paquete de interés: ${paquete}
Comentarios: ${comentarios || "Ninguno"}
    `.trim();

    // Tu número de WhatsApp en formato internacional: 52 (México) + 1 + número
    const numeroWhatsApp = "5213511345108";

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    // Usamos location en lugar de window.open para evitar bloqueos de pop-ups
    window.location.href = url;
  });
}
