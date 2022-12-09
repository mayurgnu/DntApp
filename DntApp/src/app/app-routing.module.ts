import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './account/register/register.component';
import { ParentComponent } from './datatransfer/parent/parent.component';
import { BasicformsComponent } from './demo/basicforms/basicforms.component';
import { EventsComponent } from './demo/events/events.component';
import { MaterialuiComponent } from './demo/materialui/materialui.component';
import { DemoformComponent } from './formtutorial/demoform/demoform.component';

const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'events/:param3007', component: EventsComponent },
  { path: 'basicforms', component: BasicformsComponent },
  { path: 'materialui', component: MaterialuiComponent },
  { path: 'datatransfer', component: ParentComponent },
  { path: 'forms', component: DemoformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
