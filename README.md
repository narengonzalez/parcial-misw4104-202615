# Parcial Naren Gonzalez - MISW4104 - 202615 - ☕️ El aroma mágico

Aplicación Angular para mostrar las variedades de café disponibles en la tienda "El aroma mágico". Los datos se obtienen por HTTP desde un [JSON publicado en un gist](https://gist.githubusercontent.com/josejbocanegra/e9d24db370ce95b75555f7d1f8691805/raw/8a26ac2bca4183dc88545e14c45851d698911358/202212_MISW4104_Grupo3.json) y se presentan en una tabla de Bootstrap junto con el número de cafés por tipo (café de origen y blend).

Proyecto generado con [Angular CLI](https://github.com/angular/angular-cli) 22.2.6 usando `NgModule` (no standalone).

## Requisitos

- [Node.js](https://nodejs.org/) (LTS reciente; desarrollado con Node 22) y npm.
- Conexión a internet: la app consulta el gist y carga las fuentes desde Google Fonts.

## Cómo correr el proyecto

1. Instalar dependencias:

   ```bash
   npm install
   ```

2. Levantar el servidor de desarrollo:

   ```bash
   npm start
   ```

   (equivale a `ng serve`). Abrir `http://localhost:4200/`; la app recarga sola al cambiar el código.

3. Pruebas unitarias:

   ```bash
   npm test
   ```

4. Compilación de producción (genera `dist/ng-aroma-magico-parcial`):

   ```bash
   npm run build
   ```

## Estructura

```
src/app/
├── app-module.ts            # Módulo raíz (importa CafeModule, provee HttpClient)
├── app.ts / app.html / app.css   # Encabezado, banner, listado y pie de página
└── cafe/
    ├── cafe-module.ts       # Módulo de cafés
    ├── cafe.ts              # Clase Cafe
    ├── cafe-service.ts      # Servicio HTTP (CafeService.getCafes())
    └── cafe-list/           # Componente app-cafe-list (tabla, totales y su prueba)
```

## Actividades realizadas

| # | Actividad | Descripción |
|---|-----------|-------------|
| 1 | Proyecto base | Proyecto Angular con `NgModule` y routing. |
| 2 | Bootstrap | Instalación de `bootstrap` y registro de su CSS en `angular.json`. |
| 3 | Módulo de cafés | `CafeModule`, importado en `AppModule`. |
| 4 | Clase `Cafe` | Atributos: `id`, `nombre`, `tipo`, `region`, `sabor`, `altura`, `imagen`. |
| 5 | Servicio | `CafeService` con `HttpClient`; `provideHttpClient()` en `AppModule`. |
| 6 | Componente listar | `CafeList` (`app-cafe-list`) con tabla Bootstrap (#, nombre, tipo, región). `cafes` es un *signal*, ya que la app no usa `zone.js`. |
| 7 | Diseño | Encabezado, banner y pie de página según el mockup. |
| 8 | Totales | Párrafos "Total café de origen" y "Total café blend", calculados con `computed` a partir del listado. |
| 9 | Pruebas | Prueba de `CafeList` con 3 cafés: verifica 3 filas más el encabezado (4 `tr`), el contenido de las celdas y los totales. |

### Fuentes (Google Fonts)

- **Inder**: fuente base de la aplicación.
- **Inter**: tabla y totales.
- **Inria Sans**: pie de página.