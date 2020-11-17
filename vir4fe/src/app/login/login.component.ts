import { Component, OnInit , Inject} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username: string;
  password: string;

  constructor(private route: ActivatedRoute, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  clickLogin() {
    this.router.navigate(['/admin']);
    /*
    this.loginService.login(this.username, this.password).subscribe(data => {
      localStorage.setItem('username', this.username);
      if (
        data.message == "Az orvos bejelentkezese sikeres!") {
        this.router.navigate(['/admin']);
        //this.adminService.setName(data.name);

      } else {
        this.router.navigate(['/user']);
        //this.patientService.setName(data.name);
      }
    }, error => {
      console.log('error', error);
    });*/
  }


}
