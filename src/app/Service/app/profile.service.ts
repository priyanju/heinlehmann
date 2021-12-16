import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../../environments/environment';
import { TokenService } from '../core/authentication/token.service';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }
  
  senddata(register) {
    return this.http.post('tenants/tenant_user_creation',register)
 }
 listing(tenantId):Observable<any>{
   return this.http.get('tenants?tenant_id='+tenantId)
 }
 delete_row(id):Observable<any>{
  return this.http.delete('users/' + id)
}
putdata(id,val):Observable<any>{
  return this.http.put('usersi/'+id,val)
}
// edit(id,val):Observable<any> {
//   return this.http.put('users/'+id,val)
// }
}
