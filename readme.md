# Laboratorio de Github actions.

Este laboratorio está diseñado para trabajar con Github actions creando workflows para despliegue

## Tareas a realizar
1. Crear el primer workflow de github
2. Configurar el apartado de github pages
3. Configurar Workflow permissions
4. Ejecutar las pruebas unitarias
5. Desplegar el sitio en github pages

## Prerrequisitos

- [Node.js](https://nodejs.org/) (v20 o superior)
- [npm](https://www.npmjs.com/) (v10 o superior)

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/...
   ```
2.	Navega al directorio del proyecto:
    ```bash
    cd taller-html-css-jest
    ```
3.	Instala las dependencias del proyecto:
    ```bash
    npm install
    ```
## Estructura del Proyecto

- `index.html` - Lista de Pokemones
- `form.html` - Formulario para ingresar nuevos Pokemones
- `styles.css` - Archivo CSS para estilizar las vistas
- `tests/`
  - `list.test.js` - Pruebas unitarias para `index.html`
  - `form.test.js` - Pruebas unitarias para `form.html`
- `package.json` - Archivo de configuración de npm
- `jest.config.js` - Configuración de Jest

## Ejecutar las Pruebas

Para ejecutar las pruebas, usa el siguiente comando:

```bash
npm test
```

Para ejecutar una por una las pruebas ejecuta:
```bash
npm test tests/01-list.test.js
```
```bash
npm test tests/02-form.test.js
```