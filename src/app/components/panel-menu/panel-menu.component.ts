import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'panel-menu',
  templateUrl: './panel-menu.component.html',
  styleUrls: ['./panel-menu.component.css'],
})
export class PanelMenuComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {

  }

  cargarPanel(){
    var panelMenuMasOpciones = document.getElementById("panelMenuMasOpciones");
    var id_animacionPanelMenu = setInterval(movimientoAnimacionPanelMenu, 2);
    var opacity = 0;
    var left = -542;
    this.cambiarVisibilidadFondoPanelMenu();
    function movimientoAnimacionPanelMenu(){
      if(left > 0){
        clearInterval(id_animacionPanelMenu);
      }else{
        if(opacity <= 100){
          panelMenuMasOpciones.style.opacity = opacity + '%';
          opacity += 0.5;
        }
        panelMenuMasOpciones.style.left = left + "px";
        left += 2;
      }
    }
  }

  cerrarPanel(){
    var panelMenuMasOpciones = document.getElementById("panelMenuMasOpciones");
    var id_animacionPanelMenu = setInterval(movimientoAnimacionPanelMenu, 2);
    var opacity = 100;
    var left = 0;
    this.cambiarVisibilidadFondoPanelMenu();
    function movimientoAnimacionPanelMenu(){
      if(left < -542){
        clearInterval(id_animacionPanelMenu);
      }else{
        if(opacity >= 0){
          panelMenuMasOpciones.style.opacity = opacity + '%';
          opacity -= 0.5;
        }
        panelMenuMasOpciones.style.left = left + "px";
        left -= 2;
      }
    }
  }

  cambiarVisibilidadFondoPanelMenu(){
    var fondoPanelMenu = document.getElementById("fondoPanelMenu");
    if(fondoPanelMenu.style.display == "none" || fondoPanelMenu.style.display == ""){
      fondoPanelMenu.style.display = "block";
      var opacity = 0;
      var id_animacionFondoPanelMenu = setInterval(visibilidadFondoPanelMenu, 2);
      function visibilidadFondoPanelMenu(){
        if(opacity > 100){
          clearInterval(id_animacionFondoPanelMenu);
        }else{
          fondoPanelMenu.style.opacity = opacity + '%';
          opacity += 0.5;
        }
      }
    }else{
      var opacity = 100;
      var id_animacionFondoPanelMenu = setInterval(visibilidadFondoPanelMenu, 2);
      function visibilidadFondoPanelMenu(){
        if(opacity < 0){
          fondoPanelMenu.style.display = "none";
          clearInterval(id_animacionFondoPanelMenu);
        }else{
          fondoPanelMenu.style.opacity = opacity + '%';
          opacity -= 0.5;
        }
      }
    }
  }

}
