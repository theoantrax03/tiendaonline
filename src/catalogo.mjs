const normalizarTexto = texto => texto.trim().toLowerCase();

export const precioValido = centavos => Number.isSafeInteger(centavos) && centavos > 0;

export function consultarCatalogo(productos, { busqueda = '', categoria = '' } = {}) {
  const termino = normalizarTexto(busqueda);
  const categoriaBuscada = normalizarTexto(categoria);

  return productos
    .filter(producto => producto.activo)
    .filter(producto => normalizarTexto(producto.nombre).includes(termino))
    .filter(producto => !categoriaBuscada || normalizarTexto(producto.categoria) === categoriaBuscada);
}

export const desactivarProducto = (productos, id) =>
  productos.map(producto =>
    producto.id === id && producto.activo ? { ...producto, activo: false } : producto
  );
