import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserUpdate } from '../Userupdate';
@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  userId:number=0;
  users: UserUpdate = new UserUpdate();
  usertype:any;
  constructor(private userService:UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
  this.getUserById();
   
  }

  
  getUserById(){
    this.userService.getUserById(this.userId).subscribe(data => { console.log("*******",data),
      this.users= data
    });
  }



  onSubmit(){
    this.userService.updateUser(this.userId, this.users).subscribe( data =>{ console.log("updated"),
      this.goToUserList()
    }
    );
  }

  goToUserList(){
    this.router.navigate(['/userlist']);
  }
}
