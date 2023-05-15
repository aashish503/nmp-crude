import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})

export class EmployeeListComponent implements OnInit {
  Employee: any = [];

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];
  restService: any;

  constructor(private apiService: ApiService) {
    
  }

  ngOnInit() {

    this.readEmployee();
  }

  onTableDataChange(event: any) {
    this.page = event;
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }


  readEmployee() {
    this.apiService.getEmployees().subscribe((data) => {
      this.Employee = data;
    });
  }

  removeEmployee(employee, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteEmployee(employee._id).subscribe((data) => {
        this.Employee.splice(index, 1);
      });
    }
  }


}
