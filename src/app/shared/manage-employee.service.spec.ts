import { TestBed, inject } from '@angular/core/testing';

import { ManageEmployeeService } from './manage-employee.service';

describe('ManageEmployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageEmployeeService]
    });
  });

  it('should be created', inject([ManageEmployeeService], (service: ManageEmployeeService) => {
    expect(service).toBeTruthy();
  }));
});
