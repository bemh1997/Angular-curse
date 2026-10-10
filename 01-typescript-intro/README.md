# Introducción a TypeScript — Sección 3

Módulo de fundamentos de TypeScript con ejemplos ejecutables organizados en `src/topics/`.

## Temas estudiados

- **Tipos primitivos y especiales:** `string`, `number`, `boolean`, `any`, `unknown` y `never`.
- **Objetos e interfaces:** tipado de estructuras y contratos.
- **Arreglos y tuplas:** colecciones con tipos definidos.
- **Funciones:** parámetros, valores de retorno y funciones flecha.
- **Destructuring:** extracción de datos de objetos, arreglos y parámetros.
- **Módulos ES:** organización del código con `import` y `export`.
- **Clases:** propiedades, métodos, constructores y herencia.
- **Genéricos:** tipos reutilizables y restricciones.
- **Decoradores:** conceptos y ejemplos de decoradores.
- **Optional chaining:** acceso seguro a propiedades opcionales.

Los ejemplos se muestran desde `src/main.ts`; cada tema está explicado en su archivo dentro de `src/topics/`.

## Ejecutar y compilar

Requiere Node.js y pnpm. Desde esta carpeta:

```bash
pnpm install
pnpm dev
```

Vite inicia el servidor de desarrollo. Para validar la compilación de TypeScript y generar la versión de producción:

```bash
pnpm build
```
