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
var examen_1 = require("src/app/models/examen");
var pregunta_1 = require("src/app/models/pregunta");
var ExamenComponent = /** @class */ (function () {
    function ExamenComponent() {
        this.posicionAlumnoActual = 0;
        this.alumnos = [];
        this.numeroAlumnos = 0;
        this.preguntas = [];
        this.alumnoNotaMasAlta = new alumno_1.Alumno();
        this.notasAlumnos = [];
        this.nombreAlumnosNotaMasAlta = [];
        this.mostrarExamen = false;
        this.mostrarBotonRealizar = true;
        this.mostrarBotonGuardar = false;
        this.mostrarBotonMostrar = false;
        this.mostrarResultados = false;
        this.mostrarBotonRepetir = false;
    }
    ExamenComponent.prototype.ngOnInit = function () {
        this.preguntas = [
            { numero: 0, enunciado: 'Capital de Bélgica', opciones: ['Amsterdam', 'Bruselas', 'Berlín'], respuestaCorrecta: 'Bruselas', respuestaAlumno: '' },
            { numero: 0, enunciado: 'Capital de Letonia', opciones: ['Riga', 'Vilnius', 'Tallin'], respuestaCorrecta: 'Riga', respuestaAlumno: '' },
            { numero: 0, enunciado: 'Capital de Noruega', opciones: ['Helsinki', 'Estocolmo', 'Oslo'], respuestaCorrecta: 'Oslo', respuestaAlumno: '' },
            { numero: 0, enunciado: 'Capital de Albania', opciones: ['Tirana', 'Bucarest', 'Sofia'], respuestaCorrecta: 'Tirana', respuestaAlumno: '' },
            { numero: 0, enunciado: 'Capital de Turquía', opciones: ['Estambul', 'Ankara', 'Skopje'], respuestaCorrecta: 'Ankara', respuestaAlumno: '' },
            { numero: 0, enunciado: 'Capital de Eslovaquia', opciones: ['Praga', 'Berna', 'Bratislava'], respuestaCorrecta: 'Bratislava', respuestaAlumno: '' },
            { numero: 0, enunciado: 'Capital de Bosnia', opciones: ['Sarajevo', 'Zagreb', 'Belgrado'], respuestaCorrecta: 'Sarajevo', respuestaAlumno: '' },
            { numero: 0, enunciado: 'Capital de Polonia', opciones: ['Kiev', 'Minsk', 'Varsovia'], respuestaCorrecta: 'Varsovia', respuestaAlumno: '' },
            { numero: 0, enunciado: 'Capital de Lituania', opciones: ['Tallin', 'Riga', 'Vilnius'], respuestaCorrecta: 'Vilnius', respuestaAlumno: '' },
            { numero: 0, enunciado: 'Capital de Países Bajos', opciones: ['Copenhague', 'Amsterdam', 'Bruselas'], respuestaCorrecta: 'Amsterdam', respuestaAlumno: '' },
            { numero: 0, enunciado: 'Capital de Finlandia', opciones: ['Oslo', 'Helsinki', 'Estocolmo'], respuestaCorrecta: 'Helsinki', respuestaAlumno: '' },
            { numero: 0, enunciado: 'Capital de Bielorrusia', opciones: ['Moscú', 'Kiev', 'Minsk'], respuestaCorrecta: 'Minsk', respuestaAlumno: '' },
            { numero: 0, enunciado: 'Capital de Macedonia', opciones: ['Zagreb', 'Skopje', 'Tirana'], respuestaCorrecta: 'Skopje', respuestaAlumno: '' },
            { numero: 0, enunciado: 'Capital de Ucrania', opciones: ['Moscú', 'Minsk', 'Kiev'], respuestaCorrecta: 'Kiev', respuestaAlumno: '' },
            { numero: 0, enunciado: 'Capital de Suiza', opciones: ['Berna', 'Zurich', 'Basilea'], respuestaCorrecta: 'Berna', respuestaAlumno: '' }
        ];
    };
    ExamenComponent.prototype.agregarAlumnos = function () {
        for (var i = 0; i < this.numeroAlumnos; i++) {
            var alumno = new alumno_1.Alumno();
            alumno.nombre = 'Alumno' + i;
            this.alumnos.push(alumno);
        }
    };
    ExamenComponent.prototype.preguntasExamenes = function () {
        for (var i = 0; i < this.numeroAlumnos; i++) {
            this.alumnos[i].examen = new examen_1.Examen();
            this.alumnos[i].examen.preguntasExamen = [];
            for (var j = 0; j < 5; j++) {
                var indexPreguntaAleatoria = Math.floor(Math.random() * this.preguntas.length);
                var pregunta = new pregunta_1.Pregunta(this.preguntas[indexPreguntaAleatoria]);
                pregunta.numero = j + 1;
                this.alumnos[i].examen.preguntasExamen.push(pregunta);
                this.preguntas.splice(indexPreguntaAleatoria, 1);
            }
            for (var x = 0; x < this.alumnos[i].examen.preguntasExamen.length; x++) {
                this.preguntas.push(this.alumnos[i].examen.preguntasExamen[x]);
            }
        }
    };
    ExamenComponent.prototype.obtenerExamenAlumno = function () {
        this.mostrarExamen = true;
        this.mostrarBotonRealizar = false;
        this.agregarAlumnos();
        this.preguntasExamenes();
    };
    ExamenComponent.prototype.guardarRespuestaAlumno = function (event, pregunta) {
        this.alumnos[this.posicionAlumnoActual].examen.preguntasExamen[pregunta.numero - 1].respuestaAlumno = event.target.value;
    };
    ExamenComponent.prototype.notaExamen = function () {
        this.alumnos[this.posicionAlumnoActual].examen.notaExamenAlumno = 0;
        for (var i = 0; i < this.alumnos[this.posicionAlumnoActual].examen.preguntasExamen.length; i++) {
            if (this.alumnos[this.posicionAlumnoActual].examen.preguntasExamen[i].respuestaCorrecta ==
                this.alumnos[this.posicionAlumnoActual].examen.preguntasExamen[i].respuestaAlumno) {
                this.alumnos[this.posicionAlumnoActual].examen.notaExamenAlumno =
                    this.alumnos[this.posicionAlumnoActual].examen.notaExamenAlumno + 2;
            }
        }
    };
    ExamenComponent.prototype.guardarCalificacionAlumno = function () {
        this.mostrarBotonRealizar = false;
        this.notaExamen();
        this.notasAlumnos.push(this.alumnos[this.posicionAlumnoActual].examen.notaExamenAlumno);
        this.posicionAlumnoActual++;
        if (this.posicionAlumnoActual == this.numeroAlumnos) {
            this.mostrarBotonGuardar = false;
            this.mostrarExamen = false;
            this.mostrarResultados = true;
            this.mostrarBotonMostrar = true;
        }
    };
    ExamenComponent.prototype.mostrarAlumnoNotaMasAlta = function () {
        this.notasAlumnos.sort(function (a, b) { return b - a; });
        this.notaMasAlta();
        this.mostrarResultados = true;
        this.mostrarBotonGuardar = false;
        this.mostrarExamen = false;
        this.mostrarBotonMostrar = false;
        this.mostrarBotonRepetir = true;
    };
    ExamenComponent.prototype.notaMasAlta = function () {
        for (var i = 0; i < this.alumnos.length; i++) {
            if (this.alumnos[i].examen.notaExamenAlumno == this.notasAlumnos[0]) {
                this.alumnoNotaMasAlta = this.alumnos[i];
                this.nombreAlumnosNotaMasAlta.push(this.alumnoNotaMasAlta.nombre);
            }
        }
    };
    ExamenComponent.prototype.repetirExamen = function () {
        this.ngOnInit();
        this.alumnos = [];
        this.notasAlumnos = [];
        this.nombreAlumnosNotaMasAlta = [];
        this.numeroAlumnos = 0;
        this.posicionAlumnoActual = 0;
        this.mostrarBotonRepetir = false;
        this.mostrarBotonRealizar = true;
        this.mostrarResultados = false;
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
