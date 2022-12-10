import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlazyloadingmoduleRoutingModule } from './userlazyloadingmodule-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    LoginComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    UserlazyloadingmoduleRoutingModule
  ]
})
export class UserlazyloadingmoduleModule { }
