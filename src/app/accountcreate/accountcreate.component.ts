import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Account, Accounts } from '../models/accounts.model';
import { AccountsService } from '../accounts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-accountcreate',
  templateUrl:'./accountcreate.component.html' ,
  styleUrls: ['./accountcreate.component.css'],
  
})
export class AccountcreateComponent {
  
  //createForm: FormGroup;
  accounts: Accounts[] = [];
  account: Account = new Account();
  customer:Customer=new Customer();
  createForm: FormGroup;
  
  //constructor(private fbs: FormBuilder, private dialogRef: MatDialogRef<CreatecustomerComponent>, private customerService: CustomerService, private router: Router) {
    
  constructor(private dialogRef: MatDialogRef<AccountcreateComponent>, private accountService:AccountsService, private route:ActivatedRoute,private custServ:CustomerService,private fbs: FormBuilder) {

    this.createForm = this.fbs.group({
      amount: ['', Validators.required],
      accountType: ['',Validators.required],
      currency:['',Validators.required]
  })
}

  
  onClose() {
    this.dialogRef.close();
    console.log(this.customer.id);
  }

  
  submitForm() {
    if (this.createForm.valid) {
      console.log(this.createForm.value);
    
    } else {
      this.markFormFieldsAsTouched(this.createForm);
    }
  }


  saveAccount(id:any) {
    // this.id=this.route.snapshot.params['id'];
    //console.log(id);
    
    id=this.accountService.custId;
    console.log(id);
    //console.log(this.customer);
    this.accountService.createAccount(this.account ,id).subscribe(data=>{
      console.log(data);
      this.dialogRef.close();
      alert("Account added successfully !!")
    },
    error =>console.log(error))
  }




  markFormFieldsAsTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control) {
        if (control instanceof FormGroup) {
          this.markFormFieldsAsTouched(control);
        } else {
          control.markAsTouched();
        }
      }
    });
  }
}
