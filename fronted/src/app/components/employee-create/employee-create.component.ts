import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css'],
})

export class EmployeeCreateComponent implements OnInit {

  productForm: FormGroup = new FormGroup({});
  productName: any;

  constructor(public fb: FormBuilder, private router: Router) {

    const productData = localStorage.getItem('productInfo');

    if (productData !== undefined && productData !== null && productData !== '') {
      this.productName = JSON.parse(productData)?.name;
    }

  }

  ngOnInit() {

    this.productForm = this.fb.group({
      name: ['', [Validators.required]]
    });

    this.productForm?.get('name')?.setValue(this.productName);
  }

  get name() { return this.productForm.get("name") }


  onSubmit() {
    if (this.productForm.valid) {

      let Obj = {
        name: this.productForm?.get('name')?.value
      }

      localStorage.setItem('productInfo', JSON.stringify(Obj));

      this.router.navigate(['/create-categary']).then(() => { });

    } else {
      this.productForm.markAllAsTouched();
    }
  }
}
