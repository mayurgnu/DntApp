import { Component, EventEmitter, Output,  } from '@angular/core';

@Component({
  selector: 'app-parent2child',
  templateUrl: './parent2child.component.html',
})
export class Parent2childComponent {
  @Output() childOutPutVariable = new EventEmitter<any>();
}
