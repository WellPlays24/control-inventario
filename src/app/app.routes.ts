import { Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { TransaccionesComponent } from './pages/transacciones/transacciones.component';
import { NuevaTransaccionComponent } from './pages/nueva-transaccion/nueva-transaccion.component';

export const routes: Routes = [

    {path: '', component: InicioComponent},
    {path: 'transacciones', component: TransaccionesComponent},
    {path: 'nueva-transaccion', component: NuevaTransaccionComponent},


];
