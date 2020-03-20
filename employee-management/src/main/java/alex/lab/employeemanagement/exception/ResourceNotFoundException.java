/*
 * Exception handler for resource not found error
 */


package alex.lab.employeemanagement.exception;

public class ResourceNotFoundException extends Exception{
	
	private static final long serialVersionUID = 1L;

	public ResourceNotFoundException(String message) {
		super(message);
	}

}
