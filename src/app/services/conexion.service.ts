import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private url: string= 'https://randomuser.me/api/?results=50'

  constructor(private http: HttpClient) { }
  obtenerPersonas() {
    return this.http.get(this.url);
}
}