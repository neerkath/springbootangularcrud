import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { Employee } from "../employee";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-update-employee",
  templateUrl: "./update-employee.component.html",
  styleUrls: ["./update-employee.component.css"]
})
export class UpdateEmployeeComponent implements OnInit{
  employee:Employee=new Employee();
   id:number;

  constructor(private employeeService: EmployeeService,
    private router: ActivatedRoute,
    private route: Router) {}

    ngOnInit():void {
      //this.employee = new Employee();
  
      this.id = this.router.snapshot.params['id'];
      
      this.employeeService.getEmployeeById(this.id).subscribe(data => {
          console.log(data)
          this.employee = data;
        }, error => console.log(error));
    }
  
    
  
    onSubmit() {
      
    
      this.employeeService.updateEmployee(this.id,this.employee)
      .subscribe(data => {
    this.gotoEmployeeList();
  } ,error=>console.log(error));   
  }
  
  gotoEmployeeList() {
    this.route.navigate(['/employees']);
  }
}