### README.md

```markdown
# Pensamiento-Abierto-Tercera-Edición

Proyecto educativo y laboratorio mínimo para aprender a integrar IA con fundamentos web.

## Estructura del proyecto
```
Pensamiento-Abierto-Tercera-Edición/
├─ index.html
├─ articulos/
│  ├─ articulo1.html
│  ├─ articulo2.html
│  ├─ articulo3.html
│  └─ ... articulo10.html
├─ componentes/
│  ├─ formulario-comentario.html
│  └─ footer.html
├─ css/
│  ├─ estilo.css
│  └─ formulario.css
├─ js/
│  ├─ script.js
│  └─ comentario.js
└─ README.md
```

## Requisitos mínimos
- Navegador moderno.
- Node.js (opcional) o Python 3 para servidor local.
- Git si querés versionar y subir a GitHub.

## Ejecutar localmente (pasos rápidos)
1. Clonar el repositorio:
   ```bash
   git clone <URL-del-repo>
   cd Pensamiento-Abierto-Tercera-Edición
   ```
2. Levantar servidor HTTP (opciones):
   - Python 3:
     ```bash
     python -m http.server 8000
     ```
   - Node:
     ```bash
     npx http-server . -p 8000
     ```
3. Abrir en el navegador:
   ```
   http://localhost:8000
   ```

## Qué verificar
- DevTools → Network: `componentes/formulario-comentario.html` y `componentes/footer.html` deben devolver 200.
- DevTools → Console: no debe aparecer `Failed to fetch`.
- Application → Local Storage: la clave `comentariosPublicados` se crea al enviar un comentario.

## Cómo contribuir
1. Crear una rama:
   ```bash
   git checkout -b mejora-mi-articulo
   ```
2. Hacer cambios y commitear:
   ```bash
   git add .
   git commit -m "Mejora: descripción del cambio"
   git push origin mejora-mi-articulo
   ```
3. Abrir Pull Request en GitHub.

## Notas
- No abrir archivos con doble clic (evitar `file://`).
- Los comentarios se guardan en `localStorage` para la demo; el backend es opcional.
```

---

### Instrucciones finales rápidas
- **Pegar** cada bloque en su archivo correspondiente respetando rutas.  
- **Levantar** servidor local y abrir `http://localhost:8000` para probar.  
- **Verificar** Network y Console en DevTools; si algo devuelve 404, corregir la ruta relativa.  

Si querés, continúo generando los artículos 4–10 con contenido didáctico y ejercicios prácticos listos para pegar. ¿Los genero ahora?
