import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomerAddDeactivateGuard implements CanDeactivate<CustomerAddComponent> {

  constructor() { }
  
  canDeactivate(component: CustomerAddComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return !(component.name || component.age || component.type);
  }

}
