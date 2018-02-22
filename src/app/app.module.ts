import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AngularFireModule } from 'angularfire2';
import { ManageEmployeeService } from './shared/manage-employee.service';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router/src/config';

const routePaths: Routes = [
  {path: 'addemployee', component: AddEmployeeComponent},
  {path: 'listemployee', component: EmployeeListComponent},
  {path: '**', component: EmployeeListComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routePaths),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [ManageEmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
