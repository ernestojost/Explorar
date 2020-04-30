import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    /* Crear y capturar elementos */

    /* Pantalla de carga */
    var barra_progreso = document.getElementById("barra-progreso");  
    var pantalla_carga = document.getElementById("pantalla_carga");
    var menu_principal = document.getElementById("menu_principal"); 
    var width = 0;
    var opacity = 140;
    var id = setInterval(frame, 10);
    var contador = 1;

    /* Menú principal */
    var id_movimiento_imagenes;
    var opcionAventura = document.getElementById("aventura");
    var opcionRomantico = document.getElementById("romantico");
    var opcionSolYPlaya = document.getElementById("solyplaya");
    var imagenAventura = document.getElementById("imagenAventura");
    var imagenRomantico = document.getElementById("imagenRomantico");
    var imagenSolYPlaya = document.getElementById("imagenSolYPlaya");
    var scale = 2;

    /* FIN Crear y capturar elementos */



    /* Funcionamiento barra de progreso de la pantalla de carga */
    function frame() {
      if (width >= 100) {
        if (opacity <= 100){
          pantalla_carga.style.opacity = opacity + '%';
        }
        opacity--;
        if (opacity < 0){
          clearInterval(id);
          pantalla_carga.style.display = "none";
          menu_principal.style.display = "flex";
          opacity = 0;
          id_movimiento_imagenes = setInterval(movimientoImagenes, 10);
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



    /* Carga de menú principal */
    function movimientoImagenes(){
      if(opacity > 100){
        clearInterval(id_movimiento_imagenes);
      }else{
        opcionAventura.style.opacity = opacity + '%';
        opcionRomantico.style.opacity = opacity + '%';
        opcionSolYPlaya.style.opacity = opacity + '%';
        imagenAventura.style.transform = "scale("+scale+")";
        imagenRomantico.style.transform = "scale("+scale+")";
        imagenSolYPlaya.style.transform = "scale("+scale+")";
        if(scale > 1.01){
          scale = scale - 0.005;
        }
        opacity = opacity + 0.5;
      }
    }

    /* FIN Carga de menú principal */

    /* Al pasar ratón por encima de opciones */
    
    function overMostrarOpcion(opcion){
      console.log("sdasdsa")
      var id_mostrarContenidoOpcion;
      var fondoNegro = document.getElementById("fondoNegroAventura");
      fondoNegro.style.opacity = '100%';
    }

  }

}
