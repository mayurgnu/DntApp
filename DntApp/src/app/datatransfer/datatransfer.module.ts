import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { UserChildComponent } from './user-child/user-child.component';



@NgModule({
  declarations: [
    ChildComponent,
    ParentComponent,
    UserChildComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DatatransferModule { }
