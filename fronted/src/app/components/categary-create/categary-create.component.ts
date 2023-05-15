import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-categary-create',
  templateUrl: './categary-create.component.html',
  styleUrls: ['./categary-create.component.css']
})
export class CategaryCreateComponent implements OnInit {

  categaryForm: FormGroup = new FormGroup({});
  productName: any;

  constructor(public fb: FormBuilder, private router: Router, private apiService: ApiService) {

    const productData = localStorage.getItem('productInfo');

    if (productData !== undefined && productData !== null && productData !== '') {
      this.productName = JSON.parse(productData)?.name;
    }

  }

  ngOnInit(): void {

    this.categaryForm = this.fb.group({
      categary: ['', [Validators.required]],
      name: ['', []],
    });

  }

  get categary() { return this.categaryForm.get("categary") }

  onSubmit() {
    if (this.categaryForm.valid) {

      let Obj = {
        categary: this.categaryForm?.get('categary')?.value,
        name: this.productName
      }

      this.apiService.createEmployee(Obj).subscribe(res => {
      })

      this.router.navigate(['/employees-list']).then(() => { });
      localStorage.clear();

    } else {
      this.categaryForm.markAllAsTouched();
    }
  }

}
