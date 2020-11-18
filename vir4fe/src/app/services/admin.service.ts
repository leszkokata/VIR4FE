import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  name: string;

  setName(val: string){
    this.name = val;
  }

  constructor(private http: HttpClient) { }

  setPermissions(username:string, permToJpg: boolean, permToPng: boolean, permToGif: boolean):Observable<any> {
    const httpOptions = {
      withCredentials: true,
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('http://localhost:8080/admin/setPermission', {
      username:username, permToJpg: permToJpg, permToPng: permToPng, permToGif: permToGif
  }, httpOptions);
  }

  getUserData(name: string):Observable<any> {
    const httpOptions = {
      withCredentials: true,
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get('http://localhost:8080/user/'+ name, httpOptions);
  }


}
