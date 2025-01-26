import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-iniciar-sesion',
  imports: [CommonModule,FormsModule],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.scss'
})
export class IniciarSesionComponent {

  username: string = '';
  contrasena: string = '';

//mio
  errorMessage: string = '';
 
  
}


