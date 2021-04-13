import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractService } from './contract.service';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ContractDetailsComponent } from './contract-details/contract-details.component';
import { ContractResolver } from './contract-resolver.service';

const routes = [
  { 
    path: 'contracts/:id', 
    component: ContractDetailsComponent,
    resolve: {
      contract: ContractResolver
    } 
  },
  { path: 'contracts', component: ContractListComponent },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContractListComponent, ContractDetailsComponent],
  providers: [
    ContractService,
    ContractResolver
  ],
  exports: [ContractListComponent]
})
export class ContractsModule { }
