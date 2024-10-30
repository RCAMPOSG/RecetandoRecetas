
import { Component } from '@angular/core';

@Component({
  selector: 'app-boton-login',
  templateUrl: './boton-login.component.html',
  styleUrls: ['./boton-login.component.scss']
})
export class BotonLoginComponent {
  public alertButtons = ['Confirmar'];
  public alertInputs = [
    {
      placeholder: 'Nombre',
    },
    {
      type: 'number',
      placeholder: 'Edad',
      min: 1,
      max: 100,
    },
    {
      placeholder: 'Correo Electronico',
    },
    {
      placeholder: 'Contraseña (max 4 caracteres)',
      type: 'password',
      attributes: {
        maxlength: 4,
      },
    },
  ];
}
