import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { RegistrarUbicacionComponent } from './registrar-ubicacion/registrar-ubicacion.component';
import { ConductorInicioComponent } from './conductor-inicio/conductor-inicio.component';
import { EncargadoInicioComponent } from './encargado-inicio/encargado-inicio.component';
import { RegistrarServicioComponent } from './registrar-servicio/registrar-servicio.component';
import { AdminInicioComponent } from './admin-inicio/admin-inicio.component';
import { ClienteInicioComponent } from './cliente-inicio/cliente-inicio.component';
import { authGuard } from './guards/auth.guard';
import { ServiciosDisponiblesComponent } from './servicios-disponibles/servicios-disponibles.component';


export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'}, // Redirige a login la ruta root
    { path: 'login', component: LoginComponent}, // Cargamos el componente de login
    { path: 'registrar', component: RegistrarComponent },
    { path: 'registrar-ubicacion', component: RegistrarUbicacionComponent },
    { path: 'conductor-inicio', component: ConductorInicioComponent, canActivate: [authGuard]},
    { path: 'encargado-inicio', component: EncargadoInicioComponent, canActivate: [authGuard] },
    { path: 'admin-inicio', component: AdminInicioComponent, canActivate: [authGuard], children: [
        { path: 'registrar-servicio', component: RegistrarServicioComponent, canActivate: [authGuard] }
    ] },
    { path: 'cliente-inicio', component: ClienteInicioComponent, canActivate: [authGuard], children: [
        {path: 'servicios-disponibles', component: ServiciosDisponiblesComponent}
    ] },
];
