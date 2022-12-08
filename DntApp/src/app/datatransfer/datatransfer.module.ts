import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { UserChildComponent } from './user-child/user-child.component';
import { Parent2childComponent } from './parent2child/parent2child.component';



@NgModule({
  declarations: [
    ChildComponent,
    ParentComponent,
    UserChildComponent,
    Parent2childComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DatatransferModule { }
