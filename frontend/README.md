# ERP Frontend

Este proyecto es el frontend de un sistema ERP desarrollado en React y Vite, utilizando Material UI para la interfaz y React Router para la navegación.  
Incluye un layout responsivo con sidebar (Drawer), AppBar, y manejo de rutas anidadas.

---

## Características principales

- ⚡️ **React + Vite** para desarrollo rápido y moderno.
- 🎨 **Material UI** para componentes visuales y diseño responsivo.
- 🧭 **React Router v6** para navegación y rutas anidadas.
- 🗂️ **Context API** para manejo global del estado del Drawer (sidebar).
- 💡 **Animaciones suaves** y transiciones en el layout.
- 📱 **Totalmente responsivo**: experiencia optimizada para escritorio y móvil.

---

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/erp-frontend.git
   cd erp-frontend/frontend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

---

## Estructura del proyecto

```
src/
├── components/
│   └── constants/layout.js      # Constantes de layout (Drawer, AppBar, animaciones)
├── pages/
│   ├── context/DrawerContext.jsx # Contexto global para el Drawer
│   ├── layout/AppLayout.jsx      # Layout principal (AppBar + Drawer + contenido)
│   ├── NewAppBar.jsx             # Barra superior de navegación
│   └── stock/StockActual.jsx     # Ejemplo de página de contenido
├── hooks/
│   └── routes.jsx                # Definición de rutas y títulos de página
├── App.css
├── index.css
└── main.jsx
```

---

## Uso y personalización

- Modifica las constantes en `src/components/constants/layout.js` para ajustar tamaños y animaciones.
- Agrega nuevas páginas en `src/pages/` y rutas en `src/hooks/routes.jsx`.
- Personaliza el diseño global en `App.css` e `index.css`.

---

## Créditos

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Material UI](https://mui.com/)
- [React Router](https://reactrouter.com/)

---

## Notas

 Infotrmation: `DOCUMENTATION.txt`.
