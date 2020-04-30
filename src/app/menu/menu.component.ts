import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  public id_mostrarContenidoOpcionAventura;
  public id_mostrarContenidoOpcionRomance;
  public id_mostrarContenidoOpcionSolYPlaya;

  constructor() {
    
  }

  ngOnInit(): void {


    /* Crear y capturar elementos */

    /* Pantalla de carga */
    var barra_progreso = document.getElementById("barra-progreso");  
    var pantalla_carga = document.getElementById("pantalla_carga");
    var menu_principal = document.getElementById("menu_principal"); 
    var id = setInterval(frame, 10);
    var width = 0;
    var opacity = 140;
    var contador = 1;

    /* Menú principal */
    var id_movimiento_imagenes;
    var opcionAventura = document.getElementById("aventura");
    var opcionRomance = document.getElementById("romance");
    var opcionSolYPlaya = document.getElementById("solyplaya");
    var imagenAventura = document.getElementById("imagenAventura");
    var imagenRomance = document.getElementById("imagenRomance");
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
        opcionRomance.style.opacity = opacity + '%';
        opcionSolYPlaya.style.opacity = opacity + '%';
        imagenAventura.style.transform = "scale("+scale+")";
        imagenRomance.style.transform = "scale("+scale+")";
        imagenSolYPlaya.style.transform = "scale("+scale+")";
        if(scale > 1.01){
          scale = scale - 0.005;
        }
        opacity = opacity + 0.5;
      }
    }

    /* FIN Carga de menú principal */

  }



  /* Al pasar ratón por encima de opciones */
  overMostrarOpcionAventura(){
    if(document.getElementById("imagenAventura").style.transform == "scale("+1.005+")"){
      document.getElementById("aventura").style.cursor = "pointer";
      var fondoNegro = document.getElementById("fondoNegroAventura");
      if(fondoNegro.style.opacity == ''){
        fondoNegro.style.opacity = 0 + '%';
      }
      clearInterval(this.id_mostrarContenidoOpcionAventura);
      this.id_mostrarContenidoOpcionAventura = setInterval(movimientoContenidoAventura, 10);
      var opacity = 0;
      function movimientoContenidoAventura(){
        if(opacity > 100){
          clearInterval(this.id_mostrarContenidoOpcionAventura);
        }else{
          fondoNegro.style.opacity = opacity + '%';
          opacity = opacity + 4;
        }
      }
    }
  }

  leaveMostrarOpcionAventura(){
    clearInterval(this.id_mostrarContenidoOpcionAventura);
    var fondoNegro = document.getElementById("fondoNegroAventura");
    this.id_mostrarContenidoOpcionAventura = setInterval(movimientoContenidoAventura, 10);
    var opacity = Math.round(parseFloat(fondoNegro.style.opacity)*100);
    function movimientoContenidoAventura(){
      if(opacity < 0){
        clearInterval(this.id_mostrarContenidoOpcionAventura);
      }else{
        fondoNegro.style.opacity = opacity + '%';
        opacity = opacity - 4;
      }
    }
  }

  overMostrarOpcionRomance(){
    if(document.getElementById("imagenRomance").style.transform == "scale("+1.005+")"){
      document.getElementById("romance").style.cursor = "pointer";
      var fondoNegro = document.getElementById("fondoNegroRomance");
      if(fondoNegro.style.opacity == ''){
        fondoNegro.style.opacity = 0 + '%';
      }
      clearInterval(this.id_mostrarContenidoOpcionRomance);
      this.id_mostrarContenidoOpcionRomance = setInterval(movimientoContenidoRomance, 10);
      var opacity = 0;
      function movimientoContenidoRomance(){
        if(opacity > 100){
          clearInterval(this.id_mostrarContenidoOpcionRomance);
        }else{
          fondoNegro.style.opacity = opacity + '%';
          opacity = opacity + 4;
        }
      }
    }
  }

  leaveMostrarOpcionRomance(){
    clearInterval(this.id_mostrarContenidoOpcionRomance);
    var fondoNegro = document.getElementById("fondoNegroRomance");
    this.id_mostrarContenidoOpcionRomance = setInterval(movimientoContenidoRomance, 10);
    var opacity = Math.round(parseFloat(fondoNegro.style.opacity)*100);
    function movimientoContenidoRomance(){
      if(opacity < 0){
        clearInterval(this.id_mostrarContenidoOpcionRomance);
      }else{
        fondoNegro.style.opacity = opacity + '%';
        opacity = opacity - 4;
      }
    }
  }

  overMostrarOpcionSolYPlaya(){
    if(document.getElementById("imagenSolYPlaya").style.transform == "scale("+1.005+")"){
      document.getElementById("solyplaya").style.cursor = "pointer";
      var fondoNegro = document.getElementById("fondoNegroSolYPlaya");
      if(fondoNegro.style.opacity == ''){
        fondoNegro.style.opacity = 0 + '%';
      }
      clearInterval(this.id_mostrarContenidoOpcionSolYPlaya);
      this.id_mostrarContenidoOpcionSolYPlaya = setInterval(movimientoContenidoSolYPlaya, 10);
      var opacity = 0;
      function movimientoContenidoSolYPlaya(){
        if(opacity > 100){
          clearInterval(this.id_mostrarContenidoOpcionSolYPlaya);
        }else{
          fondoNegro.style.opacity = opacity + '%';
          opacity = opacity + 4;
        }
      }
    }
  }

  leaveMostrarOpcionSolYPlaya(){
    clearInterval(this.id_mostrarContenidoOpcionSolYPlaya);
    var fondoNegro = document.getElementById("fondoNegroSolYPlaya");
    this.id_mostrarContenidoOpcionSolYPlaya = setInterval(movimientoContenidoSolYPlaya, 10);
    var opacity = Math.round(parseFloat(fondoNegro.style.opacity)*100);
    function movimientoContenidoSolYPlaya(){
      if(opacity < 0){
        clearInterval(this.id_mostrarContenidoOpcionSolYPlaya);
      }else{
        fondoNegro.style.opacity = opacity + '%';
        opacity = opacity - 4;
      }
    }
  }

  /* FIN Al pasar ratón por encima de opciones */

}
