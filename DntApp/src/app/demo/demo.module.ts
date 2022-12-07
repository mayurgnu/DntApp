import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events/events.component';
import { BasicformsComponent } from './basicforms/basicforms.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EventsComponent,
    BasicformsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DemoModule { }
