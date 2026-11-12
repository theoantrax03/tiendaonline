import { test } from 'node:test';
import assert from 'node:assert/strict';
import { correoDisponible, normalizarCorreo } from '../src/usuarios.mjs';
import { consultarCatalogo, desactivarProducto, precioValido } from '../src/catalogo.mjs';

const catalogo = Object.freeze([
  Object.freeze({ id: 'p1', nombre: 'Camisa Oxford', categoria: 'Camisas', precioCentavos: 2999, activo: true }),
  Object.freeze({ id: 'p2', nombre: 'Camisa Oxford azul', categoria: 'Camisas', precioCentavos: 3200, activo: false }),
  Object.freeze({ id: 'p3', nombre: 'Suéter', categoria: 'Abrigos', precioCentavos: 4500, activo: true }),
]);

test('normaliza el correo antes de comprobar duplicados', () => {
  const usuarios = [{ correo: 'ana@example.com' }];
  assert.equal(normalizarCorreo(' ANA@EXAMPLE.COM '), 'ana@example.com');
  assert.equal(correoDisponible(usuarios, ' ANA@EXAMPLE.COM '), false);
  assert.equal(correoDisponible(usuarios, 'luis@example.com'), true);
});

test('busca por nombre y categoría entre productos activos', () => {
  const resultados = consultarCatalogo(catalogo, { busqueda: ' OXFORD ', categoria: 'camisas' });
  assert.deepEqual(resultados.map(producto => producto.id), ['p1']);
  assert.deepEqual(consultarCatalogo(catalogo, { busqueda: 'Oxford', categoria: 'Abrigos' }), []);
});

test('desactiva el producto sin mutar el catálogo original', () => {
  const resultado = desactivarProducto(catalogo, 'p1');
  assert.equal(catalogo[0].activo, true);
  assert.notEqual(resultado, catalogo);
  assert.notEqual(resultado[0], catalogo[0]);
  assert.equal(resultado[0].activo, false);
  assert.deepEqual(consultarCatalogo(resultado, { busqueda: 'Oxford' }), []);
});

test('solo admite precios en centavos enteros positivos', () => {
  assert.equal(precioValido(2999), true);
  assert.equal(precioValido(0), false);
  assert.equal(precioValido(-99), false);
  assert.equal(precioValido(29.99), false);
  assert.equal(precioValido('2999'), false);
});
