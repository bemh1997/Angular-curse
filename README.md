# Angular Course - TypeScript Fundamentals

Repositorio del **Curso de Angular** enfocado en fundamentos sólidos de TypeScript. Este proyecto contiene ejemplos prácticos, ejercicios y proyectos del curso de Angular moderno.

## 📚 Descripción del Proyecto

Este repositorio es una guía completa para aprender Angular desde cero, comenzando con los fundamentos esenciales de TypeScript. Incluye módulos temáticos con código fuente, ejemplos interactivos y prácticas recomendadas para desarrollo profesional.

**Estado actual:** Secciones 6 y 7 completadas. La Sección 8 es opcional y profundiza en scroll, diseño masonry y depuración.

## 📂 Estructura del Proyecto

```bash
Angular-curse/
├── 01-typescript-intro/          # Módulo introductorio de TypeScript
│   ├── src/
│   │   ├── main.ts              # Punto de entrada
│   │   ├── style.css            # Estilos
│   │   └── topics/              # Temas cubiertos
│   │       ├── 01-basic-types.ts
│   │       ├── 02-object-interface.ts
│   │       ├── 03-functions.ts
│   │       ├── 04-homework-types.ts
│   │       ├── 05-basic-destructuring.ts
│   │       ├── 06-function-destructuring.ts
│   │       ├── 07-imports-exports.ts
│   │       ├── 08-classes.ts
│   │       ├── 09-generics.ts
│   │       ├── 10-decorators.ts
│   │       └── 11-optional-chaining.ts
│   ├── package.json
│   ├── README.md
│   ├── tsconfig.json
│   ├── index.html
│   └── pnpm-lock.yaml
├── 02-base-seccion4/             # Sección 4 - componentes, signals y routing
│   ├── src/
│   │   ├── app/
│   │   │   ├── app.routes.ts     # Rutas: '' -> Counter, 'hero' -> Hero
│   │   │   └── pages/
│   │   │       ├── counter/      # Signals básicas (signal, update)
│   │   │       └── hero/         # computed() y pipes
│   │   └── index.html            # Bootstrap 5.3 (CDN)
│   ├── package.json
│   └── README.md
├── 02-base-seccion5/             # Sección 5 - navegación, componentes y DragonBall
│   ├── src/
│   │   ├── app/
│   │   │   ├── app.routes.ts     # + ruta 'dragonball' y wildcard '**'
│   │   │   ├── components/shared/navbar/  # RouterLink, RouterLinkActive
│   │   │   └── pages/
│   │   │       ├── counter/
│   │   │       ├── hero/
│   │   │       └── dragonball/   # signal<Character[]>, @for, class binding
│   │   └── index.html
│   ├── package.json
│   └── README.md
├── 03-gifs-app-seccion6/          # GifsApp: estructura inicial y dashboard
├── 03-gifs-app-seccion7/          # El mismo GifsApp: API de Giphy, búsqueda e historial
├── 03-gifs-app-seccion8/          # Próxima etapa; se creará al iniciar la sección 8
└── .gitignore
```

Las carpetas de GifsApp son **versiones por etapa del mismo proyecto**, no tres aplicaciones distintas. Se mantienen separadas para poder comparar qué conceptos y cambios se incorporaron en cada sección. La sección 8 continuará desde la versión de la sección 7.

En cada versión encontrarás la misma estructura base: `src/app/` para rutas, páginas y componentes; `src/environments/` para la configuración; además de `package.json` y el README de esa etapa.

## 📚 Progreso del Curso

### ✅ Secciones Completadas

- [x] **Sección 1:** Introducción a Angular
- [x] **Sección 2:** Fundamentos de JavaScript/TypeScript
- [x] **Sección 3:** Bases de TypeScript - Recomendado (21/21 lecciones | 2h 27 min)  — ver `01-typescript-intro/`
- [x] **Sección 4:** Angular Essentials (Componentes, Signals, Routing) — ver `02-base-seccion4/`
- [x] **Sección 5:** Angular Essentials (navbar, routing y DragonBall) — ver `02-base-seccion5/`
- [x] **Sección 6:** GifsApp: estructura y fundamentos del dashboard — ver [`03-gifs-app-seccion6/`](./03-gifs-app-seccion6/)
- [x] **Sección 7:** Consumo y gestión de GIFs desde una API — ver [`03-gifs-app-seccion7/`](./03-gifs-app-seccion7/)

