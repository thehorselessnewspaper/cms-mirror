import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorSurfaceComponent } from './operatorSurface.component';
import { TenantChooserModule,  TenantEditorModule } from '../../../../../wizardcontroller/horseless-tags-library/src/public-api';
@NgModule({
  imports: [
    CommonModule,
    TenantChooserModule,
    TenantEditorModule
  ],
  declarations: [OperatorSurfaceComponent]
})
export class OperatorSurfaceModule { }
