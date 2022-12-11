import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
console.log('LazyloadcontainerComponent');
@Component({
  selector: 'app-lazyloadcontainer',
  templateUrl: './lazyloadcontainer.component.html',
  styles: [
  ]
})
export class LazyloadcontainerComponent {
  constructor(private viewContainerRef:ViewContainerRef){}
    async fnLoadLazyLoadComponent(){
      this.viewContainerRef.clear();
      const {LazyloadcomponentComponent} = await import('src/app/lazyloadcomponent/lazyloadcomponent.component');
      this.viewContainerRef.createComponent(LazyloadcomponentComponent);
    }
}
