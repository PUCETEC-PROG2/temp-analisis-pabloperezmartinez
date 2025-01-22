const fs = require('fs');
const path = require('path');
const assert = require('assert');

let html;

try {
  html = fs.readFileSync(path.resolve(__dirname, '../form.html'), 'utf8');
} catch (error) {
  throw new Error('El archivo form.html no se encontró. Asegúrate de que el archivo está en la ubicación correcta.');
}

describe('Formulario de Ingresar Pokémon', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  test('tiene un título <title> correcto', () => {
    const title = document.querySelector('title');
    assert(title !== null, 'Debe haber un título <title> en el archivo form.html');
    assert.strictEqual(title.textContent, 'Ingresar Pokémon', 'El título en <title> debe ser "Ingresar Pokémon"');
  });

  test('tiene un título <h1> correcto', () => {
    const title = document.querySelector('h1');
    assert(title !== null, 'Debe haber un título <h1> en el archivo form.html');
    assert.strictEqual(title.textContent, 'Ingresar Pokémon', 'El título en <h1> debe ser "Ingresar Pokémon"');
  });

  test('tiene un formulario con los campos correctos', () => {
    const form = document.getElementById('pokemon-form');
    assert(form !== null, 'Debe haber un formulario con el ID "pokemon-form" en el archivo form.html');

    const labelName = form.querySelector('label[for="pokemon-name"]');
    const inputName = form.querySelector('input#pokemon-name');
    assert(labelName !== null, 'Debe haber una etiqueta para el nombre del Pokémon');
    assert.strictEqual(labelName.textContent, 'Nombre del Pokémon:', 'El texto de la etiqueta del nombre debe ser "Nombre del Pokémon:"');
    assert(inputName !== null, 'Debe haber un campo de entrada para el nombre del Pokémon');
    assert.strictEqual(inputName.getAttribute('id'), 'pokemon-name', 'El ID del campo de entrada del nombre debe ser "pokemon-name"');

    const labelType = form.querySelector('label[for="pokemon-type"]');
    const selectType = form.querySelector('select#pokemon-type');
    assert(labelType !== null, 'Debe haber una etiqueta para el tipo del Pokémon');
    assert.strictEqual(labelType.textContent, 'Tipo del Pokémon:', 'El texto de la etiqueta del tipo debe ser "Tipo del Pokémon:"');
    assert(selectType !== null, 'Debe haber un campo de selección para el tipo del Pokémon');
    assert.strictEqual(selectType.getAttribute('id'), 'pokemon-type', 'El ID del campo de selección del tipo debe ser "pokemon-type"');

    const labelLevel = form.querySelector('label[for="pokemon-level"]');
    const inputLevel = form.querySelector('input#pokemon-level');
    assert(labelLevel !== null, 'Debe haber una etiqueta para el nivel del Pokémon');
    assert.strictEqual(labelLevel.textContent, 'Nivel del Pokémon:', 'El texto de la etiqueta del nivel debe ser "Nivel del Pokémon:"');
    assert(inputLevel !== null, 'Debe haber un campo de entrada para el nivel del Pokémon');
    assert.strictEqual(inputLevel.getAttribute('id'), 'pokemon-level', 'El ID del campo de entrada del nivel debe ser "pokemon-level"');

    const labelAttack = form.querySelector('label[for="pokemon-attack"]');
    const inputAttack = form.querySelector('input#pokemon-attack');
    assert(labelAttack !== null, 'Debe haber una etiqueta para el ataque del Pokémon');
    assert.strictEqual(labelAttack.textContent, 'Ataque del Pokémon:', 'El texto de la etiqueta del ataque debe ser "Ataque del Pokémon:"');
    assert(inputAttack !== null, 'Debe haber un campo de entrada para el ataque del Pokémon');
    assert.strictEqual(inputAttack.getAttribute('id'), 'pokemon-attack', 'El ID del campo de entrada del ataque debe ser "pokemon-attack"');

    const button = form.querySelector('button[type="submit"]');
    assert(button !== null, 'Debe haber un botón de envío en el formulario');
    assert.strictEqual(button.textContent, 'Agregar', 'El texto del botón de envío debe ser "Agregar"');
  });

  test('tiene un enlace a styles.css', () => {
    const link = document.querySelector('link[rel="stylesheet"]');
    assert(link !== null, 'Debe haber un enlace a un archivo CSS en el archivo index.html');
    assert.strictEqual(link.getAttribute('href'), 'styles.css', 'El enlace al archivo CSS debe ser "styles.css"');
  });
});