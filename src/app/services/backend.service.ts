import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  getTail(tailId: number): Observable<object> {
    return this.http.get('http://armament.herokuapp.com/tails/' + tailId);
  }
}
