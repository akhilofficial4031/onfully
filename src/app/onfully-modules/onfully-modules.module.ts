import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { OnfullyModulesRoutingModule } from './onfully-modules-routing.module';
import { OnfullyModulesComponent } from './onfully-modules.component';


@NgModule({
  declarations: [
    OnfullyModulesComponent,
  ],
  imports: [
    CommonModule,
    OnfullyModulesRoutingModule,
    SharedModule
  ]
})
export class OnfullyModulesModule { }
