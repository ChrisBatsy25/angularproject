import { Component } from '@angular/core';
//import userData from './users.json';
import { MatDialog} from "@angular/material/dialog";
import { CreatecustomerComponent } from '../createcustomer/createcustomer.component';
import { Customers } from '../models/customer.model';
import { CustomerService } from '../customer.service';
import { EditcustomerComponent } from '../editcustomer/editcustomer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminmodifycustomer',
  templateUrl: './adminmodifycustomer.component.html',
  styleUrls: ['./adminmodifycustomer.component.css']
})
export class AdminmodifycustomerComponent {
  
  users:Customers[] = [];
  pageSize: number = 5; // Number of items per page
 
  // Pagination
  p: number = 1; // Current page, default to 1

  get pagedUsers(): any[] {
    const startIndex = (this.p - 1) * this.pageSize;
    return this.users.slice(startIndex, startIndex + this.pageSize);
  }
  

  get pages(): number[] {
    const pageCount = Math.ceil(this.users.length / this.pageSize);
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }

  changePage(pageNum: number): void {
    if (pageNum >= 1 && pageNum <= this.pages.length) {
      this.p = pageNum;
    }
  }
  constructor(private dialog:MatDialog,private customerService: CustomerService,private router:Router){}
  
  ngOnInit(): void {
    this.getAllCustomerss();
   }

  onCreate(){
    this.dialog.open(CreatecustomerComponent, {
      
      maxWidth:'750px', // Set desired width
      height:'max-content',
      
      
      
      
       // Set desired height
      position: {
        top: '-600px',
        left:'250px',
        
         // Customize the top position
      },
  
    });
  }

  getAllCustomerss() {
    this.customerService.getAllCustomers().subscribe(customers => {
     this.users = customers;
     });
   }
 
  // onDelete(id:string){te
  //   this.customerService.deleteCustomer().subscribe(()=> console.log('Employee deleted'));
      
  // }

  onDelete(id:number){

      this.customerService.deleteCustomer(id).subscribe(data =>{
        this.getAllCustomerss();
        alert("Customer deleted successfully!!")
        }) 
  }

  onEdit(id:any){
    console.log(id);
    this.customerService.edit=id
    // console.log(index);
    // console.log(this.users);
    // console.log('-------');
    // console.log(this.pagedUsers);
    // console.log(this.pagedUsers[index]);
    // console.log((this.pagedUsers[index]).id);
    // console.log(this.users[index].id);
    // console.log(this.pagedUsers[index])

    this.dialog.open(EditcustomerComponent ,{
      
      
      width:'750px', // Set desired width
      height:'max-content',
       // Set desired height
      position: {
        top: '-600px',
        left:'250px',
         // Customize the top position
      },
  
    });
  }

  onAccountsClick(id:number){
    this.router.navigate([`accountshome`,id]);
  }
  

}
