# Angular Course - TypeScript Fundamentals

Repositorio del **Curso de Angular** enfocado en fundamentos sólidos de TypeScript. Este proyecto contiene ejemplos prácticos, ejercicios y proyectos del curso de Angular moderno.

## 📚 Descripción del Proyecto

Este repositorio es una guía completa para aprender Angular desde cero, comenzando con los fundamentos esenciales de TypeScript. Incluye módulos temáticos con código fuente, ejemplos interactivos y prácticas recomendadas para desarrollo profesional.

**Estado actual:** Las secciones 4 a 8 están organizadas como ramas de sus aplicaciones. La aplicación de la Sección 9 está en desarrollo.

## 📂 Estructura del Proyecto

```bash
Angular-curse/
├── 01-typescript-intro/          # Fundamentos de TypeScript
├── 02-base/                      # Submódulo: Angular Essentials
├── 03-gifs-app/                  # Submódulo: GifsApp
├── 04-country-app/               # Submódulo: CountryApp
└── .gitignore
```

Las aplicaciones Angular viven en repositorios independientes y se incluyen aquí como submódulos. Cada sección tiene una rama propia y `master` apunta a la versión final más reciente de la aplicación:

| Submódulo | Repositorio | Ramas de sección | `master` |
| --- | --- | --- | --- |
| [`02-base/`](./02-base/) | [base-app](https://github.com/bemh1997/base-app) | `seccion4`, `seccion5` | Sección 5 |
| [`03-gifs-app/`](./03-gifs-app/) | [gifs-app](https://github.com/bemh1997/gifs-app) | `seccion6`, `seccion7`, `seccion8` | Sección 8 |
| [`04-country-app/`](./04-country-app/) | [country-app](https://github.com/bemh1997/country-app) | `seccion9` | Sección 9 |

Para trabajar con una etapa anterior, cambia a su rama dentro del submódulo correspondiente. La carpeta `01-typescript-intro/` permanece independiente y no forma parte de estos submódulos.

## 📚 Progreso del Curso

### ✅ Secciones Completadas

- [x] **Sección 1:** Introducción a Angular
- [x] **Sección 2:** Fundamentos de JavaScript/TypeScript
- [x] **Sección 3:** Bases de TypeScript - Recomendado (21/21 lecciones | 2h 27 min)  — ver `01-typescript-intro/`
- [x] **Sección 4:** Angular Essentials (Componentes, Signals, Routing) — rama [`seccion4`](https://github.com/bemh1997/base-app/tree/seccion4) de [`02-base/`](./02-base/)
- [x] **Sección 5:** Angular Essentials (navbar, routing y DragonBall) — rama [`seccion5`](https://github.com/bemh1997/base-app/tree/seccion5) de [`02-base/`](./02-base/)
- [x] **Sección 6:** GifsApp: estructura y fundamentos del dashboard — rama [`seccion6`](https://github.com/bemh1997/gifs-app/tree/seccion6) de [`03-gifs-app/`](./03-gifs-app/)
- [x] **Sección 7:** Consumo y gestión de GIFs desde una API — rama [`seccion7`](https://github.com/bemh1997/gifs-app/tree/seccion7) de [`03-gifs-app/`](./03-gifs-app/)
- [x] **Sección 8 (opcional):** GifsApp intermedio/avanzado — rama [`seccion8`](https://github.com/bemh1997/gifs-app/tree/seccion8) de [`03-gifs-app/`](./03-gifs-app/)

### 🔄 Siguiente Sección
- [ ] **Sección 9:** Routing por features y construcción de la aplicación que se hará funcionar en las siguientes etapas.

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

En la Sección 4 se cubren los siguientes temas fundamentales (código en [`02-base/`](./02-base/), rama `seccion4`):

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

En la Sección 5 se cubren los siguientes temas fundamentales (código en [`02-base/`](./02-base/), rama `seccion5`):

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

La Sección 6 preparó las bases de un dashboard administrativo para GifsApp, con rutas y componentes organizados (código en [`03-gifs-app/`](./03-gifs-app/), rama `seccion6`). Las páginas de tendencias y búsqueda son la estructura inicial; la integración con la API se implementó en la Sección 7.

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

La Sección 7 completa GifsApp conectándola con la API de Giphy para mostrar tendencias, buscar GIFs y conservar el historial (código en [`03-gifs-app/`](./03-gifs-app/), rama `seccion7`).

- **Peticiones HTTP** con `HttpClient` para tendencias y búsqueda de GIFs
- **Interfaces y mapeo** de respuestas de Giphy al modelo de GIF de la aplicación
- **Estado reactivo** con Signals para tendencias, carga e historial
- **Búsqueda y consulta de historial** con componentes reutilizables
- **Rutas dinámicas** y lectura de parámetros de ruta con `toSignal`
- **Persistencia del historial** de búsquedas en LocalStorage
- **Configuración de la clave de Giphy** mediante `.env` local, sin subirla al repositorio

### 🔧 Conceptos Implementados - Sección 8 (opcional)

Esta sección profundiza en la experiencia de GifsApp (código en [`03-gifs-app/`](./03-gifs-app/), rama `seccion8`):

- **Preservación del scroll** al salir y regresar a tendencias
- **Carga incremental** de GIFs al acercarse al final de la lista
- **Diseño tipo masonry** organizando los GIFs en columnas
- **Depuración** con `debugger` y las herramientas de desarrollo del navegador

### 🚧 Sección 9

En esta sección aprenderemos y reforzaremos los siguientes temas. El objetivo es armar la aplicación que luego haremos funcionar:

- **Rutas hijas**
- **Rutas anidadas**
- **Creación y comunicación entre componentes**
- **Tailwind CSS y DaisyUI**
- **Archivo de rutas por feature o módulo**
- **Carga perezosa de módulos de rutas**

## 🚀 Requisitos Previos

- **Node.js** >= 18.x
- **pnpm** (package manager recomendado)

  ```bash
  npm install -g pnpm
  ```

- **TypeScript** >= 5.x
- **Editor recomendado:** VS Code con Angular Language Service

## 📥 Instalación

### Clonar el repositorio y sus submódulos

```bash
git clone --recurse-submodules https://github.com/bemh1997/Angular-curse.git
cd Angular-curse
```

Si ya clonaste el repositorio sin `--recurse-submodules`, inicializa las aplicaciones con:

```bash
git submodule update --init --recursive
```

### Instalar dependencias de cada módulo

```bash
cd 01-typescript-intro
pnpm install

cd ../02-base
pnpm install

cd ../03-gifs-app
pnpm install

cd ../04-country-app
pnpm install
```

Las ramas de sección son distintas etapas de la misma aplicación. Para revisar una rama anterior, cámbiala dentro del submódulo, por ejemplo: `git -C 03-gifs-app switch seccion7`. Para volver a la versión final, usa `git -C 03-gifs-app switch master`.

Para ejecutar GifsApp, configura `GIPHY_API_KEY` en el archivo `.env` de `03-gifs-app/`, usando `.env.example` como plantilla.

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
- **Estado:** Secciones 4 a 8 disponibles en sus ramas; Sección 9 en desarrollo.
