export function formatearIdentificador(id: string | number): string {
  if (typeof id === "string") {
    return `ID-ALFANUMERICO-${id.toUpperCase()}`;
  } else {
    const numeroRelleno = id.toFixed(0).padStart(6, "0");
    return `ID-NUMERICO-#${numeroRelleno}`;
  }
}
export interface EstadoCargando {
  status: "LOADING";
  porcentaje: number;
}

export interface EstadoExito<T> {
  status: "SUCCESS";
  datos: T;
  hora: string;
}

export interface EstadoError {
  status: "ERROR";
  codigo: number;
  mensaje: string;
}

export type EstadoPantalla<T> =
  | EstadoCargando
  | EstadoExito<T>
  | EstadoError;


export function renderizarEstadoUI<T>(estado: EstadoPantalla<T>): string {
  switch (estado.status) {
    case "LOADING":
      return `⏳ Cargando datos (${estado.porcentaje}%)...`;
    case "SUCCESS":
      return `🎉 Datos cargados con éxito a las ${estado.hora}`;
    case "ERROR":
      return `❌ Error ${estado.codigo}: ${estado.mensaje}`;
    default:
      // TypeScript asegura el agotamiento de tipos (exhaustiveness checking)
      const _exhaustiveCheck: never = estado;
      return _exhaustiveCheck;
  }
}