### 🔄 Siguiente Sección
- [ ] **Sección 8 (opcional):** GifsApp intermedio/avanzado; continuar desde la versión de la sección 7.

### 🔧 Conceptos Implementados - Sección 3

En la Sección 3 se cubren los siguientes temas fundamentales (código en [`01-typescript-intro/`](./01-typescript-intro)):

- **Tipos Básicos:** `string`, `number`, `boolean`, `any`, `unknown`, `never`
- **Objetos e Interfaces:** Definición de contratos TypeScript, tipos personalizados
- **Arreglos y Tuplas:** Tipos de arreglos tipados, tuplas estructuradas
- **Funciones:** Parámetros tipados, tipos de retorno, funciones flecha
- **Destructuring:** Desestructuración de objetos y arreglos, parámetros desestructurados
- **ES6 Modules:** Imports/exports, módulos organizados
- **Clases:** Propiedades, métodos, constructores, herencia
- **Genéricos:** Tipos genéricos parametrizados, constraints
- **Decoradores:** Decoradores de clases y métodos
- **Optional Chaining:** Navegación segura de propiedades

### 🔧 Temas de la Sección 4

En la Sección 4 se cubren los siguientes temas fundamentales (código en [`02-base-seccion4/`](./02-base-seccion4)):

- **Componentes standalone** y estructura de una aplicación Angular
- **Propiedades y estado** local en componentes
- **Signals** con `signal()`, `.set()` y `.update()`
- **Estado derivado** con `computed()`
- **Change detection** con `ChangeDetectionStrategy.OnPush`
- **Routing básico** con `provideRouter`, rutas y `RouterOutlet`
- **Eventos y actualización de la vista** desde acciones del usuario
- **Pipes** como `UpperCasePipe`
- **Bootstrap 5.3** integrado desde CDN

### 🔧 Temas de la Sección 5

En la Sección 5 se cubren los siguientes temas fundamentales (código en [`02-base-seccion5/`](./02-base-seccion5)):

- **Navegación** con `RouterLink`, `RouterLinkActive` y rutas comodín
- **Control flow** con `@for` y `@if`, seguimiento de elementos con `track`
- **Class binding** condicional según los datos del personaje
- **Componentes reutilizables** para agregar y mostrar personajes
- **Comunicación entre componentes** con inputs y outputs de Angular
- **Estado con Signals** y servicio Angular con inyección de dependencias
- **Persistencia con LocalStorage** y efectos
- **Hash routing** con `HashLocationStrategy`
- **LinkedSignal** y despliegues como temas estudiados en la sección

### 🔧 Conceptos Implementados - Sección 6

La Sección 6 preparó las bases de un dashboard administrativo para GifsApp, con rutas y componentes organizados (código en [`03-gifs-app-seccion6/`](./03-gifs-app-seccion6)). Las páginas de tendencias y búsqueda son la estructura inicial; la integración con la API se implementó en la Sección 7.

- **Lazy loading de páginas** con `loadComponent`
- **Separación de rutas** por página y funcionalidad
- **Rutas hijas** dentro del dashboard
- **Router outlets anidados** para mostrar las páginas hijas
- **Variables de entorno de Angular**
- **Angular CLI** para generar, servir, compilar y probar la aplicación
- **Componentes reutilizables** para el menú y las listas de GIFs
- **Inputs como señales** (`input.required`)
- **Comunicación entre componentes** mediante propiedades de entrada
- **Signals** para exponer datos a la interfaz
- **Tailwind CSS** para estilos
- **Estructura inicial del dashboard de GifsApp**

### 🔧 Conceptos Implementados - Sección 7

La Sección 7 completa GifsApp conectándola con la API de Giphy para mostrar tendencias, buscar GIFs y conservar el historial (código en [`03-gifs-app-seccion7/`](./03-gifs-app-seccion7)).

