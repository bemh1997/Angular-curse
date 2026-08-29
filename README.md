# Angular Course - TypeScript Fundamentals

Repositorio del **Curso de Angular** enfocado en fundamentos sólidos de TypeScript. Este proyecto contiene ejemplos prácticos, ejercicios y proyectos del curso de Angular moderno.

## 📚 Descripción del Proyecto

Este repositorio es una guía completa para aprender Angular desde cero, comenzando con los fundamentos esenciales de TypeScript. Incluye módulos temáticos con código fuente, ejemplos interactivos y prácticas recomendadas para desarrollo profesional.

**Estado Actual:** 🔵 Sección 3 - Bases de TypeScript (21/21 lecciones completadas)

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
│   ├── tsconfig.json
│   ├── index.html
│   └── pnpm-lock.yaml
├── .vscode/                     # Configuración de VSCode
│   └── settings.json
└── .gitignore

```

## 📚 Progreso del Curso

### ✅ Secciones Completadas

- [x] **Sección 1:** Introducción a Angular
- [x] **Sección 2:** Fundamentos de JavaScript/TypeScript
- [x] **Sección 3:** Bases de TypeScript - Recomendado (21/21 lecciones | 2h 27 min)

### 🔄 Próximas Secciones

- [ ] **Sección 4:** Temas Avanzados de TypeScript
- [ ] **Sección 5:** Angular Essentials
- [ ] **Sección 6+:** Componentes, Servicios, Routing y más

### 🔧 Conceptos Implementados - Sección 3

En la Sección 3 se cubren los siguientes temas fundamentales:

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

## 🚀 Requisitos Previos

- **Node.js** >= 18.x
- **pnpm** (package manager recomendado)

  ```bash
  npm install -g pnpm
  ```

- **TypeScript** >= 5.x
- **Editor recomendado:** VSCode con extensión "TypeScript Vue Plugin"

## 📥 Instalación

### Clonar el repositorio

```bash
git clone https://github.com/bemh1997/Angular-curse.git
cd Angular-curse
```

### Instalar dependencias del módulo 01-typescript-intro

```bash
cd 01-typescript-intro
pnpm install
```

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
let edad: number = 27;
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
- Configuración de **VSCode** incluida para consistencia de equipo
- `.gitignore` excluye `node_modules`, `dist/` y archivos locales

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

**Última actualización:** Agosto 2026  
**Última rama activa:** `feature/typeScriptModulo1`  
**Estado:** 🔵 En desarrollo - Sección 3 completa
