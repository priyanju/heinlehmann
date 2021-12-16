import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../../environments/environment';
import { TokenService } from '../core/authentication/token.service';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http:HttpClient,private datePipe: DatePipe) { }

  card(tenantId):Observable<any> {
    return this.http.get('machines?tenant_id='+tenantId)
  }
  vendor(tenantId):Observable<any>{
    return this.http.get('tenants?tenant_id='+tenantId)
  }
  display(register):Observable<any>{
   
  
    return this.http.get('machine_analytics_report?machine_id=' + register.machine_id + '&&tenant_id='  + register.tenant_id + '&&start_date=' + register.start_date + '&&end_date=' + register.end_date)
  }
}


//return this.http.get('dashboard_analytics?machine_id=' +id  +'&&date=' + date)