- **Peticiones HTTP** con `HttpClient` para tendencias y búsqueda de GIFs
- **Interfaces y mapeo** de respuestas de Giphy al modelo de GIF de la aplicación
- **Estado reactivo** con Signals para tendencias, carga e historial
- **Búsqueda y consulta de historial** con componentes reutilizables
- **Rutas dinámicas** y lectura de parámetros de ruta con `toSignal`
- **Persistencia del historial** de búsquedas en LocalStorage
- **Configuración de la clave de Giphy** mediante `.env` local, sin subirla al repositorio

### 🚧 Sección 8

Esta sección es opcional, pero recomendada para quienes quieran profundizar un poco más en Angular. Puntualmente veremos:

- **Preservar el estado del scroll**
- **Hacer scroll infinito**
- **Diseño masonry**
- **Técnicas y herramientas para depurar**

## 🚀 Requisitos Previos

- **Node.js** >= 18.x
- **pnpm** (package manager recomendado)

  ```bash
  npm install -g pnpm
  ```

- **TypeScript** >= 5.x
- **Editor recomendado:** VS Code con Angular Language Service

## 📥 Instalación

### Clonar el repositorio

```bash
git clone https://github.com/bemh1997/Angular-curse.git
cd Angular-curse
```

### Instalar dependencias de cada módulo

```bash
cd 01-typescript-intro
pnpm install

cd ../02-base-seccion4
pnpm install

cd ../02-base-seccion5
pnpm install

cd ../03-gifs-app-seccion6
pnpm install

cd ../03-gifs-app-seccion7
pnpm install
```

Las carpetas `03-gifs-app-seccion6/` y `03-gifs-app-seccion7/` son etapas distintas del mismo proyecto; instala dependencias únicamente en la versión que quieras ejecutar.

Para ejecutar GifsApp, configura `GIPHY_API_KEY` en `03-gifs-app-seccion7/.env` siguiendo la plantilla `03-gifs-app-seccion7/.env.example`.

## 🛠️ Cómo Usar

### Ejecutar ejemplos en desarrollo

```bash
# Desde la carpeta 01-typescript-intro
pnpm dev
```

Esto inicia un servidor Vite en `http://localhost:5173` con hot-reload.

### Compilar TypeScript

```bash
# Compilar archivos TypeScript a JavaScript
pnpm build
```

### Estructura de los temas

Cada archivo en `src/topics/` contiene:

- **Teoría comentada:** Explicación de conceptos en comentarios
- **Ejemplos prácticos:** Código ejecutable demostrando cada característica
- **Ejercicios:** Tareas para practicar

**Ejemplo:** `src/topics/01-basic-types.ts`

```typescript
// Tipos básicos en TypeScript
let nombre: string = "Humberto";
let edad: number = 29;
let activo: boolean = true;

// Tipos por inferencia
let ciudad = "Mexico City"; // string (inferido)
```

## 🔗 Configuración de Proyecto

### TypeScript (`tsconfig.json`)

- **Modo estricto:** Habilitado para máxima seguridad de tipos
- **Target:** ES2020 (ES moderno)
- **Module:** ESNext (para Vite)

### Vite (`vite.config.ts`)

- Servidor dev con hot-reload
- Optimización de build automática
- Soporte nativo para TypeScript

## 📝 Notas Importantes

- Los archivos están codificados en **UTF-8**
- Se usa **pnpm** para determinismo en dependencias
- `.gitignore` excluye `node_modules`, `dist/` y configuraciones locales

## 📚 Recursos Adicionales

- [Documentación oficial de TypeScript](https://www.typescriptlang.org/)
- [Documentación de Vite](https://vitejs.dev/)
- [Angular Documentation](https://angular.io/docs)

## 👤 Autor

**Humberto Bernal**  
GitHub: [@bemh1997](https://github.com/bemh1997)

## 📄 Licencia

Este proyecto es de fines educativos. Consulta la licencia del curso para más detalles.

---

- **Última actualización:** Octubre 2026
- **Estado:** Secciones 6 y 7 completadas; Sección 8 en preparación.
