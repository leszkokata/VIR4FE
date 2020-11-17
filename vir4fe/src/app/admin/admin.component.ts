import { Component, OnInit } from '@angular/core';

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

  displayedColumns: string[] = ['username', 'jpg', 'png', 'gif'];
  dataSource = DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
