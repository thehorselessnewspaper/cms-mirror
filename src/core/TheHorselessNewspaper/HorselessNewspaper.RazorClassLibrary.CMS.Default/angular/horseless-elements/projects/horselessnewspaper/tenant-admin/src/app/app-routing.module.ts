import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OperatorSurfaceComponent } from './operatorSurface/operatorSurface.component';

const routes: Routes = [
  {
    path: '',
    component: OperatorSurfaceComponent
   },
   { path: '**', component: OperatorSurfaceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
