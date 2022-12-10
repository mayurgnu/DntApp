import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styles: [
  ]
})
export class EventsComponent {
  displayVal='';
  disableprop = false;
  ifelseshow=true;
  elseifclr='red';
  switchcaseclr='red';
  forSimplexArray=['A','B','C'];
  forComplexArray=[{id:1,name:'A'},{id:2,name:'B'},{id:3,name:'C'}];
  forNestedArray=[
    {id:1,name:'A',socialAccounts:['fb','wtsp','ig']},
    {id:2,name:'B',socialAccounts:['linkedin','wtsp','ig']},
    {id:3,name:'C',socialAccounts:['fb','telegram','ig']}];
    stylecolor='green';
    styleBgcolor='red';
  fnClick(val:any){
    this.displayVal = val;
    this.disableprop = !this.disableprop;
    this.ifelseshow=!this.ifelseshow;
    this.elseifclr=this.elseifclr === 'red' ? 'green' : 'red';
    this.switchcaseclr= (this.switchcaseclr === 'red' || this.switchcaseclr === 'yellow') ? 'blue' : 'yellow';
    this.stylecolor=this.stylecolor == 'red' ? 'green' : 'red';
    this.styleBgcolor=this.styleBgcolor == 'red' ? 'green' : 'red';
  };

  fnInput(val:any){
    console.log(val)
  };
}
