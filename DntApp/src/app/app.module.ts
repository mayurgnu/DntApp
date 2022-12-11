import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AccountModule } from './account/account.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoModule } from './demo/demo.module';
import { ProductService } from './Services/product.service';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatatransferModule } from './datatransfer/datatransfer.module';
import { FormtutorialModule } from './formtutorial/formtutorial.module';
import { RoutemoduleModule } from './routemodule/routemodule.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule,
    HttpClientModule,
    FormsModule,
    DemoModule,
    NgbModule,
    DatatransferModule,
    FormtutorialModule,
    RoutemoduleModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
