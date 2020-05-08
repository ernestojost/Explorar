// Importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { MenuComponent } from './components/menu/menu.component';
import { CargaMenuComponent } from './components/carga-menu/carga-menu.component';


// Array de rutas
const appRoutes: Routes = [
    {path: '', component: CargaMenuComponent},
    {path: 'menu', component: MenuComponent},
    {path: '**', component: CargaMenuComponent}
];

// Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);