"use strict";
exports.__esModule = true;
exports.Pregunta = void 0;
var Pregunta = /** @class */ (function () {
    function Pregunta(pregunta) {
        this.numero = pregunta.numero;
        this.enunciado = pregunta.enunciado;
        this.opciones = pregunta.opciones;
        this.respuestaCorrecta = pregunta.respuestaCorrecta;
        this.respuestaAlumno = pregunta.respuestaAlumno;
    }
    return Pregunta;
}());
exports.Pregunta = Pregunta;
