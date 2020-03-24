import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService, EmloyeeService } from '../emloyee.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.sass']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number;
  employee: Employee;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmloyeeService
  ) { }

  ngOnInit(): void {
    this.employee = new Employee;
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['/employee']);
  }

}
