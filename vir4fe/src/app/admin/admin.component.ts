import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { LoginService } from '../services/login.service';

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

  users: any;
  dataSource: any;

  displayedColumns: string[] = ['name', 'jpg', 'png', 'gif'];
  constructor(private router: Router, private loginService: LoginService, private adminService: AdminService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  clickLogout() {
    this.loginService.logout(this.username, this.password).subscribe(data => {
      localStorage.clear();
      this.router.navigate(['/login']);
    },error =>{
      console.log('error', error);
    });
  }

  getUserData() {
    this.adminService.getUserData().subscribe(data => {
      this.users = data.message;
      //megfelelo formatumra hozas
      this.dataSource = this.users.map(item => {
        return {id: item._id, name:item.name, username: item.username, permToJpg: item.permToJpg, permToPng: item.permToPng, permToGif: item.permToGif};
      })
    });
  }

  addUserData(data, permission) {
    switch (permission) {
      case "permToJpg":
        console.log(data.id);
        this.adminService.setUserData(data.id, data.name, data.username, !data.permToJpg, data.permToPng, data.permToGif).subscribe(data => {
          console.log('data', data);
        }, error => {
          console.log('error', error);
        });
      break;
      case "permToPng":
        this.adminService.setUserData(data.id, data.name, data.username, data.permToJpg, !data.permToPng, data.permToGif).subscribe(data => {
          console.log('data', data);
        }, error => {
          console.log('error', error);
        });
      break;
      case "permToGif":
        this.adminService.setUserData(data.id, data.name,data.username, data.permToJpg, data.permToPng, !data.permToGif).subscribe(data => {
          console.log('data', data);
        }, error => {
          console.log('error', error);
        });
      break;

    }
    
  }

  changePermission(user, permission) {
    this.addUserData(user, permission);
  }
}
