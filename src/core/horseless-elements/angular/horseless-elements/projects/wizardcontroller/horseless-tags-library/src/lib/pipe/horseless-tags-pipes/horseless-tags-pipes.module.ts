import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorselessTagsPipesComponent } from './horseless-tags-pipes.component';
import {ACEPermissionPipe} from './ACEPermission.pipe';
import {StringCoercionPipe} from './stringCoercion.pipe';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HorselessTagsPipesComponent, ACEPermissionPipe, StringCoercionPipe],
  exports: [HorselessTagsPipesComponent, ACEPermissionPipe, StringCoercionPipe]

})
export class HorselessTagsPipesModule { }
