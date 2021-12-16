import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../../environments/environment';
import { TokenService } from '../core/authentication/token.service';
@Injectable({
  providedIn: 'root'
})
export class MachinelistService {

  constructor(private http:HttpClient) { }

  machine(value):Observable<any>{
    return this.http.post('machines',value)
  }

  card(tenantId):Observable<any> {
    return this.http.get('machines?tenant_id='+tenantId)
  }
  delete_row(id):Observable<any>{
    return this.http.delete('machines/' + id)
  }

  edit(id,val):Observable<any>{
    return this.http.put('machines/'+id,val)
  }
}
