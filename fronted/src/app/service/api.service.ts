import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  [x: string]: any;
  baseUri: string = 'http://localhost:5100/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  // Create
  createEmployee(data): Observable<any> {
    let url = `${this.baseUri}/createProduct`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  // Get all employees
  getEmployees() {
    return this.http.get(`${this.baseUri}/products`);
  }

  // Get employee
  getEmployee(id): Observable<any> {
    let url = (`${this.baseUri}/product/id` + "?" + "_id=" + id);
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  // Update employee
  updateEmployee(data): Observable<any> {
    let url = `${this.baseUri}/updateProduct`;
    return this.http
      .put(url, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  // Delete employee
  deleteEmployee(id): Observable<any> {
    let url = (`${this.baseUri}/deleteProduct/id` + "?" + "_id=" + id);
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }


  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}
