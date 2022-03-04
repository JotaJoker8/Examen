import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { Pregunta } from 'src/app/models/pregunta';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {

  alumno: Alumno = new Alumno();
  alumnos: Alumno[] = [];
  numeroAlumnos: number = 0;
  preguntas: Pregunta[] = [];
  pregunta1!: Pregunta;
  pregunta2!: Pregunta;
  pregunta3!: Pregunta;
  pregunta4!: Pregunta;
  pregunta5!: Pregunta;
  respuestasExamen: string[] = [];
  mostrarExamen: boolean = false;
  mostrarBotonGuardar: boolean = false;
  mostrarResultados: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.preguntas = [
      {numero: 0, enunciado: 'Capital de Bélgica', opciones: ['Amsterdam', 'Bruselas', 'Berlín'], respuestaCorrecta: 'Bruselas'},
      {numero: 0, enunciado: 'Capital de Letonia', opciones: ['Riga', 'Vilnius', 'Tallin'], respuestaCorrecta: 'Riga'},
      {numero: 0, enunciado: 'Capital de Noruega', opciones: ['Helsinki', 'Estocolmo', 'Oslo'], respuestaCorrecta: 'Oslo'},
      {numero: 0, enunciado: 'Capital de Albania', opciones: ['Tirana', 'Bucarest', 'Sofia'], respuestaCorrecta: 'Tirana'},
      {numero: 0, enunciado: 'Capital de Turquía', opciones: ['Estambul', 'Ankara', 'Skopje'], respuestaCorrecta: 'Ankara'},
      {numero: 0, enunciado: 'Capital de Eslovaquia', opciones: ['Praga', 'Berna', 'Bratislava'], respuestaCorrecta: 'Bratislava'},
      {numero: 0, enunciado: 'Capital de Bosnia', opciones: ['Sarajevo', 'Zagreb', 'Belgrado'], respuestaCorrecta: 'Sarajevo'},
      {numero: 0, enunciado: 'Capital de Polonia', opciones: ['Kiev', 'Minsk', 'Varsovia'], respuestaCorrecta: 'Varsovia'},
      {numero: 0, enunciado: 'Capital de Lituania', opciones: ['Tallin', 'Riga', 'Vilnius'], respuestaCorrecta: 'Vilnius'},
      {numero: 0, enunciado: 'Capital de Países Bajos', opciones: ['Copenhague', 'Amsterdam', 'Bruselas'], respuestaCorrecta: 'Amsterdam'},
      {numero: 0, enunciado: 'Capital de Finlandia', opciones: ['Oslo', 'Helsinki', 'Estocolmo'], respuestaCorrecta: 'Helsinki'},
      {numero: 0, enunciado: 'Capital de Bielorrusia', opciones: ['Moscú', 'Kiev', 'Minsk'], respuestaCorrecta: 'Minsk'},
      {numero: 0, enunciado: 'Capital de Macedonia', opciones: ['Zagreb', 'Skopje', 'Tirana'], respuestaCorrecta: 'Skopje'},
      {numero: 0, enunciado: 'Capital de Ucrania', opciones: ['Moscú', 'Minsk', 'Kiev'], respuestaCorrecta: 'Kiev'},
      {numero: 0, enunciado: 'Capital de Suiza', opciones: ['Berna', 'Zurich', 'Basilea'], respuestaCorrecta: 'Berna'}
    ]

  }

  agregarAlumno(){
    this.mostrarExamen = true;
    for (let i = 0; i < this.numeroAlumnos; i++) {
      this.alumno = new Alumno();
      this.alumno.nombre = 'Alumno' + i;
      this.alumno.calificacion = 0;
      this.alumnos.push(this.alumno);
    }
    this.obtenerExamen(this.alumno);
  }

  obtenerExamen(alumno: Alumno){
    for (let i = 0; i < this.alumnos.length; i++) {
      alumno = this.alumnos[i];
      alumno.preguntasExamen = [];
      let preguntaAleatoria1 = Math.floor(Math.random()*this.preguntas.length);
      this.pregunta1 = this.preguntas[preguntaAleatoria1];
      this.pregunta1.numero = 1;
      alumno.preguntasExamen.push(this.pregunta1);
      const index1: number = this.preguntas.indexOf(this.pregunta1);
      if (index1 !== -1) {
        this.preguntas.splice(index1, 1);
      }
      this.mostrarBotonGuardar = true;
      let preguntaAleatoria2 = Math.floor(Math.random()*this.preguntas.length);
      this.pregunta2 = this.preguntas[preguntaAleatoria2];
      this.pregunta2.numero = 2;
      alumno.preguntasExamen.push(this.pregunta2);
      const index2: number = this.preguntas.indexOf(this.pregunta2);
      if (index2 !== -1) {
        this.preguntas.splice(index2, 1);
      }
      let preguntaAleatoria3 = Math.floor(Math.random()*this.preguntas.length);
      this.pregunta3 = this.preguntas[preguntaAleatoria3];
      this.pregunta3.numero = 3;
      alumno.preguntasExamen.push(this.pregunta3);
      const index3: number = this.preguntas.indexOf(this.pregunta3);
      if (index3 !== -1) {
        this.preguntas.splice(index3, 1);
      }
      let preguntaAleatoria4 = Math.floor(Math.random()*this.preguntas.length);
      this.pregunta4 = this.preguntas[preguntaAleatoria4];
      this.pregunta4.numero = 4;
      alumno.preguntasExamen.push(this.pregunta4);
      const index4: number = this.preguntas.indexOf(this.pregunta4);
      if (index4 !== -1) {
        this.preguntas.splice(index4, 1);
      }
      let preguntaAleatoria5 = Math.floor(Math.random()*this.preguntas.length);
      this.pregunta5 = this.preguntas[preguntaAleatoria5];
      this.pregunta5.numero = 5;
      alumno.preguntasExamen.push(this.pregunta5);
      const index5: number = this.preguntas.indexOf(this.pregunta5);
      if (index5 !== -1) {
        this.preguntas.splice(index5, 1);
      }
    }
    this.ngOnInit();
  }

  valueInput(event: any){
    if(this.alumno.respuestaExamen = event.target.value){
      this.respuestasExamen.push(this.alumno.respuestaExamen);
      return this.respuestasExamen;
    }else{
      return false;
    }
  }

  resultadoAlumno(){
    this.mostrarResultados = true;
    let respuestasCorrectas: string[] = [];
    this.alumno.calificacion = 0;
    for (let i = 0; i < this.alumno.preguntasExamen.length; i++) {
      respuestasCorrectas.push(this.alumno.preguntasExamen[i].respuestaCorrecta)
    }
    for (let i = 0; i < respuestasCorrectas.length; i++) {
      let respuestaCorrecta = respuestasCorrectas[i];
      for (let j = 0; j < this.respuestasExamen.length; j++) {
        this.alumno.respuestaExamen = this.respuestasExamen[j];
        if(respuestaCorrecta == this.alumno.respuestaExamen){
          this.alumno.calificacion = this.alumno.calificacion + 2;
        }
      }
    }
    return this.alumno.calificacion;
  }
}
