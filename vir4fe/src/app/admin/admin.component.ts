import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

export interface User {
  username: string;
  jpg: boolean;
  png: boolean;
  gif: boolean;
}

const DATA: User[] = [
  { username: 'joska',
  jpg: true,
  png: true,
  gif: false
},
{ username: 'viri',
  jpg: true,
  png: false,
  gif: false
},
{ username: 'piri',
  jpg: true,
  png: true,
  gif: true
},
]
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  name: string;
  username: string;
  email: string;
  password:string;
  
  displayedColumns: string[] = ['username', 'jpg', 'png', 'gif'];
  dataSource = DATA;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  clickLogout() {
    this.loginService.logout(this.username, this.password).subscribe(data => {
      localStorage.clear();
      this.router.navigate(['/login']);
    },error =>{
      console.log('error', error);
    });
  }

}
