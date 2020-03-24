import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee";
import { EmloyeeService } from '../emloyee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.sass']
})
export class CreateEmployeeComponent implements OnInit {

  emloyee: Employee = new Employee();
  submitted = false;

  constructor(
    private emplyeeService: EmloyeeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  newEmpoyee(): void{
    this.submitted = false;
    this.emloyee = new Employee();
  }

  save() {
    this.emplyeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }

}
