document.addEventListener("DOMContentLoaded", () => {
  // Escucha todos los clics en botones con clase "btn-clean"
  document.querySelectorAll(".btn-clean").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      // Encuentra el modal que contiene el botón
      const modal = btn.closest(".modal1");

      if (modal) {
        // Busca el select de talla dentro de ese modal
        const tallaSelect = modal.querySelector("select[name='size']");
        if (tallaSelect) {
          tallaSelect.selectedIndex = 0;
        }

        // Busca el input de cantidad dentro de ese modal
        const cantidadInput = modal.querySelector(".input-quantity");
        if (cantidadInput) {
          cantidadInput.value = 1;
        }
      }
    });
  });
});
