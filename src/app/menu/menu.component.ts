import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // Funcionamiento barra de progreso
    var barra_progreso = document.getElementById("barra-progreso");   
    var width = 0;
    var opacity = 140;
    var contenido = document.getElementById("contenido");
    var id = setInterval(frame, 10);
    var contador = 1;
    function frame() {
      if (width >= 100) {
        if (opacity <= 100){
          contenido.style.opacity = opacity + '%';
        }
        opacity--;
        if (opacity < 0){
          clearInterval(id);
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
  }

}
