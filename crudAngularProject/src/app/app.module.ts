import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ourComponent } from './ourcomponent';
import { newe } from './NewComp';
import { a } from './comp';
import { ChieldComponent } from './chield/chield.component';
import { ParentComponent } from './parent/parent.component';
import { HeaderComponent } from './view/header/header.component';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { RegistrationComponent } from './view/registration/registration.component';
import { ViewComponent } from './view/view/view.component';
@NgModule({
  declarations: [
    AppComponent,
//EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    ourComponent,newe,a, ChieldComponent, ParentComponent, HeaderComponent, HomeComponent, LoginComponent, RegistrationComponent, ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

