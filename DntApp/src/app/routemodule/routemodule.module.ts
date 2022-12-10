import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoutetutorialComponent } from './routetutorial/routetutorial.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CareersComponent } from './careers/careers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [
    RoutetutorialComponent,
    AboutusComponent,
    CareersComponent,
    ContactusComponent,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    RouterModule,//importing this we can use routerLink in a tag.
    BrowserAnimationsModule,
    MatTabsModule
  ]
})
export class RoutemoduleModule { }
