import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carga-menu',
  templateUrl: './carga-menu.component.html',
  styleUrls: ['./carga-menu.component.css']
})
export class CargaMenuComponent implements OnInit {

  constructor(
    private _router: Router
  ) {}

  ngOnInit(): void {

    /* Crear y capturar elementos */

    var barra_progreso = document.getElementById("barra-progreso");  
    var pantalla_carga = document.getElementById("pantalla_carga");
    var width = 0;
    var opacity = 140;
    var contador = 1;

    /* FIN Crear y capturar elementos */



    
    /* Funcionamiento barra de progreso de la pantalla de carga */

    // Variable que uso para llamar a this dentro de frame
    var that = this;

    var id = setInterval(frame, 10);

    function frame() {
      if (width >= 100) {
        if (opacity <= 100){
          pantalla_carga.style.opacity = opacity + '%';
        }
        opacity--;
        if (opacity < 0){
          clearInterval(id);
          pantalla_carga.style.display = "none";
          that._router.navigate(['/menu']);
        }
      } else {
        width = width + contador/100;
        if (width <= 50){
          contador = contador * 1.10; 
        } else {
          contador = contador / 1.10; 
        }
        barra_progreso.style.width = width + '%'; 
      }
    }

    /* FIN Funcionamiento barra de progreso de la pantalla de carga */

  }

}
