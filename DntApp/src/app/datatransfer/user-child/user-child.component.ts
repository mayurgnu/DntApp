import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-child',
  templateUrl: './user-child.component.html',
  styleUrls: ['./user-child.component.css']
})
export class UserChildComponent {
  @Input() fromParntComponent:{name:string,email:string}= {name:'',email:''};
}
