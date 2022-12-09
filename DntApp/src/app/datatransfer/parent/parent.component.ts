import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  sendToChild1=10;
  sendToChild2=10;
  sendtoUserChildCompnent =[
    {name:'ajay',email:'ajay@agmail.com'},
    {name:'bhavin',email:'bhavin@agmail.com'},
    {name:'chetu',email:'chetu@agmail.com'}
  ];
  normalVariable = "x";
  mayur:string = "mayur3007";
  templaterefvariablevalue:any;
  fnUpdatesendToChildValue()
  {
    this.sendToChild1 = Math.floor(Math.random()*10); 
    this.sendToChild2 = Math.floor(Math.random()*10); 
  }

  fnGetchildOutPutVariableInParentComponent(val:any){
    this.normalVariable = val;
  }

  fnGetData(mayur:HTMLInputElement){
    this.templaterefvariablevalue=mayur.value;
  }
  typeScriptTypesVariable:string|number='';
  val1:string|number='';
  val2:string|number='';

  fnTypeScriptDataBasedOnTypes(){
    this.fnGetNumberOrString(10);
    this.fnGetNumberOrString('mayur');
  }
  fnGetNumberOrString(item:string|number){
    if(typeof item === 'number'){
        this.val1 = item * 10;
    }else {
      this.val2 = item;
    }
  }
  //basics of pipes.
  pipevariable:string='Basics Of Pipes...';
  pipevariabledate=Date();
  fnUpperCase(item:string){
    return item.toUpperCase();
  }
  //advance of pipes.
  jsonObj={name:'Ajay',age:28};
}
