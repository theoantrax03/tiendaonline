export const normalizarCorreo = correo => correo.trim().toLowerCase();

export const correoDisponible = (usuarios, correo) => {
  const correoNormalizado = normalizarCorreo(correo);
  return !usuarios.some(usuario => normalizarCorreo(usuario.correo) === correoNormalizado);
};
