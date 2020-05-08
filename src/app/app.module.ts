import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PanelMenuComponent } from './components/panel-menu/panel-menu.component';
import { CargaMenuComponent } from './components/carga-menu/carga-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PanelMenuComponent,
    CargaMenuComponent
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
