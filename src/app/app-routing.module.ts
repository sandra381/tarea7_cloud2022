import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OperacionComponent } from './components/operacion/operacion.component';

const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'operacion',component: OperacionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
