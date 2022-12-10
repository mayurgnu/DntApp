import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminlazyloadingmoduleRoutingModule } from './adminlazyloadingmodule-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    LoginComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    AdminlazyloadingmoduleRoutingModule
  ]
})
export class AdminlazyloadingmoduleModule { }
