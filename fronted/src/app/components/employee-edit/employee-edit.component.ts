// import { Employee } from './../../model/employee';
import { Employee } from './../../model/Employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators, AnyForUntypedForms } from '@angular/forms';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
})

export class EmployeeEditComponent implements OnInit {

  editForm: FormGroup = new FormGroup({});
  productId: any;
  employeeData: Employee[];

  constructor(public fb: FormBuilder, private actRoute: ActivatedRoute, private apiService: ApiService, private router: Router) {
    this.productId = this.actRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {

    this.editForm = this.fb.group({
      id: ['', []],
      name: ['', [Validators.required]],
      categary: ['', [Validators.required]],
    });

    this.getEmployee();
  }


  get name() { return this.editForm.get("name") }
  get categary() { return this.editForm.get("categary") }
  

  getEmployee() {
    this.apiService.getEmployee(this.productId).subscribe((data: any) => {
      let BindData = data;

      BindData?.map((pData: any) => {
        this.editForm?.get('id')?.setValue(pData?._id);
        this.editForm?.get('name')?.setValue(pData?.name);
        this.editForm?.get('categary')?.setValue(pData?.categary);
      });
    })
  }


  onSubmit() {
    if (this.editForm.valid) {

      let Obj = {
        "_id": this.editForm?.get('id')?.value,
        "name": this.editForm?.get('name')?.value,
        "categary": this.editForm?.get('categary')?.value
      }

      this.apiService.updateEmployee(Obj).subscribe((data: any) => {

      });
      this.router.navigate(['/employees-list']);

    } else {
      this.editForm.markAllAsTouched();
    }
  }
}
