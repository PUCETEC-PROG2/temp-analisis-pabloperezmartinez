const fs = require('fs');
const path = require('path');
const assert = require('assert');

let html;

try {
  html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
} catch (error) {
  throw new Error('El archivo index.html no se encontró. Asegúrate de que el archivo está en la ubicación correcta.');
}

describe('Lista de Pokemones', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  test('tiene un título correcto', () => {
    const title = document.querySelector('h1');
    assert(title !== null, 'Debe haber un título en el archivo index.html');
    assert.strictEqual(title.textContent, 'Lista de Pokemones', 'El título debe ser "Lista de Pokemones"');
  });

  test('El archivo index.html tiene una lista de pokemones', () => {
    const list = document.getElementById('pokemon-list');
    assert(list !== null, 'Debe crear una lista con el ID "pokemon-list" en el archivo index.html');
    const items = list.querySelectorAll('li');
    assert.strictEqual(items.length, 3, 'La lista de pokemones debe contener 3 elementos');
  });

  test('Existe el primer pokemon, es Pikachu y tiene los detalles correctos', () => {
    const items = document.querySelectorAll('#pokemon-list li');
    const firstPokemon = items[0];
    assert.strictEqual(firstPokemon.querySelector('h2').textContent, 'Pikachu', 'El primer Pokémon debe ser Pikachu y debe estar en un subtítulo <h2>');
    assert.strictEqual(firstPokemon.querySelector('p:nth-child(2)').textContent, 'Tipo: Eléctrico', 'El tipo del primer Pokémon debe ser "Eléctrico". Tienes que poner esto dentro de un párrafp <p>');
    assert.strictEqual(firstPokemon.querySelector('p:nth-child(3)').textContent, 'Nivel: 35', 'El nivel del primer Pokémon debe ser de nivel 35. Tienes que poner esto dentro de un párrafo <p>');
    assert.strictEqual(firstPokemon.querySelector('p:nth-child(4)').textContent, 'Ataque: Impactrueno', 'El ataque del primer Pokémon debe ser "Impactrueno". Tienes que poner esto dentro de un párrafo <p>');
  });

  test('Existe el segundo pokemon, es Charmander y tiene los detalles correctos', () => {
    const items = document.querySelectorAll('#pokemon-list li');
    const firstPokemon = items[1];
    assert.strictEqual(firstPokemon.querySelector('h2').textContent, 'Charmander', 'El segundo debe ser Charmander y debe estar en un subtítulo <h2>');
    assert.strictEqual(firstPokemon.querySelector('p:nth-child(2)').textContent, 'Tipo: Fuego', 'El tipo del segundo Pokémon debe ser "Fuego". Tienes que poner esto dentro de un párrafo <p>');
    assert.strictEqual(firstPokemon.querySelector('p:nth-child(3)').textContent, 'Nivel: 30', 'El nivel del segundo Pokémon debe ser de nivel 30. Tienes que poner esto dentro de un párrafo <p>');
    assert.strictEqual(firstPokemon.querySelector('p:nth-child(4)').textContent, 'Ataque: Llamarada', 'El ataque del segundo Pokémon debe ser "Llamarada". Tienes que poner esto dentro de un párrafo <p>');
  });

  test('Existe el tercer pokemon, es Bulbasaur y tiene los detalles correctos', () => {
    const items = document.querySelectorAll('#pokemon-list li');
    const firstPokemon = items[2];
    assert.strictEqual(firstPokemon.querySelector('h2').textContent, 'Bulbasaur', 'El primer tercer debe ser Bulbasaur y debe estar en un subtítulo <h2>');
    assert.strictEqual(firstPokemon.querySelector('p:nth-child(2)').textContent, 'Tipo: Planta', 'El tipo del segundo Pokémon debe ser "Planta". Tienes que poner esto dentro de un párrafo <p>');
    assert.strictEqual(firstPokemon.querySelector('p:nth-child(3)').textContent, 'Nivel: 25', 'El nivel del tercer Pokémon debe ser de nivel 25. Tienes que poner esto dentro de un párrafo <p>');
    assert.strictEqual(firstPokemon.querySelector('p:nth-child(4)').textContent, 'Ataque: Latigazo', 'El ataque del tercer Pokémon debe ser "Latigazo". Tienes que poner esto dentro de un párrafo <p>');
  });

  test('tiene un enlace a styles.css', () => {
    const link = document.querySelector('link[rel="stylesheet"]');
    assert(link !== null, 'Debe haber un enlace a un archivo CSS en el archivo index.html');
    assert.strictEqual(link.getAttribute('href'), 'styles.css', 'El enlace al archivo CSS debe ser "styles.css"');
  });

  test('tiene un enlace para agregar un nuevo Pokémon', () => {
    const addLink = document.querySelector('a[href="form.html"]');
    assert(addLink !== null, 'Debe haber un enlace para agregar un nuevo Pokémon en el archivo index.html');
    assert.strictEqual(addLink.getAttribute('href'), 'form.html', 'El enlace para agregar un nuevo Pokémon debe llevar a "form.html"');
  });
});