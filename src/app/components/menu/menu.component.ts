import { Component, OnInit } from '@angular/core';
import { PanelMenuComponent } from '../panel-menu/panel-menu.component';

@Component({
  providers:[PanelMenuComponent],
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  public id_mostrarContenidoOpcionAventura;
  public id_mostrarContenidoOpcionRomance;
  public id_mostrarContenidoOpcionSolYPlaya;

  constructor(private panelComp: PanelMenuComponent) { }

  ngOnInit(): void {


    /* Crear y capturar elementos */

    var id_movimiento_imagenes;
    var opcionAventura = document.getElementById("aventura");
    var opcionRomance = document.getElementById("romance");
    var opcionSolYPlaya = document.getElementById("solyplaya");
    var imagenAventura = document.getElementById("imagenAventura");
    var imagenRomance = document.getElementById("imagenRomance");
    var imagenSolYPlaya = document.getElementById("imagenSolYPlaya");
    var scale = 2;
    var opacity = 0;

    var menu_principal = document.getElementById("menu_principal"); 

    /* FIN Crear y capturar elementos */



    /* Carga de menú principal */

    menu_principal.style.display = "flex";

    id_movimiento_imagenes = setInterval(movimientoImagenes, 10);

    // Funcion que hace el movimiento de las imágenes cuando carga el componente
    function movimientoImagenes(){
      if(opacity > 100){
        document.getElementById("botonMenuMasOpciones").style.cursor = "pointer";
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



  /* Al pasar ratón por encima de opciones entra al over, al salir entra a leave */

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



  /* Funcion que se llama al clickear el boton de botonMenuMasOpciones */

  abrirPanel(){
    this.panelComp.cargarPanel();
  }



}
