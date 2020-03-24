import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class EmloyeeService {

  private baseurl = 'http:\\localhost:8080/springboot-crud-rest/api/v1/employees';
  constructor(private http: HttpClient) {}

  deleteEmployee(id: number) {
    throw new Error("Method not implemented.");
  }

  getEmployeeList(): Observable<any>{
    return this.http.get('${this.baseUrl}');
  }

  createEmployee(employee: object): Observable<Object> {
    return this.http.post("${this.baseUrl}", employee);
  }

  getEmployee(id: number): Observable<any> {
    return this.http.get('${this.baseUrl}/${id}');
  }

  updateEmployee(id: number, value: any): Observable<object>{
    return this.http.put('${this.baseUrl}/${id}', value)
  }
}
