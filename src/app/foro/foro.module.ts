import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForoPageRoutingModule } from './foro-routing.module';

import { ForoPage } from './foro.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ConexionService } from '../services/conexion.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForoPageRoutingModule,
    HttpClientModule,
  ],
  providers:[ConexionService],
  declarations: [ForoPage]
})
export class ForoPageModule {}
