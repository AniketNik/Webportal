import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  name:string=""
  email:string=""
  mobile:string=""
  constructor(public http: HttpClient){
    
  }
  submit(){
    let body = {
      "name":this.name,
      "email":this.email,
      "mobile":this.mobile
    }
    console.log(body);
      let val = this.http.post('http://localhost:5006/update', body).subscribe(res=>{
        // console.log(JSON.stringify(res))
        if(res!=null){
          console.log(res);
        }
      })
  }
}