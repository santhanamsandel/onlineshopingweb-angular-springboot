import { Component } from '@angular/core';
import {  Address, Customer } from '../Customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent  {
  customer: Customer = new Customer();
  // address:Address=new Address();
  addresses: any[] = [];

  constructor(private customerService: CustomerService, private router: Router) { }

  onSubmit() {
    console.log(this.customer);
    this.saveCustomer();
  }
  addAddress() {
    this.customer.addresses.push(new Address());
  }

  removeAddress(index: number) {
    this.customer.addresses.splice(index, 1);
  }

  saveCustomer() {
    this.customerService.createCustomer(this.customer).subscribe(
      data => {
        console.log(data);
       // this.goToCustomerList();
      },
      error => {
        console.log(error);
      }
    );
  }

  goToCustomerList() {
    this.router.navigate(['/customerlist']);
  }

  goBack() {
    this.router.navigateByUrl('/admin');
  }
}