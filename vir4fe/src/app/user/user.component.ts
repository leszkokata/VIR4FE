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
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  username: string;
  email: string;
  password:string;
  
  jpgs = [
    {img: '/assets/photos/jpg/1.jpg'},
    {img: '/assets/photos/jpg/2.jpg'},
    {img: '/assets/photos/jpg/3.jpg'},
    {img: '/assets/photos/jpg/4.jpg'},
    {img: '/assets/photos/jpg/5.jpg'},
    {img: '/assets/photos/jpg/6.jpg'},
    {img: '/assets/photos/jpg/7.jpg'},
    {img: '/assets/photos/jpg/8.jpg'},
    {img: '/assets/photos/jpg/9.jpg'},
    {img: '/assets/photos/jpg/10.jpg'},    
  ];

  pngs = [
    {img: '/assets/photos/png/1.png'},
    {img: '/assets/photos/png/2.png'},
    {img: '/assets/photos/png/3.png'},
    {img: '/assets/photos/png/4.png'},
    {img: '/assets/photos/png/5.png'},
    {img: '/assets/photos/png/6.png'},
    {img: '/assets/photos/png/7.png'},
    {img: '/assets/photos/png/8.png'},
    {img: '/assets/photos/png/9.png'},
    {img: '/assets/photos/png/10.png'},
  ];

  gifs = [
    {img: '/assets/photos/gif/1.gif'},
    {img: '/assets/photos/gif/2.gif'},
    {img: '/assets/photos/gif/3.gif'},
    {img: '/assets/photos/gif/4.gif'},
    {img: '/assets/photos/gif/5.gif'},
    {img: '/assets/photos/gif/6.gif'},
    {img: '/assets/photos/gif/7.gif'},
    {img: '/assets/photos/gif/8.gif'},
    {img: '/assets/photos/gif/9.gif'},
    {img: '/assets/photos/gif/10.gif'},
  ];

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  user = 
    { username: 'joska',
    jpg: true,
    png: true,
    gif: false
  };
  //kijelentkezes, visszairanyitas a login oldalra
  clickLogout() {
    this.loginService.logout(this.username, this.password).subscribe(data => {
      localStorage.clear();
      this.router.navigate(['/login']);
    },error =>{
      console.log('error', error);
    });
  }
}
