import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { Config, CONFIG } from './model';
import { ContractsModule } from './contracts/contracts.module';
import { CustomersModule } from './customers/customers.module';
import { CoreModule } from './core/core.module';
import { CustomerBrowserComponent } from './customers/customer-browser/customer-browser.component';
import { CustomerAddComponent } from './customers/customer-add/customer-add.component';
import { ContractListComponent } from './contracts/contract-list/contract-list.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(routes),
    ContractsModule,
    CustomersModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
