import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { UserChildComponent } from './user-child/user-child.component';
import { Parent2childComponent } from './parent2child/parent2child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { USDTOINRPipe } from '../mypipes/usdtoinr.pipe';
import { MergestrPipe } from '../mypipes/mergestr.pipe';



@NgModule({
  declarations: [
    ChildComponent,
    ParentComponent,
    UserChildComponent,
    Parent2childComponent,
    USDTOINRPipe,
    MergestrPipe
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class DatatransferModule { }
