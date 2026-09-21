# Bono Angular — Conversor de color hexadecimal

Bono de ISIS-2211 (Ingeniería de Software Moderna, Uniandes): un conversor de color hexadecimal a
RGB y a escala de grises, hecho con 3 tipos de componentes que se comunican mediante un servicio
compartido, sin `@Input`/`@Output`.

## Componentes

| Tipo del enunciado | Componente | Qué hace |
| --- | --- | --- |
| A | `ColorInput` (`app-color-input`) | Formulario Reactive Forms con un campo de texto para el hex y un botón de submit. Se mantiene sincronizado con el servicio también cuando el cambio viene de un canal RGB. |
| B (x3) | `ColorChannel` (`app-color-channel`) | Etiqueta (`R`, `G`, `B`) + campo numérico editable para ese canal. Al cambiarlo, escribe de vuelta en el servicio. |
| C | `ColorPreview` (`app-color-preview`) | Muestra dos cajas de color: el color original y su versión en escala de grises. |

## Cómo se conectan

`ColorService` (`providedIn: 'root'`) guarda el hex en un `signal` y deriva `r`, `g`, `b`, `gris` y
`hexGris` con `computed()`, además de exponer `establecerHex()` y `establecerCanal(canal, valor)`
para escribir desde cualquier lado. Ninguno de los tres tipos de componente conoce a los otros:

- `ColorInput` inyecta el servicio, llama `establecerHex()` al hacer submit, y con un `effect()`
  (tal como se enseña en Angular Signals) mantiene su propio campo sincronizado cada vez que el hex
  del servicio cambia por otra vía (por ejemplo, al editar un canal RGB).
- Cada `ColorChannel` inyecta el servicio directamente, lee su canal con un `computed()` y escribe
  con `establecerCanal()` al cambiar su campo — así una edición en R/G/B se refleja también arriba y
  en las cajas de color, como pide la rúbrica del bono.
- `App` (el componente raíz) inyecta el mismo servicio y le pasa sus signals a `ColorPreview` con
  `input()`.

Este es el mismo patrón que enseña el curso para sincronizar componentes que no se conocen entre sí
(servicio `providedIn: 'root'` + signals + `computed()`), visto en:

- `temas/frontend/Angular Signals.md` — ejemplo `CounterService`/`ControlsComponent`/`DisplayComponent`.
- `talleres/Tutorial_ Compartir datos entre componentes con un servicio.md` — `ArtistCreate` y
  `ArtistList`, "hermanos", sin `@Input`/`@Output`.
- `temas/frontend/Angular.md` — tabla de mecanismos de comunicación y el ejemplo de `input()` con
  `AlbumCardComponent` repetido con distintos valores.
- `temas/frontend/Formularios Reactivos.md` y `talleres/Tutorial_ Crear un artista desde el front.md`
  — patrón de `FormGroup`/`FormControl`/`Validators` usado en `ColorInput`.

**Fuera del material del curso, dicho explícitamente:**

- El binding `[style.background-color]` para pintar las cajas de color (extensión del property
  binding `[propiedad]="valor"` que sí enseña el curso, pero con el prefijo `style.` no aparece
  literal en los talleres/temas).
- La conversión hex↔RGB↔gris (`parseInt`, `toString(16)`, `padStart`) es JavaScript/TypeScript
  estándar, no algo enseñado puntualmente en el curso.
- `ColorChannel.actualizar()` lee el valor del `<input>` con `(evento.target as HTMLInputElement).value`
  en vez de Reactive Forms: para un solo campo numérico por instancia, armar un `FormGroup` completo
  era más aparato del que pedía el problema. Es la forma mínima de leer un `<input>` nativo sin
  `ngModel` ni Reactive Forms; no aparece así, literal, en el material.
- `colorForm.controls.hex.setValue(...)` dentro del `effect()` de `ColorInput`: el curso usa
  `.reset()` y `.getRawValue()` sobre un `FormGroup`, pero no muestra `setValue()` puntualmente —
  es la contraparte natural para escribir un valor nuevo en un control ya creado.

---

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.6.

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

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

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
