import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  constructor() { }
  normalvalue=3007;
  @Input() fromparent1 = 0;
  @Input() fromparent2 = 0;
}
