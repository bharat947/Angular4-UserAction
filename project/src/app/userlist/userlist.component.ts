import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private http:Http) { }
  id:number;
  private headers = new Headers({'Content-Type':'application/json'});
  
  users = [];
  fetchData = function(){
  	this.http.get("http://localhost:3000/user").subscribe(
     (res: Response) => {
     	this.users = res.json();
     }
  		)
  }

  deleteUser = function(id){
    if(confirm("Are you sure?")){

      const url = 'http://localhost:3000/user/';
      const temp=url+id;
      return this.http.delete(temp, {headers:this.headers}).toPromise()
      .then(()=>{
        this.fetchData();
      })
    }
  }
  ngOnInit() {
  	this.fetchData();
  }

}

