import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CustomerplaceorderComponent } from './customerplaceorder/customerplaceorder.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminmodifycustomerComponent } from './adminmodifycustomer/adminmodifycustomer.component';
import { AccountshomeComponent } from './accountshome/accountshome.component';
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';

const routes: Routes = [
  {path:'login' , component : LoginComponent},
  {path:'signup', component : SignupComponent},
  {path:'home', component : HomeComponent},
  {path:'customerplaceorder', component : CustomerplaceorderComponent},
  {path:'adminhome', component : AdminhomeComponent},
  {path:'modifycustomer',component : AdminmodifycustomerComponent},
  {path:'accountshome/:id',component : AccountshomeComponent},
  {path:'createCustomer',component:CreatecustomerComponent},
  {path:'editCustomer',component:EditcustomerComponent },
  {path:'',redirectTo:'login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
