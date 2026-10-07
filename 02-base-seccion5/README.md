# 02-base-seccion5 — Sección 5: Angular Essentials

Continuación del curso en la **Sección 5**: se agrega navegación entre páginas y una nueva vista con listas dinámicas y estilos condicionales.

## 📌 Contenido de este módulo

- **`components/shared/navbar`** — barra de navegación con `RouterLink` y `RouterLinkActive` (usa `exact: true` en la ruta raíz para que no quede siempre activa).
- **`pages/counter`** y **`pages/hero`** — se mantienen igual que en `02-base`.
- **`pages/dragonball`** (nuevo) — listado de personajes (`signal<Character[]>`), renderizado con el nuevo control de flujo `@for` (`track`, `$index`), clases condicionales con `[class.x]` según el poder del personaje, y un formulario de alta (aún sin lógica de guardado).
- **Routing** — se agrega la ruta `dragonball` y una ruta comodín `**` que redirige a `''`.
- **Estilos** — Bootstrap 5.3 (CDN), clases utilitarias (`row`, `col-12 col-sm-6`, `form-control`, `btn btn-primary`).

## 🧠 Conceptos cubiertos

- Componentes anidados y navegación (`app-navbar`)
- `RouterLink`, `RouterLinkActive`, rutas comodín (`**`)
- Signals con arreglos de objetos (`signal<Character[]>`)
- Nuevo control de flujo `@for` con `track` e `$index`
- Class binding condicional (`[class.nombre]`)

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
