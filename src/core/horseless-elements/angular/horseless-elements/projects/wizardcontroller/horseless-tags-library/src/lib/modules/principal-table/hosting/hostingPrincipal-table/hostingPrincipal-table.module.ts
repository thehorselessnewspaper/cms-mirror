import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostingPrincipalTableComponent } from './hostingPrincipal-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HostingPrincipalTableComponent],
  exports: [HostingPrincipalTableComponent]
})
export class HostingPrincipalTableModule { }
