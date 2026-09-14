export interface PerfilUsuario {
  readonly id: string;
  nombreCompleto: string;
  correo: string;
  telefono?: string;
  rol: "ADMIN" | "DOCENTE" | "ESTUDIANTE";
}
export const usuarioEjemplo: PerfilUsuario = {
  id: "UETS-2026-001",
  nombreCompleto: "David Andrés Bravo Vásquez",                     
  correo: "david.bravo.est@uets.edu.ec",               
  rol: "ESTUDIANTE"
};

export function formatearPerfilUsuario(usuario: PerfilUsuario): string {
  return `[PERFIL] ${usuario.id} (${usuario.rol}): ${usuario.nombreCompleto} - ${usuario.correo}`;
}

export interface ProductoItem {
  readonly id: string;
  titulo: string;
  precio: number;
  disponible: boolean;
  descuentoPorcentaje?: number;
}


export function calcularPrecioFinal(producto: ProductoItem): number {
  if (!producto.disponible) {
    return 0;
  }

  let precioFinal = producto.precio;

  if (producto.descuentoPorcentaje && producto.descuentoPorcentaje > 0) {
    const descuento = producto.precio * (producto.descuentoPorcentaje / 100);
    precioFinal = producto.precio - descuento;
  }

  return Number(precioFinal.toFixed(2));
}
