import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, catchError, filter, from, map, Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { personas } from '../datos/personas';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class OficinasService implements OnInit{
  personas!: Persona[];
  personasOrden!: Persona[];
  constructor( private http: HttpClient) {
  }

  ngOnInit(): void{
  }
  // ordenar(){
  //   of(this.personas).pipe(
  //     map((personas: Persona[])=>personas.filter((persona: Persona)=>persona.cargo === 'Jefe'))
  //   )
  //   .subscribe((persona)=>{
  //     this.personasOrden=[...persona];
  //   });
  //   of(this.personas).pipe(
  //     map((personas: Persona[])=>personas.filter((persona: Persona)=>persona.cargo === 'Encargado'))
  //   )
  //   .subscribe((persona)=>{
  //     this.personasOrden=[...this.personasOrden,...persona];
  //   });
  //   of(this.personas).pipe(
  //     map((personas: Persona[])=>personas.filter((persona: Persona)=>persona.cargo != 'Jefe' && persona.cargo != 'Encargado'))
  //   )
  //   .subscribe((persona)=>{
  //     this.personasOrden=[...this.personasOrden,...persona];
  //   });
  // }

  obtenerPersonasObservable(){
    return this.http.get<Persona[]>(`${environment.api}/empleados`,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejaError)
    );
  }
  agregarCurso(persona: Persona){

    this.http.post<Persona>(`${environment.api}/empleados`,persona,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejaError)
    ).subscribe(console.log);
  }
  private manejaError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn("Error del lado del cliente", error.error.message);
    }else{
      console.warn("Error del lado del servidor", error.error.message);
    }

    return throwError(()=> new Error('Error en La comunicación HTTP'))
  }
}
