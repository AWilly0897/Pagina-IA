document.addEventListener("DOMContentLoaded", () => {
  async function cargar(url, id, fallback) {
    const cont = document.getElementById(id);
    if (!cont) return;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("no encontrado");
      cont.innerHTML = await res.text();
    } catch (err) {
      cont.innerHTML = fallback;
    }
  }

  cargar("../componentes/formulario-comentario.html", "bloque-formulario", `
    <section class="formulario-testimonial">
      <h2>Tu pensamiento</h2>
      <form id="formulario-comentario">
        <label for="nombre">Nombre</label>
        <input id="nombre" name="nombre" type="text">
        <label for="comentario">Comentario</label>
        <textarea id="comentario" name="comentario"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  `);

  cargar("../componentes/footer.html", "bloque-footer", `<footer class="site-footer"><p>Pensamiento-Abierto-Tercera-Edicion · © 2026 Ernesto I. Lora</p></footer>`);
});
