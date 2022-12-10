import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './account/register/register.component';
import { ParentComponent } from './datatransfer/parent/parent.component';
import { BasicformsComponent } from './demo/basicforms/basicforms.component';
import { EventsComponent } from './demo/events/events.component';
import { MaterialuiComponent } from './demo/materialui/materialui.component';
import { PageNotFound404Component } from './errormodule/page-not-found404/page-not-found404.component';
import { DemoformComponent } from './formtutorial/demoform/demoform.component';
import { AboutusComponent } from './routemodule/aboutus/aboutus.component';
import { CareersComponent } from './routemodule/careers/careers.component';
import { ContactusComponent } from './routemodule/contactus/contactus.component';
import { RoutetutorialComponent } from './routemodule/routetutorial/routetutorial.component';

const routes: Routes = [
  { path: '', component: ParentComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'events', component: EventsComponent },
  { path: 'basicforms', component: BasicformsComponent },
  { path: 'materialui', component: MaterialuiComponent },
  { path: 'datatransfer', component: ParentComponent },
  { path: 'forms', component: DemoformComponent },
  { path: 'route', component: RoutetutorialComponent},
  { path: 'route/:param3007', component: RoutetutorialComponent,
    children:[
      { path: 'contactus', component: ContactusComponent},
      { path: 'careers', component: CareersComponent},
      { path: 'aboutus', component: AboutusComponent}
    ]
   },
  { path : 'LazyLoadUser', loadChildren:()=>import('./userlazyloadingmodule/userlazyloadingmodule.module')
      .then(mode=>mode.UserlazyloadingmoduleModule)
  },
  { path : 'LazyLoadAdmin', loadChildren:()=>import('./adminlazyloadingmodule/adminlazyloadingmodule.module')
      .then(mode=>mode.AdminlazyloadingmoduleModule)
  },
  { path: '**', component: PageNotFound404Component }  
  //NOTE : This type of route(wildcard routes) must be at last. 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
