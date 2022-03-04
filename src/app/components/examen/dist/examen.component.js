"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ExamenComponent = void 0;
var core_1 = require("@angular/core");
var alumno_1 = require("src/app/models/alumno");
var ExamenComponent = /** @class */ (function () {
    function ExamenComponent() {
        this.alumno = new alumno_1.Alumno();
        this.alumnos = [];
        this.numeroAlumnos = 0;
        this.preguntas = [];
        this.respuestasExamen = [];
        this.mostrarExamen = false;
        this.mostrarBotonGuardar = false;
        this.mostrarResultados = false;
    }
    ExamenComponent.prototype.ngOnInit = function () {
        this.preguntas = [
            { numero: 0, enunciado: 'Capital de Bélgica', opciones: ['Amsterdam', 'Bruselas', 'Berlín'], respuestaCorrecta: 'Bruselas' },
            { numero: 0, enunciado: 'Capital de Letonia', opciones: ['Riga', 'Vilnius', 'Tallin'], respuestaCorrecta: 'Riga' },
            { numero: 0, enunciado: 'Capital de Noruega', opciones: ['Helsinki', 'Estocolmo', 'Oslo'], respuestaCorrecta: 'Oslo' },
            { numero: 0, enunciado: 'Capital de Albania', opciones: ['Tirana', 'Bucarest', 'Sofia'], respuestaCorrecta: 'Tirana' },
            { numero: 0, enunciado: 'Capital de Turquía', opciones: ['Estambul', 'Ankara', 'Skopje'], respuestaCorrecta: 'Ankara' },
            { numero: 0, enunciado: 'Capital de Eslovaquia', opciones: ['Praga', 'Berna', 'Bratislava'], respuestaCorrecta: 'Bratislava' },
            { numero: 0, enunciado: 'Capital de Bosnia', opciones: ['Sarajevo', 'Zagreb', 'Belgrado'], respuestaCorrecta: 'Sarajevo' },
            { numero: 0, enunciado: 'Capital de Polonia', opciones: ['Kiev', 'Minsk', 'Varsovia'], respuestaCorrecta: 'Varsovia' },
            { numero: 0, enunciado: 'Capital de Lituania', opciones: ['Tallin', 'Riga', 'Vilnius'], respuestaCorrecta: 'Vilnius' },
            { numero: 0, enunciado: 'Capital de Países Bajos', opciones: ['Copenhague', 'Amsterdam', 'Bruselas'], respuestaCorrecta: 'Amsterdam' },
            { numero: 0, enunciado: 'Capital de Finlandia', opciones: ['Oslo', 'Helsinki', 'Estocolmo'], respuestaCorrecta: 'Helsinki' },
            { numero: 0, enunciado: 'Capital de Bielorrusia', opciones: ['Moscú', 'Kiev', 'Minsk'], respuestaCorrecta: 'Minsk' },
            { numero: 0, enunciado: 'Capital de Macedonia', opciones: ['Zagreb', 'Skopje', 'Tirana'], respuestaCorrecta: 'Skopje' },
            { numero: 0, enunciado: 'Capital de Ucrania', opciones: ['Moscú', 'Minsk', 'Kiev'], respuestaCorrecta: 'Kiev' },
            { numero: 0, enunciado: 'Capital de Suiza', opciones: ['Berna', 'Zurich', 'Basilea'], respuestaCorrecta: 'Berna' }
        ];
    };
    ExamenComponent.prototype.agregarAlumno = function () {
        this.mostrarExamen = true;
        for (var i = 0; i < this.numeroAlumnos; i++) {
            this.alumno = new alumno_1.Alumno();
            this.alumno.nombre = 'Alumno' + i;
            this.alumno.calificacion = 0;
            this.alumnos.push(this.alumno);
        }
        this.obtenerExamen(this.alumno);
    };
    ExamenComponent.prototype.obtenerExamen = function (alumno) {
        for (var i = 0; i < this.alumnos.length; i++) {
            alumno = this.alumnos[i];
            alumno.preguntasExamen = [];
            var preguntaAleatoria1 = Math.floor(Math.random() * this.preguntas.length);
            this.pregunta1 = this.preguntas[preguntaAleatoria1];
            this.pregunta1.numero = 1;
            alumno.preguntasExamen.push(this.pregunta1);
            var index1 = this.preguntas.indexOf(this.pregunta1);
            if (index1 !== -1) {
                this.preguntas.splice(index1, 1);
            }
            this.mostrarBotonGuardar = true;
            var preguntaAleatoria2 = Math.floor(Math.random() * this.preguntas.length);
            this.pregunta2 = this.preguntas[preguntaAleatoria2];
            this.pregunta2.numero = 2;
            alumno.preguntasExamen.push(this.pregunta2);
            var index2 = this.preguntas.indexOf(this.pregunta2);
            if (index2 !== -1) {
                this.preguntas.splice(index2, 1);
            }
            var preguntaAleatoria3 = Math.floor(Math.random() * this.preguntas.length);
            this.pregunta3 = this.preguntas[preguntaAleatoria3];
            this.pregunta3.numero = 3;
            alumno.preguntasExamen.push(this.pregunta3);
            var index3 = this.preguntas.indexOf(this.pregunta3);
            if (index3 !== -1) {
                this.preguntas.splice(index3, 1);
            }
            var preguntaAleatoria4 = Math.floor(Math.random() * this.preguntas.length);
            this.pregunta4 = this.preguntas[preguntaAleatoria4];
            this.pregunta4.numero = 4;
            alumno.preguntasExamen.push(this.pregunta4);
            var index4 = this.preguntas.indexOf(this.pregunta4);
            if (index4 !== -1) {
                this.preguntas.splice(index4, 1);
            }
            var preguntaAleatoria5 = Math.floor(Math.random() * this.preguntas.length);
            this.pregunta5 = this.preguntas[preguntaAleatoria5];
            this.pregunta5.numero = 5;
            alumno.preguntasExamen.push(this.pregunta5);
            var index5 = this.preguntas.indexOf(this.pregunta5);
            if (index5 !== -1) {
                this.preguntas.splice(index5, 1);
            }
            this.preguntas.push(this.pregunta1);
            this.preguntas.push(this.pregunta2);
            this.preguntas.push(this.pregunta3);
            this.preguntas.push(this.pregunta4);
            this.preguntas.push(this.pregunta5);
        }
    };
    ExamenComponent.prototype.valueInput = function (event) {
        if (this.alumno.respuestaExamen = event.target.value) {
            this.respuestasExamen.push(this.alumno.respuestaExamen);
            return this.respuestasExamen;
        }
        else {
            return false;
        }
    };
    ExamenComponent.prototype.resultadoAlumno = function () {
        this.mostrarResultados = true;
        var respuestasCorrectas = [];
        this.alumno.calificacion = 0;
        for (var i = 0; i < this.alumno.preguntasExamen.length; i++) {
            respuestasCorrectas.push(this.alumno.preguntasExamen[i].respuestaCorrecta);
        }
        for (var i = 0; i < respuestasCorrectas.length; i++) {
            var respuestaCorrecta = respuestasCorrectas[i];
            for (var j = 0; j < this.respuestasExamen.length; j++) {
                this.alumno.respuestaExamen = this.respuestasExamen[j];
                if (respuestaCorrecta == this.alumno.respuestaExamen) {
                    this.alumno.calificacion = this.alumno.calificacion + 2;
                }
            }
        }
        return this.alumno.calificacion;
    };
    ExamenComponent = __decorate([
        core_1.Component({
            selector: 'app-examen',
            templateUrl: './examen.component.html',
            styleUrls: ['./examen.component.css']
        })
    ], ExamenComponent);
    return ExamenComponent;
}());
exports.ExamenComponent = ExamenComponent;
