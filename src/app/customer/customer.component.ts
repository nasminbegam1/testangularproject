import { Component, OnInit } from '@angular/core';
import { FormGroup,  Validators ,  FormControl} from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import { Global } from '../global.config';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerForm : FormGroup;
  customersResult : Array<{}>=[];
  customerFormValue :  Array<{}>=[];
  totalCount : number;

  constructor(
    private CustomerService : CustomerService,
    private global : Global
  ) { }

  ngOnInit() {
    this.customerForm = new FormGroup({
      username : new FormControl('',[]),
      firstname : new FormControl('',[]),
      lastname : new FormControl('',[]),
      customercode : new FormControl('',[]),
      nickname : new FormControl('',[]),
      userId : new FormControl('',[]),
      startPosition : new FormControl('',[])
    });

    this.customerForm.patchValue({
      startPosition: 0
    });
  }

  customerSearch(){
  }

}
