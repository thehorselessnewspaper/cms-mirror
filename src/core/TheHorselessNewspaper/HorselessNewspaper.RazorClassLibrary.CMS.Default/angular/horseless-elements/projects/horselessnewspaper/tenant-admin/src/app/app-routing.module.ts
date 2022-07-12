import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OperatorSurfaceComponent } from './operatorSurface/operatorSurface.component';
import { PrincipalChooserComponent } from './../../../../wizardcontroller/horseless-tags-library/src/lib/modules/principal-chooser/principal-chooser.component';
import { ContentCollectionChooserComponent } from './../../../../wizardcontroller/horseless-tags-library/src/lib/modules/contentCollection-chooser/contentCollection-chooser.component';
import { NugetChooserComponent } from './../../../../wizardcontroller/horseless-tags-library/src/lib/modules/nuget-chooser/nuget-chooser.component';

const routes: Routes = [
  {
    path: 'tenants',
    component: OperatorSurfaceComponent
  },
  {
    path: 'principals',
    component: PrincipalChooserComponent
  },
  {
    path: 'contentCollections',
    component: ContentCollectionChooserComponent
  },
  {
    path: 'nugets',
    component: NugetChooserComponent
  },
   { path: '**', component: OperatorSurfaceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
