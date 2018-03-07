import { Component, OnInit } from '@angular/core';
import { ManageEmployeeService } from '../shared/manage-employee.service';
import { Employee } from '../employee-model/employee.model';

import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  items: Observable<any[]>;
  employee: Employee = {
    $key: '',
    name:  '',
    position: '',
    office: '',
    salary: 0
  };
  // employeeList: AngularFireList<any>;
  constructor(private employeeService: ManageEmployeeService) {
    // this.items = db.collection('items').valueChanges();
   }

   onSubmit() {
    console.log(this.employee.name);
    this.employeeService.insertEmployee(this.employee);
   }

  ngOnInit() {
  }
}
