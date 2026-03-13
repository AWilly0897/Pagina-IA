# Pagina-IA

Proyecto educativo y laboratorio mínimo para aprender a integrar IA con fundamentos web.

## Estructura del proyecto
Pagina-IA/ ├─ index.html ├─ articulos/ │ ├─ articulo1.html │ ├─ articulo2.html │ ├─ articulo3.html │ └─ ... articulo10.html ├─ componentes/ │ ├─ formulario-comentario.html │ └─ footer.html ├─ css/ │ ├─ estilo.css │ └─ formulario.css ├─ js/ │ ├─ script.js │ └─ comentario.js └─ README.md

## Requisitos mínimos
- Navegador moderno.
- Node.js (opcional) o Python 3 para servidor local.
- Git si querés versionar y subir a GitHub.

## Ejecutar localmente (pasos rápidos)
1. Clonar el repositorio:
   ```bash
   git clone <URL-del-repo>
   cd Pagina-IA
2.	Levantar servidor HTTP (opciones): 
o	Python 3: 
o	python -m http.server 8000
o	Node: 
o	npx http-server . -p 8000
3.	Abrir en el navegador: 
4.	http://localhost:8000
Qué verificar
•	DevTools → Network: componentes/formulario-comentario.html y componentes/footer.html deben devolver 200.
•	DevTools → Console: no debe aparecer Failed to fetch.
•	Application → Local Storage: la clave comentariosPublicados se crea al enviar un comentario.
Cómo contribuir
1.	Crear una rama: 
2.	git checkout -b mejora-mi-articulo
3.	Hacer cambios y commitear: 
4.	git add .
5.	git commit -m "Mejora: descripción del cambio"
6.	git push origin mejora-mi-articulo
7.	Abrir Pull Request en GitHub.
Notas
•	No abrir archivos con doble clic (evitar file://).
•	Los comentarios se guardan en localStorage para la demo; el backend es opcional.

---

### Instrucciones finales rápidas
- **Pegar** cada bloque en su archivo correspondiente respetando rutas.  
- **Levantar** servidor local y abrir `http://localhost:8000` para probar.  
- **Verificar** Network y Console en DevTools; si algo devuelve 404, corregir la ruta relativa.  
