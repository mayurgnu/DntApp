import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routetutorial',
  templateUrl: './routetutorial.component.html',
})
export class RoutetutorialComponent {
  querystringparam:any='';
  constructor(private route3007:ActivatedRoute){}
  ngOnInit(): void {
    this.querystringparam=this.route3007.snapshot.paramMap.get('param3007')
  }
}
