import { Component, OnInit } from '@angular/core';
import { CustomerType } from '../model';
import { CustomerService } from '../customer.service';
import { MessageService } from '../../core/message.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cus-customer-add',
  templateUrl: './customer-add.component.html',
  styles: []
})
export class CustomerAddComponent implements OnInit {
  name!: string;
  age!: number;
  type!: CustomerType;

  CustomerType = CustomerType;

  constructor(
    private customerService: CustomerService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
  }

  add(form: NgForm) {
    this.customerService.createCustomer({
      name: this.name,
      age: this.age,
      type: this.type,
      photoUrl: '',
      categories: [],
      description: '',
      address: {
        city: '',
        houseNumber: 0,
        street: ''
      }
    }).subscribe(
      () => {
        this.messageService.success('Dodano klienta!');
        form.resetForm();
      }
    );
  }

}
