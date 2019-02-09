import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = './assets/DATA.json'

  constructor(private http: HttpClient) { }

  public getAllUser = ():Observable<any>=>{
    return this.http.get(this.baseUrl);
  }
}
