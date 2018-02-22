import { Component, OnInit } from '@angular/core';
import { ManageEmployeeService } from '../shared/manage-employee.service';
// import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  items: Observable<any[]>;
  constructor(private employeeService: ManageEmployeeService) {
    // this.items = db.collection('items').valueChanges();
   }

  ngOnInit() {
   // this.items = this.employeeService.getData();
    this.items.subscribe(a => console.log(a));
  }

}
