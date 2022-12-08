import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events/events.component';
import { BasicformsComponent } from './basicforms/basicforms.component';
import { FormsModule } from '@angular/forms';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    EventsComponent,
    BasicformsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbAccordionModule
  ]
})
export class DemoModule { }
