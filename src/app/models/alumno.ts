import { Pregunta } from "./pregunta"

export class Alumno{
    public nombre!: string
    public preguntasExamen!: Pregunta[]
    public respuestaExamen!: string
    public calificacion!: number
}