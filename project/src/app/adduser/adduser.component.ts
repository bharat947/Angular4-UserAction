import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers} from '@angular/http';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private http:Http) { }
  successMsg:string = "Registration Successfully Completed!!!";
  isAdded:boolean = false;
  userObj:object = { };

  addNewUser = function(user){
  	this.userObj = {
  		"name":user.name,
  		"password":user.password,
  		"email":user.email,
  		"mobile":user.mobile,
  		"address":user.address,
  		"role":user.role
  	}
  	this.http.post("http://localhost:3000/user/",this.userObj).subscribe((res: Response) => {
     	this.isAdded = true;
     }
  		)
  }

  ngOnInit() {
  }

}

