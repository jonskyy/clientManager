import { Component, OnInit, Input, EventEmitter, Output, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Customer, CustomerType } from '../model';
import { CounterService } from '../../core/counter.service';
import { MessageService } from '../../core/message.service';

@Component({
  selector: 'cus-customer-details',
  templateUrl: './customer-details.component.html',
  styles: [
    // '.oddCategory { color: green }'
  ]
})
export class CustomerDetailsComponent implements OnInit, OnDestroy, OnChanges {

  @Input() customer!: Customer;
  @Output() shift = new EventEmitter<string>();

  nameColor: string = "green";
  showPhoto: boolean = false;
  isActive: boolean = false;

  CustomerType = CustomerType;

  constructor(private counterService: CounterService, private messageService: MessageService) { }

  ngOnInit() {
    console.log('init');
    this.counterService.increase();
  }

  ngOnDestroy(): void {
    console.log('destroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.customer.firstChange) {
      console.log(`change from ${changes.customer.previousValue.name} to ${changes.customer.currentValue.name}`);
    }
  }

  changeColor() {
    this.nameColor = this.nameColor === "blue" ? "green" : "blue";
    this.messageService.success('Udało się zmienić kolor!');
  }

  left() {
    this.shift.emit('left');
  }

  right() {
    this.shift.emit('right');
  }

}
