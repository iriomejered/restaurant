# Menú de Restaurante (React + fetch)

Pequeña aplicación en React que muestra un menú de restaurante consumiendo la API pública de TheMealDB. Los precios se generan aleatoriamente (la API no incluye precios).

## Características
- Páginas: Inicio, Desayunos, Almuerzos, Cenas.
- Detalle de plato con URL dinámica `/meals/:id`.
- Datos cargados con fetch y gestionados con useEffect.
- Estados de carga y manejo de errores.
- Grid responsivo de tarjetas con imagen → nombre → categoría → precio.
- Navegación con react-router-dom.

## API
Se usa TheMealDB:
- Búsqueda general: `https://www.themealdb.com/api/json/v1/1/search.php?s=`

## Estructura (resumen)
- src/
  - main.jsx
  - App.jsx
  - index.css
  - components/
    - NavBar.jsx
    - MenuList.jsx
    - MenuItem.jsx
  - pages/
    - HomePage.jsx
    - DesayunosPage.jsx
    - AlmuerzosPage.jsx
    - CenasPage.jsx
    - MealPage.jsx
  - utils/price.js

## Requisitos
- Node.js
- npm

## Instalación y ejecución (Windows)
Abre una terminal en la carpeta del proyecto (ej.: `f:\vs\restaurante\restaurant`) y ejecuta:

```powershell
npm install
npm run dev
```

Abre el navegador en la URL que muestre Vite (por defecto: http://localhost:5173/).


## Rutas disponibles
- `/` — Inicio (lista completa)
- `/desayunos` — Desayunos
- `/almuerzos` — Almuerzos
- `/cenas` — Cenas

## Capturas de pantalla

![Desayunos](./public/desayunos.png)
![Almuerzos](./public/almuerzos.png)
![Cenas](./public/cenas.png)

## Notas
- Los precios son generados aleatoriamente en `src/utils/price.js`.