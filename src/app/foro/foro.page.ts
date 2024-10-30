import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../services/conexion.service';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.page.html',
  styleUrls: ['./foro.page.scss'],
})
export class ForoPage implements OnInit {

  constructor(private conexionService: ConexionService) { }

  personas:any = [];

  ngOnInit() :void{

    this.conexionService.obtenerPersonas().subscribe({
      next:(respuestaApi:any)=>{
        console.log(respuestaApi);
        this.personas=respuestaApi.results;
        localStorage.setItem('personajes',JSON.stringify(respuestaApi.results));
      },
      error:(err)=>{
        console.log(err);
      },



  });
}
}
