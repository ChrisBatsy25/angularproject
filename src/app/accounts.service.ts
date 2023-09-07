import { Injectable } from '@angular/core';
import { Account, Accounts } from './models/accounts.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http:HttpClient) { }

  custId:any;


  private getToken(): string | null {
    // Implement a function to get the JWT token from where you store it (e.g., localStorage, cookies)
    // Return null or handle cases when the token is not available
    return localStorage.getItem('jwt_token');
  }

  private getHeaders(): HttpHeaders {
    const token = this.getToken();
    if (token) {
      return new HttpHeaders({ 'Content-Type': 'text', 'Authorization': `Bearer ${token}` });
    }
    return new HttpHeaders({ 'Content-Type': 'text' });
  }
  getAccountsForCustomer(id: number): Observable<Accounts[]> {
        const url = `http://localhost:8080/account/fetchALL/${id}`;
        console.log(url)
         return this.http.get<Accounts[]>(url);
       }


      createAccount(account: Account , customerId:number): Observable<Object> {
        const url = `http://localhost:8080/account/create/${customerId}`; //change the url
       // const headers = this.getHeaders();
        return this.http.post(url, account);
      }

      deleteAccount(customerId: number , accountNumber :string): Observable<void> {
        const url = `http://localhost:8080/account/delete/${customerId}/${accountNumber}`;
        const headers = this.getHeaders();
         return this.http.delete<void>(url, { headers });
        
      }
}


