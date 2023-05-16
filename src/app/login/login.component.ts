import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  login: Login=new Login("","");
 

    constructor(private loginService:LoginService,private route:Router) { }
  
    ngOnInit(): void {
    }
 userLogin()
  {
  this.loginService.LoginService(this.login).subscribe(
    data =>{console.log("Login succes",data)
   }
  )
  }
  back()
  {
    this.route.navigate(['/homepage'])
  }
/*
  public onLogin(){
    this.userService.loginUser(this.userRegister).subscribe(data=>{console.log("Login Success"+ data),
  this.userRegister1=data,console.log(this.userRegister1.role)
  this.verifyUser()
  });
  }

  public verifyUser(){
    if(this.userRegister1.role=="ADMIN"){
      this.route.navigate(['/admin-home']);
    }
    else{
      this.route.navigate(['/user-home']);
    }
  }
}*/
}
