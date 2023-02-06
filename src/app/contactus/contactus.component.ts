import { Component } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { FormGroup,  FormBuilder,  Validators, FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})


export class ContactusComponent {
  angForm1!: FormGroup;
  alert:boolean=false



  constructor(private fb: FormBuilder, public http: HttpClient) {
    this.createForm();
    }

    send() {
      let body = {
        "to":this.angForm1.value.email,
        "subject":this.angForm1.value.subject,
        "bod":"HELLO THERE! How can we help you? If you want to connect with us via call, please feel free to dial on 9763641129"
      }

      let val = this.http.post('http://localhost:5007/sendMail', body).subscribe(res=>{
        if(res!=null){
          console.log(res);
        }
      })

      this.alert=true
      this.angForm1.reset({})

    }

    closeAlert() {
      this.alert=false
    }


    createForm() {
      this.angForm1 = this.fb.group({
         name: ['', Validators.required ],
         email: ['', Validators.required ],
         telephone: [''],
         subject: ['']
      });
    }

  // submit(){
  //   let body = {
  //     "name":this.name,
  //     "email":this.email,
  //     "mobile":this.mobile
  //   }
  //   console.log(body);
  //     let val = this.http.post('http://localhost:5006/update', body).subscribe(res=>{
  //       // console.log(JSON.stringify(res))
  //       if(res!=null){
  //         console.log(res);
  //       }
  //     })
  // }
}