import { Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './pages/registro/registro.component';
/*import { ParqueaderoComponent } from './components/parqueadero/parqueadero.component';*/
import { TarifaComponent } from './components/tarifa/tarifa.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ContratoComponent } from './components/contrato/contrato.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { AdministracionClientesComponent } from './components/administracion-clientes/administracion-clientes.component';
import { HorarioComponent } from './components/horario/horario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'iniciarSesion', component: IniciarSesionComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'usuarios', component: UsuarioComponent },
    { path: 'tarifa', component: TarifaComponent },
    { path: 'contrato', component: ContratoComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'lista-clientes', component: PerfilComponent },
    { path: 'administracion-clientes-lista', component: AdministracionClientesComponent},
    {path:'seccionHorarios',component:HorarioComponent}
  ];