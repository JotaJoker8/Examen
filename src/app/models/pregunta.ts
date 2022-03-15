export class Pregunta{
    constructor(pregunta: Pregunta) {
        this.numero = pregunta.numero;
        this.enunciado = pregunta.enunciado;
        this.opciones = pregunta.opciones;
        this.respuestaCorrecta = pregunta.respuestaCorrecta;
        this.respuestaAlumno = pregunta.respuestaAlumno;
    }
    public numero!: number
    public enunciado!: string
    public opciones!: string[]
    public respuestaCorrecta!: string
    public respuestaAlumno!: string
}