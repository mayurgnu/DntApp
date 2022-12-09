import { Component } from '@angular/core';
import { NgForm,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-demoform',
  templateUrl: './demoform.component.html',
  styleUrls: ['./demoform.component.css']
})
export class DemoformComponent {
  fnSubmit(form:any){
    console.log(form);
  }
//loginReactiveform=new FormGroup({
    //ReactUserName:new FormControl('mayur patel')
    //ReactEmail:new FormControl('mayur@123')
    //ReactPassword:new FormControl('123') 
//})
  loginReactiveform=new FormGroup({
    ReactUserName:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]+$")]),
    ReactEmail:new FormControl('',[Validators.required,Validators.email]),
    ReactPassword:new FormControl('',[Validators.required,Validators.minLength(5)]),
  });
  fnReactiveSubmit(){
    this.isSubmitted=true;
  }
  get ReactUserName() { return this.loginReactiveform.get('ReactUserName')}
  get ReactEmail() { return this.loginReactiveform.get('ReactEmail')}
  get ReactPassword() { return this.loginReactiveform.get('ReactPassword')}
  isSubmitted:boolean=false;
}
