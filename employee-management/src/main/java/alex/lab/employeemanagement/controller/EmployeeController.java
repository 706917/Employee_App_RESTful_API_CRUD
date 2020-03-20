/*
 * Spring Rest Controller
 */

package alex.lab.employeemanagement.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import alex.lab.employeemanagement.exception.ResourceNotFoundException;
import alex.lab.employeemanagement.model.Employee;
import alex.lab.employeemanagement.repository.EmployeeRepository;


@RestController @CrossOrigin(origins = "http://127.0.0.1:8080")
@RequestMapping("/api/v1")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	// Get all employees
	@GetMapping("/employees")
	public List<Employee> getAllEmployee(){
		return employeeRepository.findAll();
	}
	
	// Get employee by id
	@GetMapping("/employees/{id}")
	public ResponseEntity <Employee> getEmployeeById(@PathVariable(value ="id") Long employeeId)
		throws ResourceNotFoundException{
		Employee employee = employeeRepository.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));
						
		return ResponseEntity.ok().body(employee);
	}
	
	// Add employee
	@PostMapping("/employees")
	public Employee createEmployee(@Valid @RequestBody Employee employee) {		
		return employeeRepository.save(employee);		
	}
	
	// Update employee
	@PutMapping("employee/{id}")
	public ResponseEntity<Employee> updateEmployee(@Valid @RequestBody Employee employeeDetails, @PathVariable(value="id") Long employeeId) 
		throws ResourceNotFoundException{
		
			Employee employee = employeeRepository.findById(employeeId)
					.orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));
			
			employee.setFirstName(employeeDetails.getFirstName());
			employee.setLastName(employeeDetails.getLastName());
			employee.setEmailId(employeeDetails.getEmailId());
			
			final Employee updatedEmployee = employeeRepository.save(employee);
		
		return ResponseEntity.ok(updatedEmployee);
	}
	
	@DeleteMapping("employees/{id}")
	public Map <String, Boolean> deleteEmployee(@PathVariable(value="id") Long employeeId)
		throws ResourceNotFoundException{
		
			Employee employee = employeeRepository.findById(employeeId)
					.orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));
			
			employeeRepository.delete(employee);
			
			Map<String, Boolean> responce = new HashMap<>();
			responce.put("deleted", Boolean.TRUE);
						
			return responce;			
	}
	
	
	
	
	

}
