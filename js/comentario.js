// js/comentario.js
document.addEventListener("submit", async function (e) {
  if (!e.target || e.target.id !== "formulario-comentario") return;
  e.preventDefault();

  const nombre = (document.getElementById("nombre")?.value || "Anónimo").trim();
  const comentario = (document.getElementById("comentario")?.value || "").trim();
  if (!comentario) return alert("Escribí un comentario");

  const fecha = new Date().toISOString();
  const articulo = document.body.dataset.articuloId || "articulo-sin-id";
  const nuevo = { fecha, nombre, articulo, comentario };

  try {
    const arr = JSON.parse(localStorage.getItem("comentariosPublicados") || "[]");
    arr.push(nuevo);
    localStorage.setItem("comentariosPublicados", JSON.stringify(arr));
  } catch (err) {
    console.error("Error guardando en localStorage:", err);
  }

  // Intento de envío al backend si existe (no obligatorio para demo)
  try {
    await fetch("/api/nuevo-comentario", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, comentario, articulo })
    });
  } catch (err) {
    // silencioso: demo local sin backend no debe romper la experiencia
    console.warn("No se pudo enviar al backend:", err);
  }

  renderComentarios();
  e.target.reset();
});

function renderComentarios() {
  const lista = document.getElementById("lista-publicados");
  if (!lista) return;
  let arr = [];
  try { arr = JSON.parse(localStorage.getItem("comentariosPublicados") || "[]"); } catch {}
  const articulo = document.body.dataset.articuloId || "articulo-sin-id";
  const publicados = arr.filter(c => c.articulo === articulo).sort((a,b)=>new Date(b.fecha)-new Date(a.fecha));
  lista.innerHTML = publicados.length ? publicados.map(c => `
    <li>
      <div class="comentario-meta"><strong>${escapeHtml(c.nombre)}</strong> (${new Date(c.fecha).toLocaleString()})</div>
      <div class="comentario-texto">${escapeHtml(c.comentario)}</div>
    </li>
  `).join('') : '<li class="sin-comentarios">Sé el primero en comentar.</li>';
}

function escapeHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;'); }

document.addEventListener("DOMContentLoaded", renderComentarios);

