# CODE Jalisco - Sprint 2

Sitio web institucional para el Centro de Desarrollo Deportivo de Jalisco.

## Sprint 2: Páginas principales

Este es el resultado del segundo sprint (03/03/2026 - 16/03/2026) del proyecto.

### Funcionalidades implementadas

**Del Sprint 1:**
- ✅ Proyecto React + Vite configurado
- ✅ Tailwind CSS implementado con paleta personalizada
- ✅ React Router configurado
- ✅ Componente Encabezado (Header) con navegación responsive
- ✅ Componente PieDePagina (Footer) con información de contacto
- ✅ Componente Diseno (Layout) para estructura de páginas
- ✅ Página de Inicio con hero section y características

**Nuevas del Sprint 2:**
- ✅ Página Sobre Nosotros con historia, misión, visión y valores
- ✅ Timeline de historia institucional
- ✅ Sección de equipo directivo
- ✅ Página Programas con sistema de tabs interactivos
- ✅ Programas académicos y deportivos detallados
- ✅ Página Calendario con eventos institucionales
- ✅ Filtros de eventos por categoría
- ✅ Página Atletas con perfiles destacados
- ✅ Filtros de atletas por deporte
- ✅ Navegación completa entre 5 páginas funcionales

### Tecnologías utilizadas

- React 18.3.1
- Vite 7.1.7
- Tailwind CSS 3.4.18
- React Router DOM 7.9.5
- React Icons 5.5.0

### Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build
```

### Estructura del proyecto

```
code-jalisco-sprint2/
├── src/
│   ├── components/
│   │   ├── Encabezado.jsx
│   │   ├── PieDePagina.jsx
│   │   └── Diseno.jsx
│   ├── pages/
│   │   ├── Inicio.jsx
│   │   ├── SobreNosotros.jsx      (NUEVO)
│   │   ├── Programas.jsx          (NUEVO)
│   │   ├── Calendario.jsx         (NUEVO)
│   │   └── Atletas.jsx            (NUEVO)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

### Características destacadas del Sprint 2

**Sistema de tabs en Programas:**
- Tabs interactivos para alternar entre programas académicos y deportivos
- Diseño responsive con indicador visual de tab activo

**Filtros en Calendario:**
- Filtro por categoría: Todos, Académico, Deportivo, Social
- Actualización dinámica de eventos mostrados

**Filtros en Atletas:**
- Filtro por deporte: Todos, Fútbol, Básquetbol, Atletismo, Natación, Voleibol
- Grid responsive de tarjetas de atletas

**Timeline en Sobre Nosotros:**
- Línea de tiempo visual de la historia institucional
- Diseño alternado para mejor legibilidad

### Próximos pasos (Sprint 3)

- Página Admisiones con proceso de inscripción
- Página Contacto con formulario funcional
- Validación de formularios
- Animaciones y transiciones avanzadas

---

**Equipo de desarrollo:**
- Héctor Armando Salazar Andrade
- Sergio Iván Nápoles Chávez
- José David Custodio Vega

**Sprint:** 2 de 4
**Fecha:** Marzo 2026

