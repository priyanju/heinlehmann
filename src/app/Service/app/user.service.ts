import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../../environments/environment';
import { TokenService } from '../core/authentication/token.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  senddata(register) {
    return this.http.post('users',register)
 }
 listing(tenantId):Observable<any>{
   return this.http.get('users?tenant_id='+tenantId)
 }
//  delete_row(id){
//  this.http.delete('users/' + id)
// }
delete_row(id):Observable<any>{
  return this.http.delete('users/' + id)
}

operator():Observable<any> {
  return this.http.get('roles')
}

edit(id,val):Observable<any> {
  return this.http.put('users/'+id,val)
}
}
