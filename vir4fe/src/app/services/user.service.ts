import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  name:string;
  username: string;
  permToJpg: boolean;
  permToPng: boolean;
  permToGif: boolean;

  constructor(private http: HttpClient) { }

  getPermissionData():Observable<any>{
    const httpOptions = {
      withCredentials: true,
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get('http://localhost:8686/user/getpermissondata', httpOptions);
  }

}
