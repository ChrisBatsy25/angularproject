import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';



import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AboutComponent } from './about/about.component';
import { CustomerplaceorderComponent } from './customerplaceorder/customerplaceorder.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminmodifycustomerComponent } from './adminmodifycustomer/adminmodifycustomer.component';
import { AccountshomeComponent } from './accountshome/accountshome.component';
import { AccountcreateComponent } from './accountcreate/accountcreate.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { NgConfirmModule } from 'ng-confirm-box';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { AccounteditComponent } from './accountedit/accountedit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AboutComponent,
    CustomerplaceorderComponent,
    AdminhomeComponent,
    AdminmodifycustomerComponent,
    AccountshomeComponent,
    AccountcreateComponent,
    CreatecustomerComponent,
    NavbarComponent,
    EditcustomerComponent,
    AccounteditComponent
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgConfirmModule             
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
  
  
})
export class AppModule { }
