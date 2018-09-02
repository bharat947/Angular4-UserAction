import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers} from '@angular/http';
import { ActivatedRoute} from '@angular/router';
import { Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  
id:number;
data:object = {};
users = [];
userObj:object = {};
private headers = new Headers({'Content-Type':'application/json'});
  constructor(private router:Router,private route:ActivatedRoute,private http:Http) { }

 
updateUser(user){
     this.userObj = {
     	"name": user.name,
     	"email": user.email,
     	"mobile": user.mobile,
     	"role": user.role,
     	"address":user.address
     };
     const url = 'http://localhost:3000/user/'+this.id;
     console.log(url);
     this.http.put(url, JSON.stringify(this.userObj), {headers: this.headers})
     .toPromise()
     .then(() => {
       this.router.navigate(['userdata']);
     })
}



  ngOnInit() {
  	this.route.params.subscribe(params => {
  		this.id = +params['id'];
  	});
  	this.http.get("http://localhost:3000/user").subscribe(
     (res: Response) => {
     	this.users = res.json();
     	for(var i = 0;i<this.users.length;i++){
     		if(parseInt(this.users[i].id) === this.id){
     			this.data = this.users[i];
     			break;
     		}
     	}
     }
  		)
  }

}