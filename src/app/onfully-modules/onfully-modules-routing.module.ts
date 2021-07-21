import { importType } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnfullyModulesComponent } from './onfully-modules.component';

const routes: Routes = [
  {
    path:'',
    component:OnfullyModulesComponent,
    children:[
      {
        path:'',
        loadChildren: ()=>import('./home/home.module').then(m=>m.HomeModule)
      },
      {
        path:'about',
        loadChildren: ()=>import('./about-us/about-us.module').then(m=>m.AboutUsModule)
      },
      {
        path:'contact',
        loadChildren: ()=>import('./contact/contact.module').then(m=>m.ContactModule)
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes,)],
  exports: [RouterModule]
})
export class OnfullyModulesRoutingModule { }
