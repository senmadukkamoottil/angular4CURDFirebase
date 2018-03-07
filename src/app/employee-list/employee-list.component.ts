import { Component, OnInit } from '@angular/core';
import { ManageEmployeeService } from '../shared/manage-employee.service';
// import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Employee } from '../employee-model/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  items: Observable<any[]>;
  constructor(private employeeService: ManageEmployeeService, private route: Router) {
    // this.items = db.collection('items').valueChanges();
   }

  editEmployee(employee: Employee) {
    console.log(employee.id);
    this.route.navigate(['addemployee', employee]);
  }

  ngOnInit() {
    this.items = this.employeeService.getData();
  }

}
