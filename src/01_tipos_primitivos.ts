export const nombreEstudiante: string = "David";       
export const edadEstudiante: number = 17;          
export const promedioObjetivo: number = 9.6;        
export let estaMatriculado: boolean = true; 

export function obtenerResumenPersonal(): string {
let cadena:string = '👤 Estudiante:${nombreEstudiante} | 🎂 Edad:${edadEstudiante}años | 🎯 Meta: PROMEDIO/10 | 📋 Estado: MATRICULADO` (o NO_MATRICULADO si es false)'

export function calcularPromedio(notas: readonly number[]): number {
  let suma = 0;
  if(notas.length==0){
    return 0;
  }else{
    for(let i =0; i <notas.length; i++){
      const nota =  notas[i];
      if(nota != undefined){
        suma = suma + nota;
      }
    }
    let promedio:number = Number((suma/notas.length).toFixed(2))
    return promedio;
  } 
}
export function formatearFichaEstudiante(
  nombre: string,
  edad: number,
  paralelo: "E1" | "E2",
  activo: boolean
): string { 
  let formato: string = `[FICHA UETS] ${nombre.toUpperCase()} (${edad} años) - Paralelo : $(paralelo) - Estado: ${activo == true ? "MATRICULADO": "RETIRADO"}`;
  return formato;
}