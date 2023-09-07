import { Component } from '@angular/core';
import { MatDialog} from "@angular/material/dialog";
import { AccountcreateComponent } from '../accountcreate/accountcreate.component';
import { Account, Accounts } from '../models/accounts.model';
import { AccountsService } from '../accounts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../models/customer.model';


@Component({
  selector: 'app-accountshome',
  templateUrl: './accountshome.component.html',
  styleUrls: ['./accountshome.component.css']
})
export class AccountshomeComponent {
  id:number;
  accounts: Accounts[] = [];
  //account:Account= new Account();
  customers:Customer=new Customer();
  constructor(private dialog:MatDialog,private accountsService: AccountsService,private route : ActivatedRoute,private customerService:CustomerService, private router:Router){}
  
  ngOnInit(): void {
     this.getAllAccountsForCustomer();
     this.getCustomerInfo();
     }
  
  onCreate(){
    this.accountsService.custId=this.id;
    this.dialog.open(AccountcreateComponent, {
      width: '90%',
      maxWidth:'500px', // Set desired width
      height: '285px',
       // Set desired height
      
      position: {
        top: '-500px',
        left:'250px' // Customize the top position
      },

      // width: '500px', // Set desired width
      // height: '300px', // Set desired height
      // position: {
      //   top: '-500px',
      //   left:'400px' // Customize the top position

      // this.dialog.open(AccountcreateComponent, {
      //   width: '90%', // Set desired width
      //   maxWidth: '500px', // Limit the maximum width
      // });
  
    });
  }


  onDelete(id:number,accNo:string){

    this.accountsService.deleteAccount(id,accNo).subscribe(data =>{
    alert("Account deleted successfully !!");
      
      }) 
}
  getAllAccountsForCustomer() {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
    this.accountsService.getAccountsForCustomer(this.id).subscribe(data=>{
    this.accounts=data;
    },error=>console.log(error))
    }
 
    getCustomerInfo(){
      this.id=this.route.snapshot.params['id'];
      this.customerService.getCustomer(this.id).subscribe(data=>{
        this.customers=data;
        console.log(data);
      },error=>console.log(error))
    }
  // orders: Order[] = [];

  // constructor(private orderService: OrderService) { }


  // ngOnInit(): void {
  //   this.getAllOrders();
  // }

  // getAllOrders() {
  //   this.orderService.getOrdersForCustomer(1).subscribe(orders => {
  //     this.orders = orders;
  //   });
  // }

}
