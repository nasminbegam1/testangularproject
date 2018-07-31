import { Injectable } from '@angular/core';
import { AlertService } from './service/alert.service';
@Injectable()
export class Global
{	
	HTTP_HEADER = {
	  	'Access-Control-Allow-Origin' : "*",
	  	"Access-Control-Allow-Credentials": "true",
	  	"Access-Control-Allow-Methods" : "GET,HEAD,OPTIONS,POST,PUT,DELETE",
	  	"Access-Control-Allow-Headers": "access-control-allow-credentials,access-control-allow-headers,access-control-allow-methods,access-control-allow-origin,content-type",
	    'Content-Type':  'application/json'
	}
	_error = '';
	constructor( private alertService: AlertService) {}

	success(message: string) { 
		this.alertService.success(message);
	}
  
	error(message: string) {
		this.alertService.error(message);
	}
  
	info(message: string) {
		this.alertService.info(message);
	}
  
	warn(message: string) {
		this.alertService.warn(message);
	}
  
	clear() {
		this.alertService.clear();
	}
}