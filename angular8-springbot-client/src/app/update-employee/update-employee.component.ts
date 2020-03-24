import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../emloyee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.sass']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  empoyee: Employee;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.emloyee = new Employee;
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployee(this.id)
      .subscrube(data => {
        console.log(data);
        this.empoyee = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.empoyee)
      .subscrube(data => console.log(data), error => console.log(error));
    this.empoyee = new Employee;
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['employees']);    
  }

  onSubmit() {
    this.updateEmployee();
  }

  
  }

}
