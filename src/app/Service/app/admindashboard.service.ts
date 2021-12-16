import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../../environments/environment';
import { TokenService } from '../core/authentication/token.service';
@Injectable({
  providedIn: 'root'
})
export class AdmindashboardService {

  constructor(private http:HttpClient) { }

  listing(tenantId):Observable<any>{
    return this.http.get('tenants?tenant_id='+tenantId)
  }

  card(tenantId):Observable<any> {
    return this.http.get('machines?tenant_id='+tenantId)
  }
  card2(tenantId):Observable<any> {
    return this.http.get('machines?tenant_id='+tenantId)
  }

  dash_board(id,date):Observable<any> {
    return this.http.get('dashboard_analytics?machine_id=' +id  +'&&date=' + date)
  }
  // http://192.168.0.237:5000/api/v1/dashboard_analytics?machine_id=1&date=2020-10-23

  // return this.http.get('idle_reason_report?machine_name=' + register.machine_name +'&&shift_num=' +register.shift_num +'&&from_date='+ register.date )


}
