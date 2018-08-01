import { Component, OnInit } from '@angular/core';
import { FormGroup,  Validators ,  FormControl} from '@angular/forms';
import { CustomerService } from '../../service/customer.service';
import { CustomerService } from '../../service/customer.service';
import { Global } from '../../global.config';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerForm : FormGroup;
  constructor(private CustomerService : CustomerService,
    private global : Global) {
    this.customerForm = new FormGroup({
      username : new FormControl('',[]),
      firstname : new FormControl('',[]),
      lastname : new FormControl('',[]),
      customercode : new FormControl('',[]),
      nickname : new FormControl('',[]),
      userId : new FormControl('',[]),
      startPosition : new FormControl('',[])
    });
   }

  ngOnInit() {
  }

}
