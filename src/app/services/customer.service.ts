import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = 'http://localhost:3000/customer';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl, { responseType: 'json' });
  }

  getCustomer(id: number): Observable<Customer> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Customer>(url);
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer);
  }

  updateCustomer(customer: Customer): Observable<any> {
    const url = `${this.apiUrl}/${customer.id}`;
    return this.http.put(url, customer);
  }

  deleteCustomer(id: number): Observable<Customer> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Customer>(url);
  }
}
