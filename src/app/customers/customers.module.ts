import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerBrowserComponent } from './customer-browser/customer-browser.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerService } from './customer.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../core/auth-guard.service';
import { CustomerAddDeactivateGuard } from './customer-add-deactivate-guard.service';

const routes = [
  { path: 'customers', component: CustomerBrowserComponent },
  { path: 'customers/add', component: CustomerAddComponent, canActivate: [ AuthGuard ], canDeactivate: [ CustomerAddDeactivateGuard ] },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CustomerAddComponent,
    CustomerBrowserComponent,
    CustomerDetailsComponent,
  ],
  providers: [
    CustomerService,
    CustomerAddDeactivateGuard
  ],
  exports: [
    CustomerAddComponent,
    CustomerBrowserComponent
  ]
})
export class CustomersModule { }
