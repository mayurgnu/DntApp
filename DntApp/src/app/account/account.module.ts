import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ CommonModule, FormsModule],
  declarations: [
    RegisterComponent
  ]
})
export class AccountModule { }
