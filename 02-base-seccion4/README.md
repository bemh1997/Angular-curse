# 02-base-seccion4 — Sección 4: Angular Essentials

Módulo práctico del **Curso de Angular**: proyecto generado con Angular CLI (v19.2.27) para trabajar los fundamentos de Angular standalone — componentes, signals, computed, routing básico y pipes.

## 📌 Contenido de este módulo

- **`pages/counter`** — contador con propiedad clásica (`counter`) y con `signal()`, usando `.update()` para mutar el estado. Botones +1 / -1 / Reset. Componente con `ChangeDetectionStrategy.OnPush`.
- **`pages/hero`** — uso de `signal()` y `computed()` para derivar datos (`heroDescription`, `capitalizedName`), pipe `UpperCasePipe`, botones que cambian el estado del héroe.
- **Routing** — rutas declaradas en `app.routes.ts` (`/` → Counter, `/hero` → Hero) con `provideRouter`.
- **Estilos** — Bootstrap 5.3 cargado por CDN en `src/index.html`.

## 🧠 Conceptos cubiertos

- Standalone components
- Signals (`signal`, `computed`, `.set()`, `.update()`)
- `ChangeDetectionStrategy.OnPush`
- Angular Router (rutas básicas)
- Pipes (`UpperCasePipe`)

---

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.27.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
