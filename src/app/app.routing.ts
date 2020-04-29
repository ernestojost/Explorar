// Importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { MenuComponent } from './menu/menu.component'


// Array de rutas
const appRoutes: Routes = [
    {path: '', component: MenuComponent},
    {path: '**', component: MenuComponent}
];

// Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);