import { Injectable } from '@angular/core';
import { Customers } from './models/customer.model'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
//import { Customer } from './createcustomer/createcustomer.component';
import { Customer
 } from './models/customer.model';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  edit:any;


  private getToken(): string | null {
    // Implement a function to get the JWT token from where you store it (e.g., localStorage, cookies)
    // Return null or handle cases when the token is not available
    return localStorage.getItem('jwt_token');
  }

  private getHeaders(): HttpHeaders {
    const token = this.getToken();
    if (token) {
      return new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` });
    }
    return new HttpHeaders({ 'Content-Type': 'application/json' });
  }


  //GET all customers - working fine
  getAllCustomers(): Observable<Customers[]> {
    const url = `http://localhost:8080/customer/fetchAll`;
    const headers = this.getHeaders();
    return this.http.get<Customers[]>(url, { headers });
  }

  //EDIT customer - not working fine
  updateCustomer(customerId: number, updatedInfo: any): Observable<any> {
    const url = `http://localhost:8080/customer/update/${customerId}`; // Replace with your API endpoint for updating customers
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(url, updatedInfo, { headers });
  }

  deleteCustomer(id: number): Observable<void> {
    const url = `http://localhost:8080/customer/delete/${id}`;
    const headers = this.getHeaders();
    return this.http.delete<void>(url, { headers });
  }

  createCustomer(customer: Customer): Observable<Object> {
    const url = `http://localhost:8080/customer/create`;
    const headers = this.getHeaders();
    return this.http.post(url, customer, { headers });
  }

  getCustomer(id: number): Observable<Customer> {
    const url = `http://localhost:8080/customer/fetch/${id}`;
    const headers = this.getHeaders();
    return this.http.get<Customers>(url, { headers });
  }
}


