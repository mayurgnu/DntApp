import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  sendToChild1=10;
  sendToChild2=10;
  fnUpdatesendToChildValue()
  {
    this.sendToChild1 = Math.floor(Math.random()*10); 
    this.sendToChild2 = Math.floor(Math.random()*10); 
  }
}
