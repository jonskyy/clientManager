import { Component, OnInit } from '@angular/core';
import { ContractService } from '../contract.service';
import { Contract } from '../model';

@Component({
  selector: 'ctr-contract-list',
  templateUrl: './contract-list.component.html',
  styles: []
})
export class ContractListComponent implements OnInit {
  contracts!: Contract[];

  constructor(private contractService: ContractService) { }

  ngOnInit() {
    this.contractService.getContracts().subscribe(contracts => {
      this.contracts = contracts;
    });
  }

}