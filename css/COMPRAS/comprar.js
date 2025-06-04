  document.querySelectorAll(".btn-whatsapp").forEach((boton) => {
    boton.addEventListener("click", function () {
      const contenedor = boton.closest(".container-info-product");
      const talla = contenedor.querySelector(".size").value;
      const cantidad = contenedor.querySelector(".input-quantity").value;
      const precioTexto = contenedor.querySelector(".container-price span").textContent;

      if (!talla) {
        alert("Por favor, selecciona una talla.");
        return;
      }

      const numeroTelefono = "593983158344"; 
      const mensaje = `¡Hola MODAS CINTHYA!, me encantan sus productos, quiero comprar:\n\n${precioTexto}\nTalla: ${talla}\nCantidad: ${cantidad}\n\nDe antemano solicito una factura, gracias.`;

      const urlWhatsapp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;

      window.open(urlWhatsapp, "_blank");
    });
  });
