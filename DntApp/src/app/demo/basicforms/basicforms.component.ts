import { Component, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-basicforms',
  templateUrl: './basicforms.component.html',
  styleUrls: ['./basicforms.component.css'],
})
export class BasicformsComponent {
  mayurdata:any={};
  displayHeading=true;
  fnGetData(data:NgForm)
  {
    this.mayurdata = data;
    console.log(data);
  }
  fnToggleHeading()
  {
    this.displayHeading = !this.displayHeading;
  }
}
