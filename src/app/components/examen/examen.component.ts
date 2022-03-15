import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { Examen } from 'src/app/models/examen';
import { Pregunta } from 'src/app/models/pregunta';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {

  posicionAlumnoActual: number = 0;
  alumnos: Alumno[] = [];
  numeroAlumnos: number = 0;
  preguntas: Pregunta[] = [];
  alumnoNotaMasAlta: Alumno = new Alumno();
  notasAlumnos: number[] = [];
  nombreAlumnosNotaMasAlta: string[] = [];
  mostrarExamen: boolean = false;
  mostrarBotonRealizar: boolean = true;
  mostrarBotonGuardar: boolean = false;
  mostrarBotonMostrar: boolean = false;
  mostrarResultados: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.preguntas = [
      {numero: 0, enunciado: 'Capital de Bélgica', opciones: ['Amsterdam', 'Bruselas', 'Berlín'], respuestaCorrecta: 'Bruselas', respuestaAlumno: ''},
      {numero: 0, enunciado: 'Capital de Letonia', opciones: ['Riga', 'Vilnius', 'Tallin'], respuestaCorrecta: 'Riga', respuestaAlumno: ''},
      {numero: 0, enunciado: 'Capital de Noruega', opciones: ['Helsinki', 'Estocolmo', 'Oslo'], respuestaCorrecta: 'Oslo', respuestaAlumno: ''},
      {numero: 0, enunciado: 'Capital de Albania', opciones: ['Tirana', 'Bucarest', 'Sofia'], respuestaCorrecta: 'Tirana', respuestaAlumno: ''},
      {numero: 0, enunciado: 'Capital de Turquía', opciones: ['Estambul', 'Ankara', 'Skopje'], respuestaCorrecta: 'Ankara', respuestaAlumno: ''},
      {numero: 0, enunciado: 'Capital de Eslovaquia', opciones: ['Praga', 'Berna', 'Bratislava'], respuestaCorrecta: 'Bratislava', respuestaAlumno: ''},
      {numero: 0, enunciado: 'Capital de Bosnia', opciones: ['Sarajevo', 'Zagreb', 'Belgrado'], respuestaCorrecta: 'Sarajevo', respuestaAlumno: ''},
      {numero: 0, enunciado: 'Capital de Polonia', opciones: ['Kiev', 'Minsk', 'Varsovia'], respuestaCorrecta: 'Varsovia', respuestaAlumno: ''},
      {numero: 0, enunciado: 'Capital de Lituania', opciones: ['Tallin', 'Riga', 'Vilnius'], respuestaCorrecta: 'Vilnius', respuestaAlumno: ''},
      {numero: 0, enunciado: 'Capital de Países Bajos', opciones: ['Copenhague', 'Amsterdam', 'Bruselas'], respuestaCorrecta: 'Amsterdam', respuestaAlumno: ''},
      {numero: 0, enunciado: 'Capital de Finlandia', opciones: ['Oslo', 'Helsinki', 'Estocolmo'], respuestaCorrecta: 'Helsinki', respuestaAlumno: ''},
      {numero: 0, enunciado: 'Capital de Bielorrusia', opciones: ['Moscú', 'Kiev', 'Minsk'], respuestaCorrecta: 'Minsk', respuestaAlumno: ''},
      {numero: 0, enunciado: 'Capital de Macedonia', opciones: ['Zagreb', 'Skopje', 'Tirana'], respuestaCorrecta: 'Skopje', respuestaAlumno: ''},
      {numero: 0, enunciado: 'Capital de Ucrania', opciones: ['Moscú', 'Minsk', 'Kiev'], respuestaCorrecta: 'Kiev', respuestaAlumno: ''},
      {numero: 0, enunciado: 'Capital de Suiza', opciones: ['Berna', 'Zurich', 'Basilea'], respuestaCorrecta: 'Berna', respuestaAlumno: ''}
    ]
  }

  agregarAlumnos(){
    for (let i = 0; i < this.numeroAlumnos; i++) {
      let alumno = new Alumno();
      alumno.nombre = 'Alumno' + i;
      this.alumnos.push(alumno);
    }
  }

  preguntasExamenes(){
    for (let i = 0; i < this.numeroAlumnos; i++) {
      this.alumnos[i].examen = new Examen();
      this.alumnos[i].examen.preguntasExamen = [];
      for (let j = 0; j < 5; j++) {
        let indexPreguntaAleatoria = Math.floor(Math.random()*this.preguntas.length);
        let pregunta = new Pregunta(this.preguntas[indexPreguntaAleatoria]);
        pregunta.numero = j + 1;
        this.alumnos[i].examen.preguntasExamen.push(pregunta);
        this.preguntas.splice(indexPreguntaAleatoria, 1);
      }
      for (let x = 0; x < this.alumnos[i].examen.preguntasExamen.length; x++) {
        this.preguntas.push(this.alumnos[i].examen.preguntasExamen[x]);
      }
    }
  }
  
  obtenerExamenAlumno(){
    this.mostrarExamen = true;
    this.mostrarBotonRealizar = false;
    this.agregarAlumnos(); 
    this.preguntasExamenes();
  }

  guardarRespuestaAlumno(event: any, pregunta: Pregunta){
    this.alumnos[this.posicionAlumnoActual].examen.preguntasExamen[pregunta.numero - 1].respuestaAlumno = event.target.value;
  }

  notaExamen(){
    this.alumnos[this.posicionAlumnoActual].examen.notaExamenAlumno = 0;
    for (let i = 0; i < this.alumnos[this.posicionAlumnoActual].examen.preguntasExamen.length; i++) {
      if(this.alumnos[this.posicionAlumnoActual].examen.preguntasExamen[i].respuestaCorrecta ==
        this.alumnos[this.posicionAlumnoActual].examen.preguntasExamen[i].respuestaAlumno){
        this.alumnos[this.posicionAlumnoActual].examen.notaExamenAlumno =
        this.alumnos[this.posicionAlumnoActual].examen.notaExamenAlumno + 2;
      }
    }
  }

  guardarCalificacionAlumno(){
    this.mostrarBotonRealizar = false;
    this.notaExamen();
    this.notasAlumnos.push(this.alumnos[this.posicionAlumnoActual].examen.notaExamenAlumno);
    console.log(this.notasAlumnos);
    this.posicionAlumnoActual++;
    if(this.posicionAlumnoActual == this.numeroAlumnos){
      this.mostrarBotonGuardar = false;
      this.mostrarExamen = false;
      this.mostrarResultados = true;
      this.mostrarBotonMostrar = true;
    }
  }

  mostrarAlumnoNotaMasAlta(){
    this.notasAlumnos.sort(function(a, b){return b - a});
    this.notaMasAlta();
    this.mostrarResultados = true;
    this.mostrarBotonGuardar = false;
    this.mostrarExamen = false;
    this.mostrarBotonMostrar = false;
  }

  notaMasAlta(){
    for (let i = 0; i < this.alumnos.length; i++) {
      if(this.alumnos[i].examen.notaExamenAlumno == this.notasAlumnos[0]){
        this.alumnoNotaMasAlta = this.alumnos[i];
        this.nombreAlumnosNotaMasAlta.push(this.alumnoNotaMasAlta.nombre);
      }
      console.log(this.alumnos[i]);
      
    }
  }
}
