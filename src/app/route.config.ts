
import { Routes } from '@angular/router';
import { BeforeloginComponent } from './layout/beforelogin/beforelogin.component';
import { AfterloginComponent } from './layout/afterlogin/afterlogin.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { CreateCustomerComponent } from './customer/create/create.component';

export const RouteCollections: Routes = [
  {
      path : '',
      redirectTo : '/login',
      pathMatch : 'full'
  },
	{
		path: '',
		component: BeforeloginComponent,
		children:[
			{
				path : 'login',
				component : LoginComponent
			}
		]
	},
	{
		path: '',
		component :AfterloginComponent,
		canActivate:[],
		children : [
			{
				path : 'customer',
				component : CustomerComponent
			},
			{
				path : 'customer/create',
				component : CreateCustomerComponent
			}
		]
  },
  {
      path : '**',
      redirectTo : '/login',
      pathMatch : 'full'
  }

	
];