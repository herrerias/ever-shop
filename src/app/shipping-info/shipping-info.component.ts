import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShippingInfo } from './shared/shipping-info.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shipping-info',
  templateUrl: './shipping-info.component.html',
  styleUrls: ['./shipping-info.component.css']
})
export class ShippingInfoComponent implements OnInit {
  @Input() shipping : ShippingInfo;
  @Output() submitted: EventEmitter<boolean> = new EventEmitter<boolean>();

  shippingForm : FormGroup;


  constructor(private fb: FormBuilder) { 
  
  }

  ngOnInit() {
    this.shippingForm = this.fb.group({
      name: [this.shipping.name, Validators.required],
      surname: [this.shipping.surname, Validators.required],
      email: [this.shipping.email, Validators.required],
      address: [this.shipping.address, Validators.required],
      address2: [this.shipping.address2],
      country: [this.shipping.country, Validators.required],
      city: [this.shipping.city, Validators.required],
      zipcode: [this.shipping.zipcode, [Validators.required, Validators.minLength(5), Validators.maxLength(5)]]
    });

  }

  onSubmit() {
    this.submitted.emit(true);
  }


}
