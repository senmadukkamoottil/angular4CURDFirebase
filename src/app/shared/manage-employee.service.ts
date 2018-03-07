import { Injectable } from '@angular/core';
import { Employee } from '../employee-model/employee.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ManageEmployeeService {

  // employeeList: AngularFireList<any>;
  items: Observable<any[]>;
  employeeCollection: AngularFirestoreCollection<Employee>;
  selectedEmployee: Employee = new Employee();
  constructor(private db: AngularFirestore) {
    this.employeeCollection = db.collection('items');
  }

  getData() {
    this.items = this.db.collection('items').valueChanges();
    return this.items;
    // to get id modify code
    // this.items = this.db.collection('items').snapshotChanges().map(changes => {
    //   return changes.map(a => {
    //     const data = a.payload.doc.data() as Employee;
    //     data.id = a.payload.doc.id;
    //   });
    // });
    // return this.items;
  }

  insertEmployee(employee: Employee) {
    this.employeeCollection.add(employee);
    /*this.employeeList.push({
        name: employee.name,
        position: employee.position,
        office: employee.offic
        salary: employee.salary
      });*/
  }

  editEmployee(employee: Employee) {
    console.log('edit' + employee.name);
  }

}
