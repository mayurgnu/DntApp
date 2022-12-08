import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events/events.component';
import { BasicformsComponent } from './basicforms/basicforms.component';
import { FormsModule } from '@angular/forms';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialuiComponent } from './materialui/materialui.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';



@NgModule({
  declarations: [
    EventsComponent,
    BasicformsComponent,
    MaterialuiComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbAccordionModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatBadgeModule
  ]
})
export class DemoModule { }
