import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class UserModel {
  name: string;
  username: string;
  permToJpg: boolean;
  permToPng: boolean;
  permToGif: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  name: string;

  setName(val: string){
    this.name = val;
  }

  constructor(private http: HttpClient) { }

  setUserData(id: string,name: string, username:string, permToJpg: boolean, permToPng: boolean, permToGif: boolean):Observable<any> {
    const httpOptions = {
      withCredentials: true,
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.put('http://localhost:8686/admin/setpermissondata', {
      id: id,
      name: name, username:username, permToJpg: permToJpg, permToPng: permToPng, permToGif: permToGif
  }, httpOptions);
  }

  getUserData():Observable<any> {
    const httpOptions = {
      withCredentials: true,
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get('http://localhost:8686/admin/getpermissondata'+ name, httpOptions);
  }

}
