import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyloadcontainerComponent } from './lazyloadcontainer/lazyloadcontainer.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
console.log('AdminlazyloadingmoduleRoutingModule');
const routes: Routes = [
  { path : 'login', component:LoginComponent },
  { path : 'list', component:ListComponent },
  { path : 'lazyloadcontainer', component:LazyloadcontainerComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminlazyloadingmoduleRoutingModule { }
