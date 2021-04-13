import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Contract } from './model';
import { Observable } from 'rxjs/Observable';
import { ContractService } from './contract.service';

@Injectable()
export class ContractResolver implements Resolve<Contract> {
  constructor(
    private contractService: ContractService
  ) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Contract | Observable<Contract> | Promise<Contract> {
    const id = parseInt(route.params['id']);
    return this.contractService.getContract(id);
  }

}
